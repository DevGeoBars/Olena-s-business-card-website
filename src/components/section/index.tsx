import {type FC, type PropsWithChildren} from 'react';
import {classNames} from "@/helpers";

type SectionProps = PropsWithChildren<{
  className?: string;
  id: string;
}>;

export const Section: FC<SectionProps> = ({id, className, children}) => {
  const cls = classNames('section', {}, [className]);
  return (
    <div id={id} className={cls}>
      {children}
    </div>
  );
};