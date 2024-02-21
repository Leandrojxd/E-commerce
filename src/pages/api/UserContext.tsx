"use client"

import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';

interface ContextPropsReactNode {
    children: ReactNode;
}

export interface IUserFormProductReserv{
    userName:string,
    destinyCity:string,
}

interface IContextUserForm{
    user: IUserFormProductReserv;
    setCurrentUser: (newUser: Partial<IUserFormProductReserv>) => void;
}

const defaultUser: IUserFormProductReserv = {
    userName: "",
    destinyCity:"",
}

const userContext = createContext<IContextUserForm>({
    user: defaultUser,
    setCurrentUser: () =>{},
});

export const UserContextProvider: React.FC<ContextPropsReactNode> = ({children}) =>{
    const[user,setCurrentUserProvider] = useState<IUserFormProductReserv>(defaultUser);
    
    const setCurrentUser = (newUser:Partial<IUserFormProductReserv>) => {
        if(user){
            setCurrentUserProvider((prevUser) => ({
              ...prevUser,
              ...newUser,
            }) );
        }
    }
    const contextValue: IContextUserForm = {
        user: user,
        setCurrentUser: setCurrentUser,
    }
    return <userContext.Provider value={contextValue}>{children}</userContext.Provider>
}

export const useUserContext = (): IContextUserForm => {
    const context = useContext(userContext);
    if(!context){
        throw new Error("User Context Provider")
    }
    return context;
}