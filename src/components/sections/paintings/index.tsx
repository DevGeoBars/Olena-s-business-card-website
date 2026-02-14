import {type FC} from 'react';

import {Picture} from "@/components";

import COWS from '@/assets/pictures/Cow.jpg';

import './index.scss';



type PaintingsProps = {}

export const Paintings: FC<PaintingsProps> = () => {

  return (
    <div className={'paintings-container'}>
      Paintings
      <Picture width={800} caption={{title: 'Кофе и сигареты', position: "horizontal"}} src={COWS} size={{w: 350, h: 200 }}/>

    </div>
  );
};