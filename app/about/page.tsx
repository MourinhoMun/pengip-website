import { Navbar, Footer } from '@/app/components';
import { Experience } from '@/app/components';

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <main style={{ paddingTop: '80px' }}>
        <Experience />
      </main>
      <Footer />
    </>
  );
}
