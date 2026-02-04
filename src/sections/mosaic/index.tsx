import {type FC} from 'react';

import './index.scss';

type MosaicProps = {title: string};

export const Mosaic: FC<MosaicProps> = ({title}) => {
  return (
    <div className={'mosaic-container'}>{title}</div>
  );
};