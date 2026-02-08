import {type FC} from 'react';

import {Typography} from "@/components";

import './index.scss';
import {classNames} from "@/helpers";


type ContactsProps = {

  className?: string;
  id: string;
  caption: string
}

export const Contacts: FC<ContactsProps> = ({ id, className, caption }) => {


  const cls = classNames('contacts-container', {}, [className]);

  return (
    <div id={id} className={cls}>
      <Typography tag={'span'} className="contacts__title" family={'open'} weight={'light'} italic >
        {caption}
      </Typography>
    </div>
  );
};