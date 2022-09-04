import { createContext, useContext, useEffect, useState } from 'react'
import axios from 'axios'

const AppContext = createContext();

export function AppWrapper({ children }) {
    let [description, SetDescription] = useState()
    useEffect(() => {
        let data = async function () {
            let info = await axios('http://gateway.marvel.com/v1/public/characters?ts=1000&apikey=66a8defb62c8a7db93d6c21af958ecd2&hash=f2008f578d691175eb5aefebaf52df1c')
            SetDescription(info.data.data.results)
        }
        data()
    }, [])
    return (
        <AppContext.Provider value={description}>
            {children}
        </AppContext.Provider>
    );
};

export function useAppContext() {
    return useContext(AppContext);
}

