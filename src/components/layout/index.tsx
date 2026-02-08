import {type FC, useEffect, useRef, useState} from 'react';


import {observer} from "mobx-react-lite";


import {Header} from "@/components/header";

import {generateUUID} from "@/helpers";
import {useStores} from "@/providers";
import {Switcher} from "@/components";
import type {Locals} from "@/types";

import './index.scss';
import styles from '@/styles/variables.module.scss';
import {useSections} from "@/components/layout/hooks";


type LayoutProps = {};




export const Layout: FC<LayoutProps> = observer(() => {
  const headerHeight = parseFloat(styles.headerHeight);


  const { userStore } = useStores();

  const [isGallarySectionActive, setIsGallarySectionActive] = useState(false);
  const galleryRef = useRef<HTMLDivElement>(null);


  useEffect(() => {

    if (galleryRef.current === null) return;

    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        console.log('видно')
        setIsGallarySectionActive(true)
      } else {
        console.log('ушел из видимости')
        setIsGallarySectionActive(false);
      }
    }, {threshold: 0.1});
    observer.observe(galleryRef.current);

    return () => observer.disconnect();
  }, []);

  const {
    homeMenuItems,
    galleryMenuItems,

    homeSections,
    gallerySections,
    contactSection
  } = useSections();

  return (
    <div className={'layout-container'}>
      <Header headerHeight={headerHeight} items={isGallarySectionActive ? galleryMenuItems : homeMenuItems}>
        <Switcher<Locals | null>
          items={[
            {id: generateUUID(), caption: 'Ru', value: 'ru', onChange: (value) => userStore.setLanguage(value)},
            {id: generateUUID(), caption: 'En', value: 'en', onChange: (value) => userStore.setLanguage(value)}
          ]}
          value={userStore.UserLanguage}
        />
      </Header>
      <main>
        {homeSections}
        <div className={'section gallery'}  ref={galleryRef}>
          {gallerySections}
        </div>
      </main>
      <footer>
        {contactSection}
      </footer>
    </div>
  );
});

//545 - главная
//малое меню
//545 - обо мне
//иконка домой / меню галерия
//1835 - картины
//1090- росппись стен
//1835 - керамика / мозайка
//1090 - преподование