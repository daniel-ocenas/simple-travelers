import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';
import { Loader, Text } from 'UI';
import styles from './InstagramFeed.module.css';

const InstagramFeed = ({ counter }: { counter: number }) => {
  const placeholder = useRef<any>(null);
  const [data, setData] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isError, setIsError] = useState<boolean>(false);
  const [showImage, setShowImage] = useState<boolean>(true);

  const instagramToken = process.env.INSTAGRAM_TOKEN;

  useEffect(() => {
    if (!instagramToken) {
      return;
    }

    const url = new URL(`https://graph.instagram.com/v23.0/daniel_ocenas/media`);
    url.searchParams.set('fields', 'id,caption,media_type,media_url,thumbnail_url,permalink,timestamp');
    url.searchParams.set('access_token', instagramToken);
    const fetchData = async () => {
      setIsLoading(true);
      fetch(url)
        .then((response) => response.json())
        .then((result) => {
          console.log(result);
          setData(result.data.slice(0, counter));
        })
        .catch(() => setIsError(true))
        .finally(() => {
          setIsLoading(false);
        });
    };

    fetchData();

    const callback = (entries: any) => {
      entries.forEach((entry: any) => {
        if (entry.isIntersecting) {
          setShowImage(true);
        }
      });
    };
    const observer = new IntersectionObserver(callback, { threshold: 1.0 });
    if (placeholder.current) observer.observe(placeholder.current);

    return () => observer.disconnect();
  }, [instagramToken, counter]);

  return (
    <>
      {isLoading ? (
        <Loader />
      ) : isError ? (
        <Text $align={'center'}>Instagram preview currently unavailable</Text>
      ) : (
        <div className={styles.instagramItems} ref={placeholder}>
          {showImage &&
            data.map((item: any, index: any) => (
              <div key={index} className={styles.instagramItem}>
                <a key={index} href={item.permalink} className="ig-instagram-link" target="_blank" rel="noreferrer">
                  {item.media_type === 'IMAGE' || item.media_type === 'CAROUSEL_ALBUM' ? (
                    <img className={styles.instagramImg} key={index} src={item.media_url} alt="description" />
                  ) : (
                    <video className={styles.instagramImg} key={index} src={item.media_url} />
                  )}
                  <div className={styles.instagramIcon}>
                    <Image src="/static/icons/instagram.png" alt="ig" width={24} height={24} />
                  </div>
                </a>
              </div>
            ))}
        </div>
      )}
    </>
  );
};

export default InstagramFeed;
