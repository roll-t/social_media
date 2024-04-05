// // import {getCurrentUser} from 
// import { IContextType, IUser } from "@/types";
// import { useContext, useEffect, useState, createContext } from "react";
// import {useNavigate } from "react-router-dom";


// export const INITAL_USER = {
//     id:'',
//     name:'',
//     username:'',
//     email:'',
//     imageUrl:'',
//     bio:''
// }

// export const INITIAL_STATE = {
//     user:INITAL_USER,
//     isLoading:false,
//     isAuthenticated:false,
//     setUser:()=>{},
//     setIsAuthenticated:()=>{},
//     checkAuthUser: async ()=> false as boolean
// }

// const AuthContext = createContext<IContextType>(INITIAL_STATE)


// export const AuthProvider = ({children}:{children:React.ReactNode}) => {
//     const [user,setUser]=useState<IUser>(INITAL_USER)
//     const [isLoading, setIsLoading] = useState(false);
//     const [isAuthenticated, setIsAuthenticated]=useState(false)
    
//     const navigate= useNavigate();

//     const checkAuthUser = async()=>{
//         try{

//             const currentAccount= await getCurrentUser();
            
//             if (currentAccount){
//                 setUser({
//                     id:currentAccount.$id,
//                     name:currentAccount.name,
//                     username:currentAccount.username,
//                     email:currentAccount.email,
//                     imageUrl:currentAccount.imageUrl,
//                     bio:currentAccount.bio
//                 })
//                 setIsAuthenticated(true)
//                  return true;
//             }
//         } catch(error){
//             console.log(error)
//             return false;
//         }finally{
//             setIsLoading(false);
//         }
//     }

//     useEffect(()=>{
//         if(
//             localStorage.getItem('cookieFallback') === '[]'
//         ) navigate('/sign-in')
//         checkAuthUser()
//     },[])
//     const value ={
//         user,
//         setUser,
//         isLoading,
//         isAuthenticated,
//         setIsAuthenticated,
//         checkAuthUser
//     }
//     return (
//          <AuthContext.Provider value={value}>
//             {children}
//          </AuthContext.Provider> 
//     );
// }

// export default AuthContext;

// export const useUserContext=()=> useContext(AuthContext);
