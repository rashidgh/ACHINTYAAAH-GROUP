import React from 'react'

const GlobalProvider = React.createContext();

const ContextApi = ({ children }) => {
    const [isNightMode, setIsNightMode] = React.useState(true);
    return (
        <GlobalProvider.Provider value={{ isNightMode }}>{children}</GlobalProvider.Provider>
    )
}

export default ContextApi
