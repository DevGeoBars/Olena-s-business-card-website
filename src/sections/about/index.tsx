import {type FC} from 'react';

import {useLocalization} from "@/providers";
import {Typography} from "@/components";

import './index.scss';
import {classNames} from "@/helpers";


type AboutProps = {
  className?: string;
  id: string;
  caption: string
};

export const About: FC<AboutProps> = ({ id, className }) => {
  const {translate} = useLocalization();

  const cls = classNames('about-container', {}, [className]);

  return (
    <div id={id} className={cls}>
      <div className={'about__cover'}/>

      <div className={'about__content'}>
        <div className={'about__text'}>
          <Typography tag={'span'} className="about__title" family={'pt'} weight={'bold'}>
            {translate('sections.about.title')}
          </Typography>
          <Typography tag={'span'} family={'pt'} weight={'regular'}>
            {translate('sections.about.text')}
          </Typography>
        </div>


        <Typography tag={'span'} className="about__title" family={'open'} weight={'light'} italic >
          Холтс  / маслов  / 20/40
        </Typography>
      </div>
    </div>
  );
};