import { IPublicClientApplication, AccountInfo } from "@azure/msal-browser";
import { createSlice } from "@reduxjs/toolkit";
import { loginRequest } from "../../config/authConfig";

const userSlice = createSlice({
    name: "userInfo",
    initialState: {
        user: null,
        isProtected: false,
        error: null,
    },
    reducers: {
        userLogInSuccess: (state: any, action: any) => {
            return {
                ...state,
                isProtected: true,
                user: action.payload,
            };
        },
        userLogInError: (state: any, action: any) => {
            return {
                ...state,
                isProtected: false,
                error: action.payload,
            };
        },
        userLogoutSuccess: (state: any, action: any) => {
            return {
                ...state,
                isProtected: false,
                user: null,
                error: null,
            };
        },
        userLogoutError: (state: any, action: any) => {
            return {
                ...state,
                isProtected: true,
                error: action.payload,
            };
        },
    },
});

const { actions, reducer } = userSlice;
export const {
    userLogInError,
    userLogInSuccess,
    userLogoutError,
    userLogoutSuccess,
} = actions;

export function loginDispatcher(
    instance: IPublicClientApplication,
    accounts: AccountInfo[]
) {
    return async function (dispatch: any) {
        //call the api for authenication through microsoft auth
        const request = {
            ...loginRequest,
            account: accounts[0],
        };

        //  Silently acquires an access token which is then attached to a request for Microsoft Graph data
        instance
            .acquireTokenSilent(request)
            .then((response: any) => {
                window.localStorage.setItem("authToken", response.accessToken);
                dispatch(userLogInSuccess({ username: accounts[0].name }));
            })
            .catch((e: any) => {
                instance.acquireTokenRedirect(request).then((response: any) => {
                    window.localStorage.setItem(
                        "authToken",
                        response.accessToken
                    );
                });
            });
    };
}

export const logoutDispatcher = (instance: IPublicClientApplication) => {
    return (dispatch: (action: { payload: any; type: string }) => void) => {};
};

export default reducer;
