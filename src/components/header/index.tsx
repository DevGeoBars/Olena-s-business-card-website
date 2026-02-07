import {type FC, type PropsWithChildren, useEffect, useState} from 'react';

import {classNames} from "@/helpers";
import type {IBase} from "@/model-views";


import './index.scss';


type HeaderProps = PropsWithChildren<{
  items?: IBase[];
  headerHeight?: number;
}>;

export const Header: FC<HeaderProps> = ({
  items, children,

   headerHeight = 50,
}) => {
  const [isFixed, setIsFixed] = useState(false);


  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = document.documentElement.scrollTop;
      setIsFixed(scrollTop >  headerHeight * 2);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);


  const cls = classNames('app-header', {
    centered: children === undefined,
    fixed: isFixed
  });

  const cls2 = classNames('app-header__nav', {
    fixed: isFixed
  });

  useEffect(() => {
    const windowHeight = window.innerHeight;
    console.log('Высота окна:', windowHeight);
  }, []);


  return (
    <header style={{height: headerHeight}} className={cls}>
      <div className={cls2} style={{
        top: isFixed ? 10 : window.innerHeight - 50
      }}>
        {items?.map(i => <span>{i.caption}</span>)}
      </div>
      <div className={'app-header__tools'}>
        {children}
      </div>
    </header>
  );
};

