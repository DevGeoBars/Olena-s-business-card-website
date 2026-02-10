import {useEffect, useRef, useState} from "react";

export const useGalleryInterSection = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isGalleryInViewPort, setIsGalleryInViewPort] = useState(false);

  useEffect(() => {
    if (containerRef.current === null) return;
    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        console.log('видно')
        setIsGalleryInViewPort(true)
      } else {
        console.log('ушел из видимости')
        setIsGalleryInViewPort(false);
      }
    }, {threshold: 0.1});
    observer.observe(containerRef.current);

    return () => observer.disconnect();
  }, []);

  return {
    containerRef,
    isGalleryInViewPort
  }
}