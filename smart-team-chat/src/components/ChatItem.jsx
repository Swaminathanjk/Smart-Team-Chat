// src/components/ChatItem.jsx
import { Link } from "react-router-dom";
import { formatTime } from "../utils/formatTime";

export default function ChatItem({ chat }) {
  return (
    <Link
      to={`/chat/${chat.id}`}
      className="flex items-center justify-between px-4 py-3 border-b border-gray-100 hover:bg-gray-50 transition"
    >
      <div className="flex flex-col">
        <span className="font-medium text-gray-900">{chat.name}</span>
        <span className="text-sm text-gray-500 truncate w-48">
          {chat.lastMessage}
        </span>
      </div>
      <span className="text-xs text-gray-400">
        {formatTime(chat.lastTime)}
      </span>
    </Link>
  );
}
