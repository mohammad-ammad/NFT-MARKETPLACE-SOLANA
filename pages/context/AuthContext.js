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
            const provider = window.phantom?.solana;
            const resp = await provider.connect();
            setWallet({
                address:resp.publicKey.toString(),
                isConnected:true
            })
            console.log(resp.publicKey.toString())
        } catch (error) {
            console.log(error.message)
        }
    }

    //---DISCONNECT PHANTOM WALLET FUNCTION
    const disconnect = () => 
    {
        try {
            const provider = window.phantom?.solana;
            provider.disconnect();
            setWallet({
                address:"",
                isConnected:false
            })
        } catch (error) {
            console.log(error.message)
        }
    }
    return (
        <AuthContext.Provider value={{connect, wallet, disconnect}}>
          {children}
        </AuthContext.Provider>
      );
}

export {AuthContext, AuthProvider}