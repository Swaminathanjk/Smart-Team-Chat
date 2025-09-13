// src/components/ChatItem.jsx
import { Link } from "react-router-dom";
import { formatTime } from "../utils/formatTime";

export default function ChatItem({ chat }) {
  // console.log(chat);
  // console.log(formatTime(chat.lastTime));
  // console.log(chat.lastTime);
  

  return (
    <Link
      to={`/chat/${chat.id}`}
      className="flex items-center justify-between px-4 py-3 border-b border-gray-200 hover:bg-gray-50 transition cursor-pointer"
    >
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 bg-green-400 rounded-full flex items-center justify-center text-white font-bold text-sm">
          {chat.name.charAt(0).toUpperCase()}
        </div>
        <div className="flex flex-col">
          <span className="font-medium text-gray-900">{chat.name}</span>
          <span className="text-sm text-gray-500 truncate w-48">
            {chat.lastMessage}
          </span>
        </div>
      </div>
      <span className="text-xs text-gray-400">{formatTime(chat.lastTime)}</span>
    </Link>
  );
}
