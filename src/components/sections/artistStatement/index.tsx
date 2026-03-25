import {type FC} from 'react';

import {useLocalization} from "@/providers";
import {Typography} from "@/components";

import './index.scss';



type ArtistStatementProps = {};

export const ArtistStatement: FC<ArtistStatementProps> = () => {
  const {translate} = useLocalization();



  return (
    <div className={'as-container'}>
      <div className={'as__cover'}/>

      <div className={'as__content'}>
        <div className={'as__text'}>
          <Typography tag={'span'} className="as__title" family={'pt'} weight={'bold'}>
            {translate('menu.as')}
          </Typography>
          <Typography tag={'span'} family={'pt'} weight={'regular'}>
            {translate('sections.as.paragraph.first')}
          </Typography>
          <Typography tag={'span'} family={'pt'} weight={'regular'}>
            {translate('sections.as.paragraph.second')}
          </Typography>
          <Typography tag={'span'} family={'pt'} weight={'regular'}>
            {translate('sections.as.paragraph.third')}
          </Typography>
        </div>
      </div>
    </div>
  );
};