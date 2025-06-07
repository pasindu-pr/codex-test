import ChatWindow from './components/ChatWindow';
import { ChatProvider } from './context/ChatContext';

export default function App() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4">
      <ChatProvider>
        <ChatWindow />
      </ChatProvider>
    </div>
  );
}
