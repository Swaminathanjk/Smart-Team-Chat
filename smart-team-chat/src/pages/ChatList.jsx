// src/pages/ChatList.jsx
import { useContext } from "react";
import { Link } from "react-router-dom";
import { ChatContext } from "../context/ChatContext";
import ChatItem from "../components/ChatItem";

export default function ChatList() {
  const { chats } = useContext(ChatContext);

  return (
    <div className="flex flex-col h-full">
      {/* Header */}
      <header className="p-4 border-b border-gray-200 flex justify-between items-center">
        <h1 className="text-xl font-semibold">Smart Team Chat</h1>
        <Link
          to="/new"
          className="px-3 py-1 text-sm bg-blue-600 text-white rounded-md hover:bg-blue-700"
        >
          + New Chat
        </Link>
      </header>

      {/* Chat list */}
      <div className="flex-1 overflow-y-auto">
        {chats.map((chat) => (
          <ChatItem key={chat.id} chat={chat} />
        ))}
      </div>
    </div>
  );
}
