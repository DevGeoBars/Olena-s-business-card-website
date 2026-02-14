import {type FC} from 'react';

type PictureProps = {
  height: number;
  width: number;
  caption: string;
  src: string;
  size: {w: number, h: number};
};

export const Picture: FC<PictureProps> = ({
  height,
  width,
  caption,
  size,
  src
}) => {
  return (
    <div className={'picture-container'} >
      <img src={src} className={'picture__img'} style={{height, width}} />
      <span className={'picture__caption'}>{caption} {size.w} X {size.h}</span>
    </div>
  );
};