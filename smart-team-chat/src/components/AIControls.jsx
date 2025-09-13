// src/components/AIControls.jsx
export default function AIControls({ onSummarize, onSmartReply }) {
  return (
    <div className="flex gap-2 px-4 py-2 border-t border-gray-300 bg-white shadow-sm">
      <button
        onClick={onSummarize}
        className="flex-1 px-4 py-2 bg-yellow-500 text-white rounded-full hover:bg-yellow-600 transition text-sm font-medium"
      >
        Summarize Thread
      </button>
      <button
        onClick={onSmartReply}
        className="flex-1 px-4 py-2 bg-green-500 text-white rounded-full hover:bg-green-600 transition text-sm font-medium"
      >
        Smart Reply Suggestion
      </button>
    </div>
  );
}
