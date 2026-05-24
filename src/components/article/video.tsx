import { VideoBlock } from '@/store/Article/Article.types';

function youtubeEmbedSrc(src: string): string {
  const match = src.match(/(?:youtube\.com\/watch\?v=|youtu\.be\/)([\w-]{11})/);
  return match ? `https://www.youtube.com/embed/${match[1]}` : src;
}

function vimeoEmbedSrc(src: string): string {
  const match = src.match(/vimeo\.com\/(\d+)/);
  return match ? `https://player.vimeo.com/video/${match[1]}` : src;
}

export default function Video({ block }: { block: VideoBlock }) {
  if (block.provider === 'mp4') {
    return (
      <video
        controls
        className="mb-4 w-full rounded-[2px]"
        poster={block.poster?.src}
      >
        <source src={block.src} type="video/mp4" />
      </video>
    );
  }

  const embedSrc =
    block.provider === 'youtube'
      ? youtubeEmbedSrc(block.src)
      : vimeoEmbedSrc(block.src);

  return (
    <div className="mb-4 aspect-video w-full overflow-hidden rounded-[2px]">
      <iframe
        src={embedSrc}
        title="Embedded video"
        className="h-full w-full"
        loading="lazy"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      />
    </div>
  );
}
