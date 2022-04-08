export const singleTenantMsalConfig = {
    auth: {
        clientId: "9618cbc5-a353-49c9-a674-a77c3a747102",

        authority:
            "https://login.microsoftonline.com/3caffb71-bb1b-48d7-9784-a5b44285abdf", // This is a URL (e.g. https://login.microsoftonline.com/{your tenant ID})
    },
    cache: {
        cacheLocation: "sessionStorage",
        storeAuthStateInCookie: false,
    },
};

// export const newSingleTenantMsalConfig = {
//     auth: {
//         clientId: "8f1806a8-3f31-48a3-ad59-1e375fbcd781",
//         authority:
//             "https://login.microsoftonline.com/89028158-2627-422d-92eb-3866c1a77520", // This is a URL (e.g. https://login.microsoftonline.com/{your tenant ID})
//         redirectUri: "http://localhost:3000",
//         postLogoutRedirectUri: "http://localhost:3000/logout",
//     },
//     cache: {
//         cacheLocation: "sessionStorage",
//         storeAuthStateInCookie: false,
//     },
// };

export const loginRequest = {
    scopes: [
        "api://9618cbc5-a353-49c9-a674-a77c3a747102/access_as_user",
        "User.Read",
    ],
    protectedResourceMap: [
        ["https://localhost:3000/", ["User.Read"]], // frontend
        ["https://graph.microsoft.com/v1.0/", ["User.Read"]], // MS Graph Library
        [
            "https://localhost:5001/User",
            ["api://9618cbc5-a353-49c9-a674-a77c3a747102/access_as_user"],
        ], // backend
    ],
};

export const logoutRequest = {
    postLogoutRedirectUri: "http://localhost:3000",
};

export const graphConfig = {
    graphMeEndpoint: "https://graph.microsoft.com/v1.0/",
};
