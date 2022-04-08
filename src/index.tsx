import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { MsalProvider } from "@azure/msal-react";
import { PublicClientApplication } from "@azure/msal-browser";
import { singleTenantMsalConfig } from "./config/authConfig";
import store from "./store/store";
import App from "./App";
import "./styles/index.less";
import reportWebVitals from "./reportWebVitals";

const msalInstance = new PublicClientApplication(singleTenantMsalConfig);

ReactDOM.render(
    <React.StrictMode>
        <Provider store={store}>
            <MsalProvider instance={msalInstance}>
                <App />
            </MsalProvider>
        </Provider>
    </React.StrictMode>,
    document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
