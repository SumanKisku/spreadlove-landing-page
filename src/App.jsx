import './App.css'
import ChatUI from "./components/ChatUI"
import copy from "copy-to-clipboard"
import { CodeBlock, dracula } from 'react-code-blocks';

const copyCommand = () => {
  copy("npm i spread-love-emojis");
}

const copyCode = () => {
  copy(`// Import the library
  const spreadLoveEmojis = require('spread-love-emojis');

  // Replace curse words with emojis
  const message = spreadLoveEmojis("Don't spread hate, spread love!");
  console.log(message);`)
}

function App() {
  return (
    <>
      <div className="flex-row md:flex items-center justify-center h-screen bg-gray-100 overflow-hidden">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-800 mb-2">
            Spread Love Emojis ❤️🌈
          </h1>
          <h2 className="text-lg text-gray-600 mb-4">
            Why spread hate when we can spread love. ❤️
          </h2>
          <p className="text-gray-700 mb-8">
            Replace bad words with beautiful, loving emojis. Spread Love Emojis is the perfect solution
            to bring positivity to our communication. 🚀✨
          </p>
          <p className="font-bold text-lg">
            How to Install:
          </p>
          <div onClick={()=> copyCommand()} className="w-min mx-auto cursor-pointer">
            <CodeBlock
              text={`npm i spread-love-emojis`}
              language={`bash`}
              showLineNumbers={false}
              wrapLines
              theme={dracula}
            />
          </div>
          <p className="font-bold text-lg">Usage:</p>
          <div onClick={() => copyCode()} className="overflow-hidden text-left w-min mx-auto cursor-pointer">
            <div className="overflow-x-scroll">
            <CodeBlock
              text={`// Import the library
  const spreadLoveEmojis = require('spread-love-emojis');

  // Replace curse words with emojis
  const message = spreadLoveEmojis("Don't spread hate, spread love!");
  console.log(message);`}
              language={`javascript`}
              showLineNumbers={true}
              wrapLines
              theme={dracula}
              />
              </div>
          </div>
        </div>
        <div className="w-full md:w-1/2">
          <ChatUI />
        </div>
      </div>
    </>
  )
}

export default App
