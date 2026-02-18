import {type FC, type PropsWithChildren} from 'react';
import {classNames} from "@/helpers";

import './index.scss'
import {Typography} from "@/components";

type SectionProps = PropsWithChildren<{
  className?: string;
  id: string;
  title?: string;
}>;

export const Section: FC<SectionProps> = ({id, className, title, children}) => {
  const cls = classNames('section', {}, [className]);

  console.log(title)
  return (
    <div id={id} className={cls}>
      {title && <Typography
        className={'section__title'}
        tag={'h3'}
        family={'pt'}
        weight={'regular'}
      >
        {title}
      </Typography>}
      {children}
    </div>
  );
};