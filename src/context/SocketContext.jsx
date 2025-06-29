import { createContext, useState } from "react";
import { io } from "socket.io-client";
import { useChannelMessages } from "@/hooks/context/useChannelMessages";

const SocketContext = createContext();

export const SocketContextProvider = ({ children }) => {
  const [currentChannel, setCurrentChannel] = useState(null);
  const {messageList,setMessageList}=useChannelMessages()
  const socket = io(import.meta.env.VITE_BACKEND_SOCKET_URL);

  socket.on('newMessageReceived',(data)=>{
    console.log("new message received",data)
    setMessageList([...messageList,data])
  
  })

  async function joinChannel(channelId) {
    socket.emit("joinChannel", { channelId }, (data) => {
      console.log("successfully joined the channel", data);
      setCurrentChannel(data?.data)
    });
  }

  return (
    <SocketContext.Provider value={{ socket, joinChannel ,currentChannel}}>
      {children}
    </SocketContext.Provider>
  );
};

export default SocketContext;
