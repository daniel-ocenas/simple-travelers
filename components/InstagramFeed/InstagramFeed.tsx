import Image from 'next/image';
import styles from './InstagramFeed.module.css';
// import React, { useEffect, useRef, useState } from 'react';
// import { Loader } from 'UI';
// import { useGetConfig } from 'utils/useGetConfig';

function InstagramFeed() {
  const baseFeed = Array(6).fill(0);

  return (
    <div
      // @ts-ignore
      feedspring="inst_BSBJjo9Jfm3QHZMWkmXfq"
      feed-options="render:dynamic"
      className={styles.instagramItems}
    >
      {baseFeed.map((_item: any, index: any) => (
        <div
          key={index}
          // @ts-ignore
          feedspring={'post'}
          className={styles.instagramItem}
        >
          <a key={index} feed-field={'link'} target={'_blank'} rel={'noreferrer'}>
            <img
              feed-field={'img'}
              src={'../images/Load.gif'}
              alt={'Instagram post image'}
              className={styles.instagramImg}
              style={{ width: '100px', height: '100px' }}
              loading={'lazy'}
            />
            <div className={styles.instagramIcon}>
              <Image src={'/static/icons/instagram.png'} alt={'ig'} width={24} height={24} />
            </div>
          </a>
        </div>
      ))}
    </div>
  );
}

export default InstagramFeed;

//
// function InstagramFeed({ counter }: { counter: number }) {
//   const placeholder = useRef<any>(null);
//   const [data, setData] = useState<any[]>([]);
//   const [isLoading, setIsLoading] = useState<boolean>(false);
//   const [isError, setIsError] = useState<boolean>(false);
//   const [showImage, setShowImage] = useState<boolean>(true);
//
//   const { config } = useGetConfig();
//
//   useEffect(() => {
//     if (!config?.instagramToken) {
//       return;
//     }
//     const url = new URL(`https://graph.facebook.com/v19.0/17841432877203336/media`);
//     url.searchParams.set('fields', 'id,caption,media_type,media_url,thumbnail_url,permalink,timestamp');
//     url.searchParams.set('access_token', config.instagramToken);
//     const fetchData = async () => {
//       setIsLoading(true);
//       fetch(url)
//         .then((response) => response.json())
//         .then((result) => {
//           console.log(result);
//           setData(result.data.slice(0, counter));
//         })
//         .catch(() => setIsError(true))
//         .finally(() => {
//           setIsLoading(false);
//         });
//     };
//
//     fetchData();
//
//     const callback = (entries: any) => {
//       entries.forEach((entry: any) => {
//         if (entry.isIntersecting) {
//           setShowImage(true);
//         }
//       });
//     };
//     const observer = new IntersectionObserver(callback, { threshold: 1.0 });
//     if (placeholder.current) observer.observe(placeholder.current);
//
//     return () => observer.disconnect();
//   }, [config, counter]);
//
//   return (
//     <>
//       {isLoading ? (
//         <Loader />
//       ) : isError ? (
//         <p className="errorMessage">Instagram grid currently unavailable</p>
//       ) : (
//         <div className={styles.instagramItems} ref={placeholder}>
//           {showImage &&
//             data.map((item: any, index: any) => (
//               <div key={index} className={styles.instagramItem}>
//                 <a key={index} href={item.permalink} className="ig-instagram-link" target="_blank" rel="noreferrer">
//                   {item.media_type === 'IMAGE' || item.media_type === 'CAROUSEL_ALBUM' ? (
//                     <img className={styles.instagramImg} key={index} src={item.media_url} alt="description" />
//                   ) : (
//                     <video className={styles.instagramImg} key={index} src={item.media_url} />
//                   )}
//                   <div className={styles.instagramIcon}>
//                     <Image src="/static/icons/instagram.png" alt="ig" width={24} height={24} />
//                   </div>
//                 </a>
//               </div>
//             ))}
//         </div>
//       )}
//     </>
//   );
// }
//
// export default InstagramFeed;
