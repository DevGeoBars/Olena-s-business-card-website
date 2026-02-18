import {type FC, type PropsWithChildren, useEffect, useState} from 'react';

import {classNames} from "@/helpers";
import type {IBase} from "@/model-views";


import './index.scss';
import {Typography} from "@/components";


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

  return (
    <header style={{height: headerHeight}} className={cls}>
      <div className={cls2} style={{
        top: isFixed ? 10 : window.innerHeight - 50
      }}>
        {items?.map(i => {
          return <Typography className={'nav__item'} key={i.id}>
            <span
              role='link'
              onClick={() => {
                const sectionElement = document.getElementById(i.id);
                if (sectionElement) {
                  sectionElement.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                  })
                }
              }}
            >
              {i.caption}
            </span>

          </Typography>
        })}
      </div>
      <div className={'app-header__tools'}>
        {children}
      </div>
    </header>
  );
};

