import {type FC} from 'react';

import {Typography} from "@/components";

import './index.scss';



type ContactsProps = {}

export const Contacts: FC<ContactsProps> = ({}) => {
  return (
    <div className={'contacts-container'}>
      <Typography tag={'span'} className="contacts__title" family={'open'} weight={'light'} italic>
        Контакты
      </Typography>
    </div>
  );
};