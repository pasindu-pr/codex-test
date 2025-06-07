import { Input, Button } from 'shadcn-ui-react';
import { useChat } from '../context/ChatContext';

export default function ChatInput() {
  const { input, setInput, sendMessage } = useChat();

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') sendMessage();
  };

  return (
    <div className="p-4 flex space-x-2 border-t">
      <Input
        value={input}
        onChange={e => setInput(e.target.value)}
        onKeyDown={handleKeyDown}
        placeholder="Type a message"
      />
      <Button onClick={sendMessage}>Send</Button>
    </div>
  );
}
