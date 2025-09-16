// src/context/ChatContext.jsx
import { createContext, useState } from "react";
import { CHATS } from "../data/dummyChats";

export const ChatContext = createContext();

export function ChatProvider({ children }) {
  const [chats, setChats] = useState(CHATS);

  const createChat = (name) => {
    const newChat = {
      id: name + Date.now().toString(),
      name,
      lastMessage: "Chat created",
      lastTime: new Date().toISOString(),
      messages: [],
    };
    setChats((prev) => [newChat, ...prev]);
    return newChat.id;
  };

  const addMessage = (chatId, message) => {
    setChats((prev) =>
    //   addMessage(chat.id, {
    //   id: Date.now().toString(),
    //   sender: "Me",
    //   text,
    //   time: new Date().toISOString(),
    // });
      prev.map((chat) =>
        chat.id === chatId
          ? {
              ...chat,
              lastMessage: message.text,
              lastTime: message.time,
              messages: [...chat.messages, message],
            }
          : chat
      )
    );
  };

  return (
    <ChatContext.Provider value={{ chats, createChat, addMessage }}>
      {children}
    </ChatContext.Provider>
  );
}
