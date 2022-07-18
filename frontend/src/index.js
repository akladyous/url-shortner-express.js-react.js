import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { store } from "./store/store.js";
import { Provider } from "react-redux";
import '../src/css/style.css'
// import '../src/css/bootstrap.min.css'
// import '../src/assets/js/main.js'
import 'bootstrap/dist/js/bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import '@fortawesome/fontawesome-free/css/all.min.css'

import Root from './ui/Root.js'
// import App from "./App";

const root = createRoot(document.getElementById("root"));
root.render(
    <BrowserRouter>
        <React.StrictMode>
            <Provider store={store}>
                {/* <App /> */}
                <Root />
            </Provider>
        </React.StrictMode>
    </BrowserRouter>
);
