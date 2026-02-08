import {type FC, useState} from 'react';


import {observer} from "mobx-react-lite";

import {About, Mosaic, Paintings, Teaching, WallPaintings, Welcome} from "@/sections";
import {Header} from "@/components/header";
import type {ILinkItem} from "@/model-views";
import {generateUUID} from "@/helpers";
import {useLocalization, useStores} from "@/providers";
import {Switcher} from "@/components";
import type {Locals} from "@/types";

import './index.scss';
import styles from '@/styles/variables.module.scss';

type LayoutProps = {};




export const Layout: FC<LayoutProps> = observer(() => {
  const { translate } = useLocalization();
  const { userStore } = useStores();

  const headerHeight = parseFloat(styles.headerHeight);



  const smallMenuItems: ILinkItem[] = [
    {
      id: generateUUID(),
      caption: translate('menu.about') as string,
      href: '#about'
    },
    {
      id: generateUUID(),
      caption: translate('menu.gallery') as string,
      href: '#paintings'
    },
    {
      id: generateUUID(),
      caption: translate('menu.contacts') as string,
      href: '#contacts'
    }
  ];

  const gallaryMenuItems: ILinkItem[] = [
    {
      id: generateUUID(),
      caption: translate('menu.paintings') as string,
      href: '#paintings'
    },
    {
      id: generateUUID(),
      caption: translate('menu.wall-paintings') as string,
      href: '#wall-paintings'
    },
    {
      id: generateUUID(),
      caption: translate('menu.mosaic') as string,
      href: '#mosaic'
    },
    {
      id: generateUUID(),
      caption: translate('menu.teaching') as string,
      href: '#teaching'
    }
  ];


  return (
    <div className={'layout-container'}>
      <Header headerHeight={headerHeight} items={smallMenuItems}>
        <Switcher<Locals | null>
          items={[
            {id: generateUUID(), caption: 'Ru', value: 'ru', onChange: (value) => userStore.setLanguage(value)},
            {id: generateUUID(), caption: 'En', value: 'en', onChange: (value) => userStore.setLanguage(value)}
          ]}
          value={userStore.UserLanguage}
        />
      </Header>
      <main>
        <Welcome className={'section'}/>
        <About className={'section'}/>
        <div className={'section gallery'}  ref={galleryRef}>
          <Paintings className={'section'}/>
          <WallPaintings className={'section'}/>
          <Mosaic className={'section'}/>
          <Teaching className={'section'}/>
        </div>
      </main>
      <footer>
        футер
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