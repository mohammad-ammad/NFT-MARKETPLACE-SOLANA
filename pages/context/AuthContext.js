import { createContext, useState } from "react";

const AuthContext = createContext();

const AuthProvider = ({ children }) => {

    //---USESTATES
    const [wallet, setWallet] = useState({
        address:"",
        isConnected:false
    })

    //---CONNECT PHANTOM WALLET FUNCTION
    const connect = async () => 
    {
        try {
            const con = await window.solana.request({method:"connect"})
            console.log(con);
        } catch (error) {
            console.log(error.message)
        }
    }
    return (
        <AuthContext.Provider value={{connect}}>
          {children}
        </AuthContext.Provider>
      );
}

export {AuthContext, AuthProvider}