import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import App from "./components/App";
import { ModalProvider } from "./store/Modal";
import { persistor, store } from "./store/redux/store";
import FullscreenProgress from "./components/FullscreenProgress";

import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";

import "react-toastify/dist/ReactToastify.css";

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);
root.render(
  <React.StrictMode>
    <Provider store={store}>
      {/* <PersistGate loading={<FullscreenProgress />} persistor={persistor}> */}
      <ModalProvider>
        <App />
      </ModalProvider>
      {/* </PersistGate> */}
    </Provider>
  </React.StrictMode>
);
