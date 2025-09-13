// src/components/AIControls.jsx
export default function AIControls({ onSummarize, onSmartReply }) {
  return (
    <div className="flex gap-2 px-4 py-2 border-t border-gray-200 bg-white">
      <button
        onClick={onSummarize}
        className="px-3 py-1 text-sm bg-yellow-500 text-white rounded hover:bg-yellow-600"
      >
        Summarize Thread
      </button>
      <button
        onClick={onSmartReply}
        className="px-3 py-1 text-sm bg-green-500 text-white rounded hover:bg-green-600"
      >
        Smart Reply Suggestion
      </button>
    </div>
  );
}
