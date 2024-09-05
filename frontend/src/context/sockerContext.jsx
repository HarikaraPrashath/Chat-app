import { createContext,useState,useEffect } from "react";
import {useAuthContext} from './AuthContext'
import io from "socket.io-client"

export const SocketContext = createContext()

export const SocketContextProvider = ({Children})=>{
    const [socket,setSocket] = useState(null);
    const[onlineUser,setOnlineUser] = useState([])
    const{authUser} = useAuthContext

    useEffect(()=>{
        if(authUser){
            const socket = io("http://localhost:8000",{
                query:{
                    userId : authUser._id
                }
            })

              setSocket(socket)

              return()=> socket.close();

             
        }
        else{
            if(socket){
                socket.close();
                setSocket(null);
            }
          }
    },[])

    return <SocketContext.Provider value={{socket,onlineUser}}>{Children}</SocketContext.Provider>
}