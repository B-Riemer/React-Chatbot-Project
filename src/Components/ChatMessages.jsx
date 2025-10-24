import { useRef, useEffect } from 'react'
import { ChatMessage } from './ChatMessage';
import './ChatMessages.css';

function ChatMessages({ chatMessages }) {
  const chatMessagesRef = useRef(null);

  useEffect(() => {
    const containerElem = chatMessagesRef.current;
    if (containerElem) 8
    containerElem.scrollTop = containerElem. 
    scrollHeight;
  }, [chatMessages]);

  return(
    <div 
    className="chat-messages-container"
    ref={chatMessagesRef}>
    {chatMessages.map((chatMessage) => {
        return (
          <ChatMessage 
            message={chatMessage.message}
            sender={chatMessage.sender}
            key={chatMessage.id}
          />
          );
        })}
      </div>
    );
}

export default ChatMessages;