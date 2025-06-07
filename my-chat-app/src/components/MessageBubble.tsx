import { Message } from '../context/ChatContext';

interface Props {
  message: Message;
}

export default function MessageBubble({ message }: Props) {
  const isUser = message.sender === 'user';
  return (
    <div className={`flex ${isUser ? 'justify-end' : 'justify-start'}`}>
      <div
        className={`rounded-lg px-3 py-2 shadow transition-all max-w-xs text-sm ${
          isUser ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-900'
        }`}
      >
        {message.text}
      </div>
    </div>
  );
}
