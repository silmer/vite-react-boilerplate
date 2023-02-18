import { ConfigProvider, theme } from "antd";
import React, {StrictMode} from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
const TAGNAME = "rs-portal-widget";

(() => {

    const root = createRoot(document.getElementById("root"));

    root.render(
        
        <StrictMode>
            
        <BrowserRouter>
        <App/>
        </BrowserRouter>
        </StrictMode>
        //document.getElementById("root"),
    );
})();