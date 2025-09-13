// src/pages/ChatList.jsx
import { useContext } from "react";
import { Link } from "react-router-dom";
import { ChatContext } from "../context/ChatContext";
import ChatItem from "../components/ChatItem";

export default function ChatList() {
  const { chats } = useContext(ChatContext);

  return (
    <div className="flex flex-col h-screen bg-gray-100">
      {/* Header */}
      <header className="p-4 border-b border-gray-300 flex justify-between items-center bg-white shadow-sm">
        <h1 className="text-xl font-semibold text-gray-800">Smart Team Chat</h1>
        <Link
          to="/new"
          className="px-4 py-2 text-sm bg-green-500 text-white rounded-full hover:bg-green-600 transition"
        >
          + New Chat
        </Link>
      </header>

      {/* Chat List */}
      <div className="flex-1 overflow-y-auto">
        {chats.map((chat) => (
          <ChatItem key={chat.id} chat={chat} />
        ))}
      </div>
    </div>
  );
}
