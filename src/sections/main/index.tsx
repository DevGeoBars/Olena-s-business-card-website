import {type FC} from 'react';

import './index.scss';

type MainProps = {title: string};

export const Main: FC<MainProps> = ({title}) => {
  return (
    <div>{title}</div>
  );
};