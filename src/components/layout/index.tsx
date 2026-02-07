import {type FC} from 'react';

import './index.scss';
import {observer} from "mobx-react-lite";
import {About, Mosaic, Paintings, Teaching, WallPaintings, Welcome} from "@/sections";
import {Header} from "@/components/header";
import type {IBase} from "@/model-views";
import {generateUUID} from "@/helpers";
import {useLocalization, useStores} from "@/providers";
import {Switcher} from "@/components";
import type {Locals} from "@/types";


type LayoutProps = {
  headerHeight: number;
};




export const Layout: FC<LayoutProps> = observer(({headerHeight}) => {
  const { translate } = useLocalization();
  const { userStore } = useStores();



  const smallMenuItems: IBase[] = [
    {
      id: generateUUID(),
      caption: translate('menu.about') as string
    },
    {
      id: generateUUID(),
      caption: translate('menu.gallery') as string
    },
    {
      id: generateUUID(),
      caption: translate('menu.contacts') as string
    }
  ]

  return (
    <div>
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
        <Welcome />
        <About title={'about'}/>
        <Paintings title={'paintings'}/>
        <WallPaintings title={'wallPaintings'}/>
        <Mosaic title={'mosaic'}/>
        <Teaching title={'teaching'}/>
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