# My Chat App

This is a minimal React + TypeScript chat example built with Vite. It uses **Tailwind CSS** for styling and **shadcn/ui** for UI components.

## Setup

```bash
npm install
npm run dev
```

## Project Structure

- `src/App.tsx` – wraps the chat in `ChatProvider` and renders `ChatWindow`.
- `src/context/ChatContext.tsx` – global chat state using React Context.
- `src/components/ChatWindow.tsx` – card containing messages and input.
- `src/components/MessageList.tsx` – scrollable list of messages.
- `src/components/MessageBubble.tsx` – styled message bubble.
- `src/components/ChatInput.tsx` – input field and send button.

Tailwind and shadcn/ui are configured through `tailwind.config.ts` and imported in `index.css`.

Each chat message has a unique ID generated with the `uuid` package.

