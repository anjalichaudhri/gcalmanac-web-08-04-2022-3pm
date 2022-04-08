import { useState } from "react";
import { MsalAuthenticationTemplate } from "@azure/msal-react";
import { InteractionType } from "@azure/msal-browser";
import GaRouter from "./router/GaRouter";
import { loginRequest } from "./config/authConfig";
import ErrorComponent from "./components/ErrorComponent";
import LoadingComponent from "./components/LoadingComponent";
import "./App.less";
import { IUser, UserContext } from "./context/UserContext";

function App() {
    // fires on successful login
    // can use event callback if we need specific event. See https://github.com/AzureAD/microsoft-authentication-library-for-js/blob/dev/lib/msal-browser/docs/events.md
    const [user, setUser] = useState<IUser | null>(null);

    return (
        <>
            <div className="App">
                <MsalAuthenticationTemplate
                    interactionType={InteractionType.Redirect}
                    authenticationRequest={loginRequest}
                    errorComponent={ErrorComponent}
                    loadingComponent={LoadingComponent}
                >
                    <UserContext.Provider
                        value={{ userInfo: user, setUserInfo: setUser }}
                    >
                        <GaRouter />
                    </UserContext.Provider>
                </MsalAuthenticationTemplate>
            </div>
        </>
    );
}

export default App;
