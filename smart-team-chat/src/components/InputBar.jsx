// src/components/InputBar.jsx
import { useState } from "react";

export default function InputBar({ onSend }) {
  const [text, setText] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onSend(text);
    setText("");
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleSubmit(e);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex items-center gap-2 p-3 border-t border-gray-300 bg-white shadow-sm"
    >
      <input
        type="text"
        value={text}
        onKeyDown={handleKeyPress}
        onChange={(e) => setText(e.target.value)}
        placeholder="Type a message..."
        className="flex-1 border rounded-full px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-green-400"
      />
      <button
        type="submit"
        className="px-4 py-2 bg-green-500 text-white rounded-full hover:bg-green-600 transition"
      >
        Send
      </button>
    </form>
  );
}
