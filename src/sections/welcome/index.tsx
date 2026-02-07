import {type FC} from 'react';

import {Typography} from "@/components";

import './index.scss';


type WelcomeProps = {};

export const Welcome: FC<WelcomeProps> = () => {
  return (
    <div className={'welcome-container'}>
      <Typography tag="span" family="open" className={'welcome__text'} >Olena</Typography>
      <Typography tag="span" family="open" className={'welcome__text'} >Brodina</Typography>
    </div>
  );
};