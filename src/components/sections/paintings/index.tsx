import {type FC} from 'react';

import {Picture, Typography} from "@/components";

import COWS from '@/assets/pictures/Cow.jpg';
import HAND from '@/assets/pictures/Hands.jpg';

import './index.scss';



type PaintingsProps = {}

export const Paintings: FC<PaintingsProps> = () => {

  return (
    <div className={'paintings-container'}>
      <Typography
        className={'paintings-container__title'}
        tag={'h3'}
        family={'pt'}
        weight={'regular'}
      >
        Галерея
      </Typography>

      <Picture width={'100%'} caption={{title: 'Кофе и сигареты', position: "horizontal"}} src={COWS} size={{w: 350, h: 200 }}/>

      <Picture width={350} caption={{title: 'Рука', position: "vertical"}} src={HAND} size={{w: 350, h: 200 }}/>
      <Picture width={350} caption={{title: 'Рука', position: "vertical"}} src={HAND} size={{w: 350, h: 200 }}/>

    </div>
  );
};