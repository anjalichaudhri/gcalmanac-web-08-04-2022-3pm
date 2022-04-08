/**
 * Initiates Microsoft Logout Flow
 *
 * @param instance
 * @param accounts
 */

export const handleLogOut = async (instance: any, accounts: any) => {
    const logoutRequest = {
        account: accounts[0],
        postLogoutRedirectUri: "http://localhost:3000",
    };
    await instance.logoutRedirect(logoutRequest).catch((e: Error) => {
        console.error(e);
    });
    // dispatch(logoutDispatcher(instance));
};
