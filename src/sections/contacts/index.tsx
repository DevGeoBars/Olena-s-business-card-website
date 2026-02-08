import {type FC} from 'react';

import {useLocalization} from "@/providers";
import {Typography} from "@/components";

import './index.scss';
import {classNames} from "@/helpers";


type ContactsProps = {
  className?: string;
}

export const Contacts: FC<ContactsProps> = ({ className }) => {
  const {translate} = useLocalization();

  const cls = classNames('contacts-container', {}, [className]);

  return (
    <div id="contacts" className={cls}>
      <div className={'contacts__cover'}/>

      <div className={'contacts__content'}>
        <div className={'contacts__text'}>
          <Typography tag={'span'} className="contacts__title" family={'pt'} weight={'bold'}>
            {translate('sections.contacts.title')}
          </Typography>
          <Typography tag={'span'} family={'pt'} weight={'regular'}>
            {translate('sections.contacts.text')}
          </Typography>
        </div>


        <Typography tag={'span'} className="contacts__title" family={'open'} weight={'light'} italic >
          Холтс  / маслов  / 20/40
        </Typography>
      </div>
    </div>
  );
};