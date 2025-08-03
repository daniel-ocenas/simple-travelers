import { Video } from '@/components/Video/Videos';

export const metadata = {
  title: 'Videos',
  description: 'This is videos page.',
};

export default function VideosPage() {
  return (
    <>
      <h1 className="my-12 text-center text-3xl font-bold">Videá</h1>
      <Video
        src="https://www.youtube.com/embed/ixmHwvUFBiU?si=Oi4ceeV_BSWuGNiv"
        title="Bali treba jednoducho zažiť"
      />
      <Video
        src="https://www.youtube.com/embed/DujsK0pmo_o?si=1RM-ke-QdVcV8Sjv"
        title="Cestovanie a turistika po Gruzínsku"
      />
      <Video
        src="https://www.youtube.com/embed/s-9kaJvCJ9E"
        title="Slovakia beyond the Arctic Circle, Erasmus 2019"
      />
    </>
  );
}
