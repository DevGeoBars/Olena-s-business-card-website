import {type FC, type PropsWithChildren, useEffect, useRef, useState} from 'react';

import {classNames} from "@/helpers";
import type {IBase} from "@/model-views";


import './index.scss';


type HeaderProps = PropsWithChildren<{
  items?: IBase[];
  headerHeight?: number;

  fixed?: boolean
}>;

export const Header: FC<HeaderProps> = ({
                                          headerHeight = 50, items, fixed, children
                                        }) => {
  const [isSticky, setIsSticky] = useState(false);
  const headerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (fixed) return;

    const handleScroll = () => {
      if (!headerRef.current) return;
      const scrollTop = document.documentElement.scrollTop;
      setIsSticky(scrollTop > 0);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [fixed]);


  const cls = classNames('app-header', {
    centered: children === undefined,
    sticky: isSticky
  });

  const cls2 = classNames('app-header__nav', {
    sticky: isSticky
  });



  return (
    <header style={{height: headerHeight}} className={cls}>
      <div ref={headerRef} className={cls2}>
        {items?.map(i => <span>{i.caption}</span>)}
      </div>
      <div className={'app-header__tools'}>
        {children}
      </div>
    </header>
  );
};

