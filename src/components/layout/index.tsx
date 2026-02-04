import {type FC} from 'react';

import {useLocalization, useStores} from "@/providers";
import {Switcher} from "@/components";
import {generateUUID} from "@/helpers";
import type {Locals} from "@/types";

import './index.scss';
import {observer} from "mobx-react-lite";
import {About, Main, Mosaic, Paintings, Teaching, WallPaintings} from "@/sections";


type LayoutProps = {
  headerHeight: number;
}

export const Layout: FC<LayoutProps> = observer(({headerHeight}) => {
  const { userStore } = useStores();
  const { translate } = useLocalization();
  return (
    <div>
      <header style={{height: headerHeight}}>
        башка
        <Switcher<Locals | null>
          items={[
            {id: generateUUID(), caption: 'Ru', value: 'ru', onChange: (value) => userStore.setLanguage(value)},
            {id: generateUUID(), caption: 'En', value: 'en', onChange: (value) => userStore.setLanguage(value)}
          ]}
          value={userStore.UserLanguage}
        />
      </header>
      <main style={{height: headerHeight}}>
        <Main title={'main'}/>
        <About title={'about'}/>
        <Paintings title={'paintings'}/>
        <WallPaintings title={'wallPaintings'}/>
        <Mosaic title={'mosaic'}/>
        <Teaching title={'teaching'}/>
      </main>
      <footer>
        футер
        {translate('menu.about')}
        {translate('menu.gallery')}
        {translate('menu.contacts')}
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