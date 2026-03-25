import {type FC} from 'react';

import {useLocalization} from "@/providers";
import {Typography} from "@/components";

import './index.scss';



type AboutProps = {};

export const About: FC<AboutProps> = () => {
  const {translate} = useLocalization();



  return (
    <div className={'about-container'}>
      <div className={'about__cover'}/>

      <div className={'about__content'}>
        <div className={'about__text'}>
          <Typography tag={'span'} className="about__title" family={'pt'} weight={'bold'}>
            {translate('menu.about')}
          </Typography>
          <Typography tag={'span'} family={'pt'} weight={'regular'}>
            {translate('sections.about.bio')}
          </Typography>
          <Typography tag={'span'} family={'pt'} weight={'regular'}>
            {translate('sections.about.text')}
          </Typography>
          <Typography tag={'span'} family={'pt'} weight={'regular'}>
            {translate('sections.about.cv')}
          </Typography>
        </div>
      </div>
    </div>
  );
};