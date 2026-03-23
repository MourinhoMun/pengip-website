'use client';

import { useEffect, useMemo, useState } from 'react';
import Link from 'next/link';
import { ArrowLeft, Upload, Play, RefreshCw, History, Info, Volume2, VolumeX } from 'lucide-react';
import styles from './motion-control.module.scss';

type TaskStatus = 'creating' | 'submitted' | 'processing' | 'succeed' | 'failed';

type Task = {
  externalTaskId: string;
  status: TaskStatus;
  statusMsg?: string | null;
  modelName: string;
  mode: string;
  characterOrientation: string;
  keepOriginalSound: string;
  watermarkEnabled: boolean;
  imageUrl: string;
  videoUrl: string;
  resultUrl?: string | null;
  watermarkUrl?: string | null;
  durationSeconds?: number | null;
  maxPoints: number;
  finalPoints?: number | null;
  refundedPoints?: number | null;
  createdAt: string;
};

const POINTS_PER_SECOND = 10;

export default function MotionControlPage() {
  const [imageFile, setImageFile] = useState<File | null>(null);
  const [videoFile, setVideoFile] = useState<File | null>(null);
  const [prompt, setPrompt] = useState('');

  const [modelName, setModelName] = useState<'kling-v2-6' | 'kling-v3'>('kling-v2-6');
  const [mode, setMode] = useState<'std' | 'pro'>('std');
  const [characterOrientation, setCharacterOrientation] = useState<'image' | 'video'>('image');
  const [keepOriginalSound, setKeepOriginalSound] = useState<'yes' | 'no'>('yes');
  const [watermarkEnabled, setWatermarkEnabled] = useState(false);

  const [submitting, setSubmitting] = useState(false);
  const [activeTaskId, setActiveTaskId] = useState<string | null>(null);
  const [activeTask, setActiveTask] = useState<Task | null>(null);
  const [error, setError] = useState<string | null>(null);

  const [history, setHistory] = useState<Task[]>([]);
  const [showHistory, setShowHistory] = useState(true);

  const imagePreview = useMemo(() => (imageFile ? URL.createObjectURL(imageFile) : null), [imageFile]);
  const videoPreview = useMemo(() => (videoFile ? URL.createObjectURL(videoFile) : null), [videoFile]);

  const maxSeconds = characterOrientation === 'video' ? 30 : 10;
  const maxPoints = maxSeconds * POINTS_PER_SECOND;

  const fetchHistory = async () => {
    try {
      const res = await fetch('/api/motion-control/tasks?page=1&pageSize=20');
      if (!res.ok) return;
      const data = await res.json();
      setHistory((data.tasks || []) as Task[]);
    } catch { /* ignore */ }
  };

  const fetchTask = async (externalTaskId: string) => {
    const res = await fetch(`/api/motion-control/task/${externalTaskId}`);
    const data = await res.json();
    if (!res.ok) {
      throw new Error(data?.error || '查询失败');
    }
    return data.task as Task;
  };

  useEffect(() => {
    fetchHistory();
  }, []);

  // Poll while task is running.
  useEffect(() => {
    if (!activeTaskId) return;

    let stopped = false;
    let timer: any;

    const tick = async () => {
      try {
        const t = await fetchTask(activeTaskId);
        if (stopped) return;
        setActiveTask(t);
        if (t.status === 'succeed' || t.status === 'failed') {
          fetchHistory();
          return;
        }
      } catch (e: any) {
        if (!stopped) setError(e?.message || '查询失败');
      }
      timer = setTimeout(tick, 2500);
    };

    tick();

    return () => {
      stopped = true;
      if (timer) clearTimeout(timer);
    };
  }, [activeTaskId]);

  const handleSubmit = async () => {
    setError(null);
    if (!imageFile || !videoFile) {
      setError('请先上传照片和动作视频');
      return;
    }

    setSubmitting(true);
    try {
      const fd = new FormData();
      fd.append('image_file', imageFile);
      fd.append('video_file', videoFile);
      fd.append('prompt', prompt);
      fd.append('model_name', modelName);
      fd.append('mode', mode);
      fd.append('character_orientation', characterOrientation);
      fd.append('keep_original_sound', keepOriginalSound);
      fd.append('watermark_enabled', watermarkEnabled ? '1' : '0');

      const res = await fetch('/api/motion-control/create', {
        method: 'POST',
        body: fd,
      });
      const data = await res.json();

      if (!res.ok) {
        throw new Error(data?.error || '创建失败');
      }

      setActiveTaskId(data.externalTaskId);
      setActiveTask(null);
      await fetchHistory();
    } catch (e: any) {
      setError(e?.message || '创建失败');
    } finally {
      setSubmitting(false);
    }
  };

  const pickFromHistory = async (t: Task) => {
    setError(null);
    setActiveTaskId(t.externalTaskId);
    setActiveTask(t);
  };

  const statusLabel = (s?: string) => {
    if (!s) return '';
    const map: Record<string, string> = {
      creating: '创建中',
      submitted: '已提交',
      processing: '生成中',
      succeed: '成功',
      failed: '失败',
    };
    return map[s] || s;
  };

  return (
    <main className={styles.page}>
      <header className={styles.header}>
        <Link href="/" className={styles.backBtn}>
          <ArrowLeft size={18} /> 返回首页
        </Link>
        <div className={styles.headerRight}>
          <div className={styles.title}>动作复刻</div>
          <div className={styles.subTitle}>10 积分 / 秒（按成片时长结算）</div>
        </div>
      </header>

      <div className={styles.container}>
        <section className={styles.card}>
          <div className={styles.cardTitle}>
            <Upload size={16} /> 上传素材
          </div>

          <div className={styles.uploadGrid}>
            <div className={styles.uploadBox}>
              <label className={styles.uploadLabel}>参考照片</label>
              <input
                type="file"
                accept="image/png,image/jpeg"
                onChange={(e) => setImageFile(e.target.files?.[0] || null)}
              />
              {imagePreview && (
                // eslint-disable-next-line @next/next/no-img-element
                <img className={styles.previewImg} src={imagePreview} alt="preview" />
              )}
              <div className={styles.hint}>jpg/jpeg/png，建议清晰上半身或全身</div>
            </div>

            <div className={styles.uploadBox}>
              <label className={styles.uploadLabel}>动作视频</label>
              <input
                type="file"
                accept="video/mp4,video/quicktime"
                onChange={(e) => setVideoFile(e.target.files?.[0] || null)}
              />
              {videoPreview && (
                <video className={styles.previewVideo} src={videoPreview} controls />
              )}
              <div className={styles.hint}>mp4/mov，建议单人、一镜到底、动作相对稳定</div>
            </div>
          </div>
        </section>

        <section className={styles.card}>
          <div className={styles.cardTitle}>
            <Info size={16} /> 参数设置
          </div>

          <div className={styles.formGrid}>
            <div className={styles.formRow}>
              <label>模型</label>
              <select value={modelName} onChange={(e) => setModelName(e.target.value as any)}>
                <option value="kling-v2-6">v2-6（推荐）</option>
                <option value="kling-v3">v3</option>
              </select>
            </div>

            <div className={styles.formRow}>
              <label>模式</label>
              <select value={mode} onChange={(e) => setMode(e.target.value as any)}>
                <option value="std">标准</option>
                <option value="pro">高品质</option>
              </select>
            </div>

            <div className={styles.formRow}>
              <label>人物朝向参考</label>
              <select value={characterOrientation} onChange={(e) => setCharacterOrientation(e.target.value as any)}>
                <option value="image">跟照片一致（最多 10 秒）</option>
                <option value="video">跟视频一致（最多 30 秒）</option>
              </select>
            </div>

            <div className={styles.formRow}>
              <label>保留原声</label>
              <button
                className={styles.toggle}
                onClick={() => setKeepOriginalSound(keepOriginalSound === 'yes' ? 'no' : 'yes')}
                type="button"
              >
                {keepOriginalSound === 'yes' ? (<><Volume2 size={14} /> 是</>) : (<><VolumeX size={14} /> 否</>)}
              </button>
            </div>

            <div className={styles.formRow}>
              <label>生成水印版</label>
              <input type="checkbox" checked={watermarkEnabled} onChange={(e) => setWatermarkEnabled(e.target.checked)} />
            </div>

            <div className={styles.formRowFull}>
              <label>提示词（可选）</label>
              <textarea
                value={prompt}
                onChange={(e) => setPrompt(e.target.value)}
                placeholder="可写：服装、场景、运镜、光线等。最多 2500 字"
              />
            </div>
          </div>

          <div className={styles.notice}>
            <div className={styles.noticeTitle}>计费说明</div>
            <div className={styles.noticeBody}>
              本次生成会先预扣 <b>{maxPoints}</b> 积分（{POINTS_PER_SECOND}积分/秒，最多{maxSeconds}秒），成功后按成片时长结算，多退少补。
            </div>
          </div>

          {error && <div className={styles.error}>{error}</div>}

          <div className={styles.actions}>
            <button className={styles.primaryBtn} onClick={handleSubmit} disabled={submitting}>
              {submitting ? (<><RefreshCw size={14} className={styles.spin} /> 提交中...</>) : (<><Play size={14} /> 开始生成</>)}
            </button>
          </div>
        </section>

        <section className={styles.card}>
          <div className={styles.cardTitle}>
            <Play size={16} /> 当前任务
          </div>

          {!activeTaskId ? (
            <div className={styles.empty}>还没有任务，先上传素材并点击开始生成。</div>
          ) : (
            <div className={styles.taskBox}>
              <div className={styles.taskMeta}>
                <div><b>任务ID</b> {activeTaskId}</div>
                <div><b>状态</b> {statusLabel(activeTask?.status)}</div>
                {activeTask?.statusMsg && <div className={styles.taskMsg}>{activeTask.statusMsg}</div>}
              </div>

              {activeTask?.resultUrl ? (
                <div className={styles.result}>
                  <video className={styles.resultVideo} src={activeTask.resultUrl} controls />
                  <div className={styles.resultActions}>
                    <a className={styles.linkBtn} href={activeTask.resultUrl} target="_blank" rel="noreferrer">下载原版</a>
                    {activeTask.watermarkUrl && (
                      <a className={styles.linkBtn} href={activeTask.watermarkUrl} target="_blank" rel="noreferrer">下载水印版</a>
                    )}
                  </div>
                  <div className={styles.bill}>
                    {typeof activeTask.durationSeconds === 'number' && (
                      <span>时长：{activeTask.durationSeconds}s</span>
                    )}
                    {typeof activeTask.finalPoints === 'number' && (
                      <span>实际扣费：{activeTask.finalPoints} 积分</span>
                    )}
                    {typeof activeTask.refundedPoints === 'number' && activeTask.refundedPoints > 0 && (
                      <span>退回：{activeTask.refundedPoints} 积分</span>
                    )}
                  </div>
                </div>
              ) : (
                <div className={styles.runningHint}>任务进行中，会自动刷新状态。</div>
              )}
            </div>
          )}
        </section>

        <section className={styles.card}>
          <div className={styles.cardTitle}>
            <History size={16} /> 历史记录
            <button className={styles.smallBtn} onClick={() => setShowHistory(!showHistory)}>
              {showHistory ? '收起' : '展开'}
            </button>
            <button className={styles.smallBtn} onClick={fetchHistory}>刷新</button>
          </div>

          {showHistory && (
            <div className={styles.historyList}>
              {history.length === 0 ? (
                <div className={styles.empty}>暂无历史记录</div>
              ) : (
                history.map((t) => (
                  <button key={t.externalTaskId} className={styles.historyItem} onClick={() => pickFromHistory(t)}>
                    <div className={styles.hLeft}>
                      <div className={styles.hId}>{t.externalTaskId}</div>
                      <div className={styles.hSub}>
                        {statusLabel(t.status)}{t.durationSeconds ? ` · ${t.durationSeconds}s` : ''}
                      </div>
                    </div>
                    <div className={styles.hRight}>
                      {t.finalPoints != null ? `${t.finalPoints}积分` : `预扣${t.maxPoints}积分`}
                    </div>
                  </button>
                ))
              )}
            </div>
          )}
        </section>
      </div>
    </main>
  );
}
