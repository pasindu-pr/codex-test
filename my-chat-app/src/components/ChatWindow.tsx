import { Card } from 'shadcn-ui';
import MessageList from './MessageList';
import ChatInput from './ChatInput';

export default function ChatWindow() {
  return (
    <Card className="w-full max-w-md h-[500px] flex flex-col">
      <MessageList />
      <ChatInput />
    </Card>
  );
}
