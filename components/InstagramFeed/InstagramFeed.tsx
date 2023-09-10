import React, { useEffect, useRef, useState } from 'react'
import Image from 'next/image'
import Loader from '../../UI/Loader'
import styles from './InstagramFeed.module.css'

function InstagramFeed({ counter }: { counter: number }) {
  const placeholder = useRef<any>()
  const [data, setData] = useState<any[]>([])
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const [isError, setIsError] = useState<boolean>(false)
  const [showImage, setShowImage] = useState<boolean>(true)

  let url = `https://graph.instagram.com/me/media?fields=media_count,media_type,permalink,media_url,caption&&access_token=${process.env.NEXT_PUBLIC_INSTAGRAM_ACCESS_TOKEN}`

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true)
      fetch(url)
        .then((response) => response.json())
        .then((result) => {
          setData(result.data.slice(0, counter))
        })
        .catch(() => setIsError(true))
        .finally(() => {
          setIsLoading(false)
        })
    }

    fetchData()

    const callback = (entries: any) => {
      entries.forEach((entry: any) => {
        if (entry.isIntersecting) {
          setShowImage(true)
        }
      })
    }
    const observer = new IntersectionObserver(callback, { threshold: 1.0 })
    if (placeholder.current) observer.observe(placeholder.current)

    return () => observer.disconnect()
  }, [url, counter])

  return (
    <>
      {isLoading ? (
        <Loader />
      ) : isError ? (
        <p className="errorMessage"> the access token is not valid</p>
      ) : (
        <div className={styles.instagramItems} ref={placeholder}>
          {showImage &&
            data.map((item: any, index: any) => (
              <div key={index} className={styles.instagramItem}>
                <a
                  key={index}
                  href={item.permalink}
                  className="ig-instagram-link"
                  target="_blank"
                  rel="noreferrer"
                >
                  {item.media_type === 'IMAGE' ||
                  item.media_type === 'CAROUSEL_ALBUM' ? (
                    <img
                      className={styles.instagramImg}
                      key={index}
                      src={item.media_url}
                      alt="description"
                    />
                  ) : (
                    <video
                      className={styles.instagramImg}
                      key={index}
                      src={item.media_url}
                    />
                  )}
                  <div className={styles.instagramIcon}>
                    <Image
                      src="/icons/icon-instagram.png"
                      alt="ig"
                      width={24}
                      height={24}
                    />
                  </div>
                </a>
              </div>
            ))}
        </div>
      )}
    </>
  )
}
export default InstagramFeed
