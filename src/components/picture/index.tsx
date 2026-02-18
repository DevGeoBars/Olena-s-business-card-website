import {type FC} from 'react';
import {classNames} from "@/helpers";

import './index.scss'
import {Typography} from "@/components";

type PictureProps = {
  width: number | string;
  caption: { title: string, position: 'horizontal' | 'vertical', text?: string, material?: string };
  src: string;
  size: {w: number, h: number};
};

export const Picture: FC<PictureProps> = ({
  width,
  caption,
  size,
  src
}) => {
  const cls = classNames('picture-container', {horizontal: caption.position === 'horizontal'})
  return (
    <div className={cls} >
      <img src={src} className={'picture__img'} style={{width}} />
      <div className={'picture__description'}>
        <Typography tag={'span'} className="about__title" family={'pt'} weight={'bold'}>
          {caption.title}
        </Typography>
        <Typography tag={'span'} family={'pt'} weight={'regular'}>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis, commodi corporis deserunt eaque eligendi eos esse facere iure, laboriosam nam odit officia quibusdam quisquam quod sequi sit sunt ut veritatis?
        </Typography>
      </div>

      <Typography tag={'span'} className="about__title" family={'open'} weight={'light'} italic >
        Холтс  / маслов  / {size.w} X {size.h}
      </Typography>
    </div>
  );
};