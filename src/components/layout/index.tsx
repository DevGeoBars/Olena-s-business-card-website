import {type FC} from 'react';

import {useLocalization, useStores} from "@/providers";
import {Switcher} from "@/components";
import {generateUUID} from "@/helpers";
import type {Locals} from "@/types";

import './index.scss';
import {observer} from "mobx-react-lite";


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
        контент {userStore.UserLanguage}
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