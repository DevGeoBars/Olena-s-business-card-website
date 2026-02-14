import {type FC} from 'react';
import {classNames} from "@/helpers";

type PictureProps = {
  width: number;
  caption: { title: string, position: 'horizontal' | 'vertical' };
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
      <span className={'picture__caption'}>{caption.title} {size.w} X {size.h}</span>
    </div>
  );
};