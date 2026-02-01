import { ProvidersContainer } from "./context";

import './index.scss';
import {Switcher} from "@/components/switcher";
import {generateUUID} from "@/helpers";


export const App = () => {
  return (
    <>
      <ProvidersContainer>
        <Switcher items={[
          {id: generateUUID(), caption: 'Ru', onClick: () => console.log('clicked Ru')},
          {id: generateUUID(), caption: 'En', onClick: () => console.log('clicked En')}
        ]}/>

      </ProvidersContainer>
    </>
  )
}
