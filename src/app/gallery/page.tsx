import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Galéria',
  description:
    'Prehliadni si výber našich najlepších fotiek z cestovania po celom svete.',
};

export default function GalleryPage() {
  return (
    <>
      <h1 className="mt-12 text-center text-3xl font-bold">Galéria</h1>
    </>
  );
}
