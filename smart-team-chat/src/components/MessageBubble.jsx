// src/components/MessageBubble.jsx
export default function MessageBubble({ message }) {
  const isMe = message.sender === "Me";

  return (
    <div className={`flex ${isMe ? "justify-end" : "justify-start"}`}>
      <div
        className={`px-3 py-2 rounded-lg max-w-xs text-sm ${
          isMe
            ? "bg-blue-600 text-white rounded-br-none"
            : "bg-gray-200 text-gray-900 rounded-bl-none"
        }`}
      >
        <p>{message.text}</p>
        <span className="block text-[10px] text-gray-400 mt-1">
          {new Date(message.time).toLocaleTimeString([], {
            hour: "2-digit",
            minute: "2-digit",
          })}
        </span>
      </div>
    </div>
  );
}
