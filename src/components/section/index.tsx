import {type FC, type PropsWithChildren} from 'react';
import {classNames} from "@/helpers";

type SectionProps = PropsWithChildren<{
  className?: string;
  id: string;
  caption: string
}>;

export const Section: FC<SectionProps> = ({id, className, caption, children}) => {
  const cls = classNames('contacts-container', {}, [className]);
  return (
    <div id={id} className={cls}>
      {caption}
      {children}
    </div>
  );
};