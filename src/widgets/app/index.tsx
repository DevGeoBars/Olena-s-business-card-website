import { ProvidersContainer } from "./context";

import {Switcher} from "@/components";
import {generateUUID} from "@/helpers";
import type {Locals} from "@/types";


import './index.scss';


export const App = () => {
  return (
    <>
      <ProvidersContainer>
        <Switcher<Locals> items={[
          {id: generateUUID(), caption: 'Ru', value: 'ru', onChange: (value) => console.log(value)},
          {id: generateUUID(), caption: 'En', value: 'en', onChange: (value) => console.log(value)}
        ]}/>

      </ProvidersContainer>
    </>
  )
}
