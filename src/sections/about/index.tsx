import {type FC} from 'react';

import './index.scss';

type AboutProps = {title: string};

export const About: FC<AboutProps> = ({title}) => {
  return (
    <div>{title}</div>
  );
};