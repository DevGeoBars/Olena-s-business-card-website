import {type FC, type PropsWithChildren, useEffect, useState} from 'react';

import {classNames} from "@/helpers";
import type {ILinkItem} from "@/model-views";


import './index.scss';
import {Typography} from "@/components";


type HeaderProps = PropsWithChildren<{
  items?: ILinkItem[];
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
        {items?.map(i => <Typography className={'nav__item'}>
          {i.caption}
          <a
            key={i.id}
            href={i.href} // используем href
            onClick={(e) => {
              e.preventDefault();
              const element = document.getElementById(i.href?.replace('#', '') || '');
              if (element) {
                element.scrollIntoView({
                  behavior: 'smooth',
                  block: 'start'
                });
              }
            }}
          >
            {i.caption}
          </a>

        </Typography>)}
      </div>
      <div className={'app-header__tools'}>
        {children}
      </div>
    </header>
  );
};

