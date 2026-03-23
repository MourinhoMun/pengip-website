'use client';
import { useState, useEffect } from 'react';

export interface BrandConfig {
  name: string;
  homeUrl: string;
  isYimei: boolean;
}

const DEFAULT: BrandConfig = { name: '鹏哥', homeUrl: '/', isYimei: false };

export function useBrand(): BrandConfig {
  const [brand, setBrand] = useState<BrandConfig>(DEFAULT);

  useEffect(() => {
    const isYimei = window.location.hostname.includes('yimeimeigong.com');
    setBrand({
      name: isYimei ? '医美美工' : '鹏哥',
      homeUrl: '/',
      isYimei,
    });
  }, []);

  return brand;
}
