// components/ChatBot.tsx
import React, { useState, useRef, useEffect } from "react";
import { MessageCircle, X, Send, Bot, User } from "lucide-react";

interface Message {
  id: string;
  text: string;
  sender: "user" | "bot";
  timestamp: Date;
}

const ChatBot: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "1",
      text: "Hi! 👋 How can I help you today?",
      sender: "bot",
      timestamp: new Date(),
    },
  ]);
  const [inputText, setInputText] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  useEffect(() => {
    if (isOpen && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isOpen]);

  const handleSendMessage = async () => {
    if (!inputText.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      text: inputText,
      sender: "user",
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMessage]);
    setInputText("");
    setIsLoading(true);

    try {
      const response = await fetchGeminiResponse(inputText);

      const botMessage: Message = {
        id: (Date.now() + 1).toString(),
        text: response,
        sender: "bot",
        timestamp: new Date(),
      };

      setMessages((prev) => [...prev, botMessage]);
    } catch (error) {
      console.error("Error:", error);

      const errorMessage: Message = {
        id: (Date.now() + 1).toString(),
        text: "Sorry, I'm having trouble connecting. Please try again.",
        sender: "bot",
        timestamp: new Date(),
      };

      setMessages((prev) => [...prev, errorMessage]);
    } finally {
      setIsLoading(false);
    }
  };

  const fetchGeminiResponse = async (userInput: string): Promise<string> => {
    const API_KEY = "AIzaSyCmep7CS4LOKHcPxj0sVSl1En0JYfeNkl4";
    const API_URL = `https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent?key=${API_KEY}`;

    const response = await fetch(API_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        contents: [
          {
            parts: [
              {
                text: `You are a helpful assistant for Dosocket agency. Keep responses brief and friendly. User: ${userInput}`,
              },
            ],
          },
        ],
      }),
    });

    const data = await response.json();
    return (
      data.candidates?.[0]?.content?.parts?.[0]?.text ||
      "We'll answer in a while. please wait.."
    );
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  // Styles
  const styles = {
    chatWindow: {
      position: "fixed" as const,
      bottom: "100px",
      right: "44px",
      zIndex: 50,
      width: "320px",
      backgroundColor: "white",
      borderRadius: "16px",
      boxShadow: "0 20px 60px rgba(0,0,0,0.15)",
      border: "1px solid #e5e7eb",
      overflow: "hidden",
    },
    header: {
      backgroundColor: "#0B2B26",
      color: "white",
      padding: "16px",
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
    },
    headerLeft: {
      display: "flex",
      alignItems: "center",
      gap: "8px",
    },
    closeButton: {
      background: "none",
      border: "none",
      color: "white",
      cursor: "pointer",
      padding: "4px",
      borderRadius: "9999px",
    },
    messagesContainer: {
      height: "384px",
      overflowY: "auto" as const,
      padding: "16px",
      backgroundColor: "#f9fafb",
    },
    messageWrapper: (isUser: boolean) => ({
      display: "flex",
      justifyContent: isUser ? "flex-end" : "flex-start",
      marginBottom: "16px",
    }),
    messageBubble: (isUser: boolean) => ({
      display: "flex",
      alignItems: "flex-start",
      gap: "8px",
      maxWidth: "80%",
      flexDirection: isUser ? ("row-reverse" as const) : ("row" as const),
    }),
    avatar: (isUser: boolean) => ({
      width: "32px",
      height: "32px",
      borderRadius: "9999px",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      flexShrink: 0,
      backgroundColor: isUser ? "#E6F7F2" : "#0B2B26",
    }),
    messageContent: (isUser: boolean) => ({
      padding: "12px",
      borderRadius: "16px",
      backgroundColor: isUser ? "#0B2B26" : "white",
      color: isUser ? "white" : "#111827", // Darker text color (almost black)
      border: isUser ? "none" : "1px solid #e5e7eb",
      borderTopLeftRadius: isUser ? "16px" : "4px",
      borderTopRightRadius: isUser ? "4px" : "16px",
    }),
    timestamp: (isUser: boolean) => ({
      fontSize: "10px",
      marginTop: "4px",
      color: isUser ? "#9ca3af" : "#6b7280", // Darker timestamp for bot messages
    }),
    typingIndicator: {
      display: "flex",
      gap: "4px",
      padding: "12px",
    },
    dot: {
      width: "8px",
      height: "8px",
      backgroundColor: "#4b5563", // Darker dots
      borderRadius: "9999px",
      animation: "bounce 1s infinite",
    },
    inputArea: {
      padding: "16px",
      backgroundColor: "white",
      borderTop: "1px solid #e5e7eb",
    },
    inputWrapper: {
      display: "flex",
      gap: "8px",
    },
    input: {
      flex: 1,
      padding: "8px 16px",
      border: "1px solid #e5e7eb",
      borderRadius: "12px",
      outline: "none",
      fontSize: "14px",
      color: "#111827", // Darker input text color
      backgroundColor: "white",
    },
    sendButton: {
      backgroundColor: "#0B2B26",
      color: "white",
      border: "none",
      borderRadius: "12px",
      padding: "8px",
      cursor: "pointer",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    },
    sendButtonDisabled: {
      opacity: 0.5,
      cursor: "not-allowed",
    },
    chatButton: {
      position: "fixed" as const,
      bottom: "110px",
      right: "44px",
      backgroundColor: "#0B2B26",
      color: "white",
      border: "none",
      borderRadius: "9999px",
      padding: "16px",
      boxShadow: "0 10px 25px rgba(0,0,0,0.2)",
      cursor: "pointer",
      zIndex: 50,
      transition: "all 0.3s ease",
    },
  };

  return (
    <>
      <style>{`
        @keyframes bounce {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-4px); }
        }
        .chat-dot-1 { animation: bounce 1s infinite; }
        .chat-dot-2 { animation: bounce 1s infinite 150ms; }
        .chat-dot-3 { animation: bounce 1s infinite 300ms; }
        .chat-button:hover {
          transform: scale(1.1);
          background-color: #0f3a32;
        }
        .send-button:hover:not(:disabled) {
          background-color: #0f3a32;
        }
        .close-button:hover {
          background-color: #1f4a3f;
        }
        input::placeholder {
          color: #9ca3af;
        }
      `}</style>

      {/* Chat Window - No icon button shows when open */}
      {isOpen && (
        <div style={styles.chatWindow}>
          {/* Header */}
          <div style={styles.header}>
            <div style={styles.headerLeft}>
              <Bot size={20} />
              <span style={{ fontWeight: 500 }}>Dosocket Assistant</span>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              style={styles.closeButton}
              className="close-button"
            >
              <X size={18} />
            </button>
          </div>

          {/* Messages */}
          <div style={styles.messagesContainer}>
            {messages.map((msg) => (
              <div
                key={msg.id}
                style={styles.messageWrapper(msg.sender === "user")}
              >
                <div style={styles.messageBubble(msg.sender === "user")}>
                  <div style={styles.avatar(msg.sender === "user")}>
                    {msg.sender === "user" ? (
                      <User size={16} color="#0B2B26" />
                    ) : (
                      <Bot size={16} color="white" />
                    )}
                  </div>
                  <div style={styles.messageContent(msg.sender === "user")}>
                    <p style={{ margin: 0, fontSize: "14px" }}>{msg.text}</p>
                    <p style={styles.timestamp(msg.sender === "user")}>
                      {msg.timestamp.toLocaleTimeString([], {
                        hour: "2-digit",
                        minute: "2-digit",
                      })}
                    </p>
                  </div>
                </div>
              </div>
            ))}
            {isLoading && (
              <div style={styles.messageWrapper(false)}>
                <div style={styles.messageBubble(false)}>
                  <div style={styles.avatar(false)}>
                    <Bot size={16} color="white" />
                  </div>
                  <div
                    style={{
                      ...styles.messageContent(false),
                      border: "1px solid #e5e7eb",
                    }}
                  >
                    <div style={styles.typingIndicator}>
                      <div className="chat-dot-1" style={styles.dot} />
                      <div className="chat-dot-2" style={styles.dot} />
                      <div className="chat-dot-3" style={styles.dot} />
                    </div>
                  </div>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input */}
          <div style={styles.inputArea}>
            <div style={styles.inputWrapper}>
              <input
                ref={inputRef}
                type="text"
                value={inputText}
                onChange={(e) => setInputText(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="Type your message..."
                style={styles.input}
                disabled={isLoading}
              />
              <button
                onClick={handleSendMessage}
                disabled={isLoading || !inputText.trim()}
                style={{
                  ...styles.sendButton,
                  ...(isLoading || !inputText.trim()
                    ? styles.sendButtonDisabled
                    : {}),
                }}
                className="send-button"
              >
                <Send size={18} />
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Chat Button - Only shows when chat is closed */}
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          style={styles.chatButton}
          className="chat-button"
        >
          <MessageCircle size={24} />
        </button>
      )}
    </>
  );
};

export default ChatBot;
