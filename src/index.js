import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from "react-redux";
import { store } from "./redux/store";
import App from './App';
import './index.css'
import '@fortawesome/fontawesome-free/css/all.min.css';
import { library } from '@fortawesome/fontawesome-svg-core'
import { faFaceAngry, faFaceFrown, faFaceGrinWide, faFaceLaughBeam, faFaceMeh } from '@fortawesome/free-regular-svg-icons'
import { fas} from '@fortawesome/free-solid-svg-icons'
library.add(fas, faFaceAngry, faFaceFrown, faFaceMeh, faFaceGrinWide, faFaceLaughBeam)

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);


