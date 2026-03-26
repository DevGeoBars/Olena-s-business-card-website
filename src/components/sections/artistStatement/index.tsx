import { type FC, useEffect, useRef, useState } from 'react';

import { useLocalization } from "@/providers";
import { Typography } from "@/components";

import './index.scss';

type ArtistStatementProps = {};

export const ArtistStatement: FC<ArtistStatementProps> = () => {
  const { translate } = useLocalization();
  const containerRef = useRef<HTMLDivElement>(null);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        // Убираем анимацию при уходе из области видимости
        if (!entry.isIntersecting) {
          setIsInView(false);
        } else {
          setIsInView(true);
        }
      },
      {
        threshold: 0.3, // Срабатывает при 30% видимости блока
      }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={containerRef}
      className={`as-container ${isInView ? 'in-view' : ''}`}
    >
      <div className={'as__cover'} />
      <div className={'as__content'}>
        <div className={'as__text'}>
          <Typography tag={'span'} className="as__title" family={'pt'} weight={'bold'}>
            {translate('menu.as')}
          </Typography>
          <Typography tag={'span'} family={'pt'} weight={'regular'}>
            {translate('sections.as.paragraph.first')}
          </Typography>
          <Typography tag={'span'} family={'pt'} weight={'regular'}>
            {translate('sections.as.paragraph.second')}
          </Typography>
          <Typography tag={'span'} family={'pt'} weight={'regular'}>
            {translate('sections.as.paragraph.third')}
          </Typography>
        </div>
      </div>
    </div>
  );
};