import { useState, useRef, useEffect } from "react";
import Icons from "@/components/icons/icons";

export default function ChatBot({ open, onClose }: { open: boolean; onClose: () => void }) {
  const [messages, setMessages] = useState([
    { sender: "bot", text: "Chào bạn, mình giúp được gì?" },
  ]);
  const [input, setInput] = useState("");
  const chatRef = useRef<HTMLDivElement | null>(null);

  const handleSend = () => {
    if (!input.trim()) return;
    const newMessages = [
      ...messages,
      { sender: "user", text: input },
      {
        sender: "bot",
        text: "Mở rộng quyền tiếp cận đất đai:\nCông dân Việt Nam định cư ở nước ngoài có quốc tịch Việt Nam được sử dụng đất như người trong nước.",
      },
    ];
    setMessages(newMessages);
    setInput("");
  };

  useEffect(() => {
    if (chatRef.current) {
      chatRef.current.scrollTop = chatRef.current.scrollHeight;
    }
  }, [messages]);

  if (!open) return null;

  return (
    <div className="fixed bottom-10 right-30 w-80 h-[480px] bg-white rounded-2xl shadow-lg flex flex-col z-50 border border-gray-200 animate-fade-in">
      {/* Header */}
      <div className="flex justify-between items-center px-4 py-3 border-b border-gray-200 bg-gray-50">
        <div className="flex items-center gap-2">
          <Icons.Chatbot className="text-primary-blue w-5 h-5" />
          <div>
            <p className="font-semibold text-sm">Chat Bot</p>
            <p className="text-xs text-green-500">Online</p>
          </div>
        </div>
        <button onClick={onClose} className="text-gray-500 hover:text-black">
          {/* <X size={18} /> */}
        </button>
      </div>

      {/* Body */}
      <div
        ref={chatRef}
        className="flex-1 overflow-y-auto p-3 flex flex-col gap-2 text-sm"
      >
        {messages.map((msg, i) => (
          <div
            key={i}
            className={`flex ${
              msg.sender === "user" ? "justify-end" : "justify-start"
            }`}
          >
            {msg.text.includes("Mở rộng quyền") ? (
              <div className="bg-blue-50 text-gray-800 p-3 rounded-lg max-w-[80%]">
                <p className="font-semibold mb-1">Mở rộng quyền tiếp cận đất đai:</p>
                <p>
                  Công dân Việt Nam định cư ở nước ngoài có quốc tịch Việt Nam được sử dụng đất như người trong nước.
                </p>
                <button className="mt-2 text-sm text-primary-blue bg-blue-100 rounded-md px-2 py-1 hover:bg-blue-200 transition">
                  Xem văn bản
                </button>
              </div>
            ) : (
              <div
                className={`px-3 py-2 rounded-lg max-w-[80%] ${
                  msg.sender === "user"
                    ? "bg-primary-blue text-white"
                    : "bg-gray-100 text-gray-800"
                }`}
              >
                {msg.text}
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Footer */}
      <div className="flex items-center border-t border-gray-200 p-2">
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && handleSend()}
          placeholder="Hỏi gì đó..."
          className="flex-1 border border-gray-300 rounded-lg px-3 py-2 text-sm outline-none focus:ring-1 focus:ring-primary-blue"
        />
        <button
          onClick={handleSend}
          className="ml-2 p-2 hover:scale-110 transition-transform"
        >
          {/* <Send size={18} className="text-primary-blue" /> */}
        </button>
      </div>
    </div>
  );
}
