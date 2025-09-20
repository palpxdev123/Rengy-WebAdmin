import { createContext, useState } from "react"

export const AuthContext = createContext<any>(null)
export const AuthProvider = ({children}: any) => {
    const [isAuthenticate, setAuthenticate] = useState(!!localStorage?.getItem("accessToken"))
    return(
        <AuthContext.Provider value={{ isAuthenticate, setAuthenticate }}>
            {children}
        </AuthContext.Provider>
    )
}