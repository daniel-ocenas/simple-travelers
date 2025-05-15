import Image from 'next/image';
import React, { useEffect, useRef, useState } from 'react';
import { useGetConfig } from 'utils/useGetConfig';
import Loader from '../../UI/Loader';
import styles from './InstagramFeed.module.css';

function InstagramFeed({ counter }: { counter: number }) {
  const placeholder = useRef<any>(null);
  const [data, setData] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isError, setIsError] = useState<boolean>(false);
  const [showImage, setShowImage] = useState<boolean>(true);

  const { config } = useGetConfig();

  useEffect(() => {
    if (!config?.instagramToken) {
      return;
    }
    const url = new URL(`https://graph.facebook.com/v19.0/17841432877203336/media`);
    url.searchParams.set('fields', 'id,caption,media_type,media_url,thumbnail_url,permalink,timestamp');
    url.searchParams.set('access_token', config.instagramToken);
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
  }, [config, counter]);

  return (
    <>
      {isLoading ? (
        <Loader />
      ) : isError ? (
        <p className="errorMessage">Instagram grid currently unavailable</p>
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
}

export default InstagramFeed;
