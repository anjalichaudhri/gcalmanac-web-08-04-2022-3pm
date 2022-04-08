import React from "react";

export interface IUser {
    firstName: string;
    lastName: string;
    designation: string;
    role: string;
}

export interface IUserContext {
    userInfo: IUser | null;
    setUserInfo: (userInfo: IUser) => void;
}

export const UserContext = React.createContext<IUserContext>({
    userInfo: null,
    setUserInfo: () => null,
});