import { createContext, useContext, useState, ReactNode } from 'react';
import { v4 as uuid } from 'uuid';

export type Message = {
  id: string;
  sender: 'user' | 'bot';
  text: string;
};

type ChatContextType = {
  messages: Message[];
  input: string;
  typing: boolean;
  setInput: (value: string) => void;
  sendMessage: () => void;
};

const ChatContext = createContext<ChatContextType | undefined>(undefined);

export function useChat() {
  const ctx = useContext(ChatContext);
  if (!ctx) throw new Error('useChat must be used within ChatProvider');
  return ctx;
}

interface Props {
  children: ReactNode;
}

export function ChatProvider({ children }: Props) {
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState('');
  const [typing, setTyping] = useState(false);

  const sendMessage = () => {
    if (!input.trim()) return;
    const userMsg: Message = { id: uuid(), sender: 'user', text: input.trim() };
    setMessages(prev => [...prev, userMsg]);
    setInput('');
    setTyping(true);
    setTimeout(() => {
      const botMsg: Message = { id: uuid(), sender: 'bot', text: 'This is a bot response.' };
      setMessages(prev => [...prev, botMsg]);
      setTyping(false);
    }, 1000);
  };

  return (
    <ChatContext.Provider value={{ messages, input, typing, setInput, sendMessage }}>
      {children}
    </ChatContext.Provider>
  );
}
