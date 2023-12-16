import { createContext, useContext, useEffect, useState } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({children}) => {
    const [ token, setToken ] = useState(localStorage.getItem('token'));
    const [user, setUser] = useState("");
    const [service, setService] = useState([]);

    const storetokenInLS = (serverToken) =>{
        setToken(serverToken);
         return localStorage.setItem('token', serverToken);
    };

    let isLoggedIn = !!token;

    const LogoutUser = () =>{
        setToken("");
        return localStorage.removeItem("token");
    }

    const userAuthentication = async () => {
        try{
           const response = await fetch("http://localhost:5000/api/auth/user", {
            method: "GET",
            headers: {
                Authorization: `Bearer ${token}`
            }
           });

           if(response.ok){
            const data = await response.json();
               console.log(data.userData);
              setUser(data.userData);
           }
        }catch(err){
            console.log("Error Fetching user data");
        }
    };

    const getServices = async () => {
        try{
            const response = await fetch("http://localhost:5000/api/data/service", {
             method: "GET",
            });
 
            if(response.ok){
             const data = await response.json();
                console.log(data.message);
               setService(data.message);
            }
         }catch(err){
             console.log("Error Fetching user data");
         }
      };
      

    useEffect(()=>{
        getServices();
        userAuthentication();
    },[]);

    return <AuthContext.Provider value={{ isLoggedIn ,storetokenInLS, LogoutUser, user, service }} >
        {children}
    </AuthContext.Provider>
};

export const useAuth = () => {
    const AuthContextValue = useContext(AuthContext);
    if(!AuthContextValue){
        throw new Error ("useAuth used outside of the Provider");
    }
    return AuthContextValue;
}

