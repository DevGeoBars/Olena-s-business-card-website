import {type FC} from 'react';

import './index.scss';

type TeachingProps = {title: string};

export const Teaching: FC<TeachingProps> = ({title}) => {
  return (
    <div>{title}</div>
  );
};