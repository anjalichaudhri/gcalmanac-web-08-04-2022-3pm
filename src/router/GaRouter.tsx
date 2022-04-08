import { useContext, useEffect, useState } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { useMsal } from "@azure/msal-react";
import { AuthenticationResult } from "@azure/msal-browser";
import jwt_decode from "jwt-decode";
import { loginRequest } from "../config/authConfig";
import { backend } from "../config/apiEndpoints";
import LoadingComponent from "../components/LoadingComponent";
import API from "../helpers/API";
import GaLayout from "../components/layout/GaLayout";
import GaRoute from "./GaRoute";
import routes from "../constants/routes";
import { roles } from "../constants/roles";
import Home from "../pages/home/Home";
import Admin from "../pages/admin/Admin";
import GaCalendar from "../pages/calendar/GaCalendar";
import Unauthorized from "../pages/unauthorized/Unauthorized";
import { IUser, UserContext } from "../context/UserContext";

/**
 * 
 * @returns Handles the Router Component
 */

function GaRouter() {
    const userDetailsContext = useContext(UserContext);

    // used this infoCopy to pass object as props to GAlayout -- using hardcoded value
    const userInfoCopy: IUser = {
        designation: "Trainee",
        firstName: "Anjali",
        lastName: "Chaudhri",
        role: "Admin",
    };

    //* Calling backend API & setting userinfo in context
    //* Keep a state variable isLoading and set it to false duriong API call, set it to true when API call returns
    // useEffect(() => {
    //       console.log(`GARouter.tsx: useEffect Called`);

    //       const backendAuth = async () => {
    //         // Get Access token - try to acquire it silently first. If that fails, redirect to get token
    //         let response;
    //         try {
    //           response = await instance.acquireTokenSilent({
    //             ...loginRequest,
    //             account: accounts[0],
    //           });
    //         } catch (error) {
    //           console.log("Couldnt get token silently, acquiring via redirect...");
    //           response = await instance.acquireTokenRedirect({
    //             ...loginRequest,
    //             account: accounts[0],
    //           });
    //         }
    //         const token = response?.accessToken;
    //         console.log(`Token: ${token}`);

    //         //Call backend API
    //         const body = {
    //           MsalToken: "Bearer " + token,
    //           Email: accounts[0].username,
    //         };

    //         console.log("Body: ", body);

    //         const backendAPI = new API(backend.base_url);
    //         backendAPI
    //           .post(backend.user_endpoint, body)
    //           .then((response: any) => {
    //             console.log(response);
    //             // setHttpStatusCode(200);
    //             //call the handleUserINfo here for
    //             //decode the acesss token her

    //             const token = response.body.accessToken;
    //             console.log(response.body.accessToken);
    //             const decoded: {
    //               Designation: string;
    //               FirstName: string;
    //               LastName: string;
    //               Role: string;
    //             } = jwt_decode(token);
    //             console.log(decoded);
    //             console.log(typeof decoded);
    //             const userInfoCopy = {
    //               designation: decoded.Designation,
    //               firstName: decoded.FirstName,
    //               lastName: decoded.LastName,
    //               role: decoded.Role,
    //             };
    //   // //this is to pass hardcoded value to contextState
    //   // const userInfoCopy = {
    //   //   designation: "Trainee",
    //   //   firstName: "Anjali",
    //   //   lastName: "Chaudhri",
    //   //   role: "User",
    //   // };
    //   contextState?.handleUserInfo(userInfoCopy);
    //              setHttpStatusCode(response.statusCode);
    //     //         setHttpStatusCode(200);
    
    //           })
    //           .catch((error) => {
    //             console.log(error);
    //             setHttpStatusCode(401);
    //             // setHttpStatusCode(error.status);
    //           });

    //       };
    //       backendAuth();
    // }, []);
    
    let child;
    //* dependent on isLoading state
    // if (httpStatusCode !== null) {
    child = (
        <Switch>
            <GaRoute
                exact
                path={routes.home}
                component={Home}
                statusCode={200}
                isProtected={true}
                userRole={userInfoCopy.role}
                allowedRoles={[roles.Admin, roles.User]}
            />

            <GaRoute
                exact
                path={routes.calendar}
                component={GaCalendar}
                statusCode={200}
                isProtected={true}
                userRole={userInfoCopy.role}
                allowedRoles={[roles.Admin, roles.User]}
            />
            <GaRoute
                exact
                path={routes.admin}
                component={Admin}
                statusCode={200}
                isProtected={true}
                userRole={userInfoCopy.role}
                allowedRoles={[roles.Admin]}
            />
            <Route exact path={routes.unauthorized} component={Unauthorized} />
        </Switch>
    );
    // } else {
    //    child = <LoadingComponent />;
    //  }

    return (
        <BrowserRouter>
            {/* //this is to pass userInfoCopy as props */}
            <GaLayout userInfoCopy={userInfoCopy}>{child}</GaLayout>
        </BrowserRouter>
    );
}

export default GaRouter;
