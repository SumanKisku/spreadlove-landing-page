import { useState, useRef, useEffect } from 'react';
import spreadLoveEmojis from 'spread-love-emojis';

const ChatUI = () => {
    const [messages, setMessages] = useState([]);
    const [newMessage, setNewMessage] = useState('');
    const chatWindowRef = useRef(null);

    const handleInputChange = (event) => {
        setNewMessage(event.target.value);
    };

    const handleSendMessage = () => {
        if (newMessage.trim() !== '') {
            setMessages([...messages, { text: spreadLoveEmojis(newMessage), sender: 'user' }]);
            setNewMessage('');
        }
    };

    const handleKeyPress = (event) => {
        if (event.key === 'Enter') {
            handleSendMessage();
        }
    };

    useEffect(() => {
        chatWindowRef.current.scrollTop = chatWindowRef.current.scrollHeight;
    }, [messages]);

    return (
        <div className="flex flex-col h-[80vh]">
            <div ref={chatWindowRef} className="flex-1 overflow-y-auto bg-gray-200 p-4">
                {messages.map((message, index) => (
                    <div
                        key={index}
                        className={`mb-4 p-2 rounded ${message.sender === 'user' ? 'bg-blue-500 text-white' : 'bg-gray-300'
                            }`}
                    >
                        {message.text}
                    </div>
                ))}
            </div>
            <div className="flex items-center p-4 bg-gray-300">
                <input
                    type="text"
                    value={newMessage}
                    onChange={handleInputChange}
                    className="flex-1 px-4 py-2 rounded border-2 border-gray-400 mr-2 mb-2 sm:mb-0"
                    onKeyPress={handleKeyPress}
                    placeholder="Type your message..."
                />
                <button
                    onClick={handleSendMessage}
                    className="px-4 py-2 bg-blue-500 text-white rounded"
                >
                    Send
                </button>
            </div>
        </div>
    );
};

export default ChatUI;
