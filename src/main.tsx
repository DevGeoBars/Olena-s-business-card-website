import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import {App} from "./widgets/app";

import './styles/global.css';
import './styles/variables.css';

const domContainer = document.getElementById('root')!;


/**
 * Создаёт объект FiberRoot — специальную структуру данных React, которая:
 * - Управляет рендерингом React-компонентов внутри этого контейнера
 * - Поддерживает Concurrent Features (приоритетные обновления, прерываемый рендеринг)
 * - Содержит ссылки на Virtual DOM (Fiber tree) и другие внутренности React
 */
const reactRoot = createRoot(domContainer);


/** Запускает процесс рендеринга компонента App внутрь DOM-контейнера. **/


reactRoot.render(
  <StrictMode>
    <App/>
  </StrictMode>,
)
