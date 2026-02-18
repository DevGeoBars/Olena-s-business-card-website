import { type FC } from 'react';
import {observer} from "mobx-react-lite";


import {generateUUID} from "@/helpers";
import {useStores} from "@/providers";
import {Switcher} from "@/components";
import type {Locals} from "@/types";

import {Header} from "../header";
import {useGalleryInterSection, useSections} from "./hooks";

import './index.scss';
import styles from '@/styles/variables.module.scss';


const headerHeight = parseFloat(styles.headerHeight);

export const Layout: FC = observer(() => {
  const { userStore } = useStores();
  const {
    containerRef,
    isGalleryInViewPort
  } = useGalleryInterSection();


  const {
    homeMenuItems,
    galleryMenuItems,

    homeSections,
    gallerySections,
    contactSection
  } = useSections();

  return (
    <div className={'layout-container'}>
      <Header
        headerHeight={headerHeight}
        items={isGalleryInViewPort ? galleryMenuItems : homeMenuItems}
      >
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
        <div className={'section gallery'} ref={containerRef}>
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