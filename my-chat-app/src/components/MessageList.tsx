import { useEffect, useRef } from 'react';
import { ScrollArea } from 'shadcn-ui-react';
import { useChat } from '../context/ChatContext';
import MessageBubble from './MessageBubble';

export default function MessageList() {
  const { messages, typing } = useChat();
  const endRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    endRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, typing]);

  return (
    <ScrollArea className="flex-1 space-y-2 p-4">
      {messages.map(m => (
        <MessageBubble key={m.id} message={m} />
      ))}
      {typing && <div className="text-sm text-gray-500">Bot is typing...</div>}
      <div ref={endRef} />
    </ScrollArea>
  );
}
