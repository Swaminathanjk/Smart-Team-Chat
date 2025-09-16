// src/components/MessageBubble.jsx
export default function MessageBubble({ message }) {
  const isMe = message.sender === "Me";
  const isSystem = message.sender === "System";

  return (
    <div className={`flex ${isMe ? "justify-end" : "justify-start"}`}>
      <div
        className={`px-4 py-2 rounded-xl max-w-xs text-sm break-words shadow ${
          isMe
            ? "bg-green-500 text-white rounded-br-none"
            : isSystem
            ? "bg-yellow-100 text-gray-800 rounded-none border border-yellow-300"
            : "bg-white text-gray-900 rounded-bl-none border border-gray-200"
        }`}
      >
        <p>{message.text}</p>
        <span className="block text-[10px] text-gray-500 mt-1 text-right tracking-wide">
          {new Date(message.time).toLocaleTimeString([], {
            hour: "2-digit",
            minute: "2-digit",
          })}
        </span>
      </div>
    </div>
  );
}
