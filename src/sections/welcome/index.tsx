import {type FC} from 'react';

import {Typography} from "@/components";

import './index.scss';


type WelcomeProps = {
  className?: string;
  id: string;
  caption: string
};

export const Welcome: FC<WelcomeProps> = ({id}) => {
  return (
    <div id={id} className={'welcome-container'}>
      <Typography tag="span" family="open" className={'welcome__text'} >Olena</Typography>
      <Typography tag="span" family="open" className={'welcome__text'} >Brodina</Typography>
    </div>
  );
};