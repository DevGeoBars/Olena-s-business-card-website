import {StoresProvider} from "@/providers";
import {rootStore} from "@/stores";

import './App.scss';


export const App = ()  => {
  return (
    <>
      <StoresProvider store={rootStore}>
        <App />
      </StoresProvider>
    </>
  )
}
