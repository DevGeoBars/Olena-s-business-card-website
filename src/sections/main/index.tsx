import {type FC} from 'react';

import {Typography} from "@/components";

import './index.scss';


type MainProps = {};

export const Main: FC<MainProps> = () => {
  return (
    <div className={'main-container'}>
      <Typography tag="span" family="open" className={'main-container__text'} >Olena</Typography>
      <Typography tag="span" family="open" className={'main-container__text'} >Brodina</Typography>
    </div>
  );
};