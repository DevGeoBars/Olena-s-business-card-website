import { ProvidersContainer } from "./context";

import { Layout } from "@/components";



import './index.scss';


export const App = () => {
  return (
    <>
      <ProvidersContainer>
        <Layout headerHeight={50}/>
      </ProvidersContainer>
    </>
  )
}
