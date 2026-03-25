import {type FC} from 'react';

import { Picture } from "@/components";

import COWS from '@/assets/pictures/Cow.jpg';
import HAND from '@/assets/pictures/Hands.jpg';

import './index.scss';



type PaintingsProps = {}

export const Paintings: FC<PaintingsProps> = () => {

  return (
    <div className={'paintings-container'}>

      <Picture width={'100%'} info={{title: 'Кофе и сигареты', position: "horizontal"}} src={COWS} size={{w: 350, h: 200 }}/>
      <Picture width={350} info={{title: 'Рука', position: "vertical"}} src={HAND} size={{w: 350, h: 200 }}/>
      <Picture width={350} info={{title: 'Рука', position: "vertical"}} src={HAND} size={{w: 350, h: 200 }}/>

      <div>
        <Picture width={350} info={{title: 'Рука', position: "vertical"}} src={HAND} size={{w: 350, h: 200 }}/>
        <Picture width={350} info={{title: 'Рука', position: "vertical"}} src={HAND} size={{w: 350, h: 200 }}/>
      </div>

    </div>
  );
};