import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { MessageCircle, X, Send, Bot } from "lucide-react"
import { ScrollArea } from "@/components/ui/scroll-area"

interface Message {
  id: number
  text: string
  isBot: boolean
  timestamp: Date
}

const ChatWidget = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      text: "GM! 🌞 Welcome to $GM! I'm your friendly AI assistant. Ask me anything about Web3, BNB, or crypto - I'll explain it in simple terms!",
      isBot: true,
      timestamp: new Date()
    }
  ])
  const [inputValue, setInputValue] = useState("")

  const handleSend = () => {
    if (!inputValue.trim()) return

    const userMessage: Message = {
      id: messages.length + 1,
      text: inputValue,
      isBot: false,
      timestamp: new Date()
    }

    setMessages(prev => [...prev, userMessage])
    setInputValue("")

    // Simulate bot response
    setTimeout(() => {
      const botResponse: Message = {
        id: messages.length + 2,
        text: "That's a great question! 🤔 $GM is all about making Web3 education fun and accessible. Would you like to learn about DeFi, NFTs, or how to safely use crypto wallets?",
        isBot: true,
        timestamp: new Date()
      }
      setMessages(prev => [...prev, botResponse])
    }, 1000)
  }

  return (
    <>
      {/* Chat Widget Button */}
      <div className="fixed bottom-6 right-6 z-50">
        {!isOpen && (
          <Button
            onClick={() => setIsOpen(true)}
            variant="gm"
            size="lg"
            className="rounded-full w-16 h-16 shadow-gm-hover animate-bounce-slow"
          >
            <MessageCircle className="w-6 h-6" />
          </Button>
        )}
      </div>

      {/* Chat Window */}
      {isOpen && (
        <div className="fixed bottom-6 right-6 z-50 w-96 h-[500px] max-w-[calc(100vw-2rem)]">
          <Card className="h-full border-2 border-gm-yellow shadow-gm-hover">
            <CardHeader className="bg-gradient-gm text-gm-black p-4 rounded-t-lg">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Bot className="w-6 h-6" />
                  <CardTitle className="font-meme text-lg">GM AI Agent</CardTitle>
                </div>
                <Button
                  variant="gmGhost"
                  size="sm"
                  onClick={() => setIsOpen(false)}
                  className="text-gm-black hover:bg-gm-black/10"
                >
                  <X className="w-4 h-4" />
                </Button>
              </div>
            </CardHeader>
            
            <CardContent className="p-0 h-full flex flex-col">
              <ScrollArea className="flex-1 p-4">
                <div className="space-y-4">
                  {messages.map((message) => (
                    <div
                      key={message.id}
                      className={`flex ${message.isBot ? 'justify-start' : 'justify-end'}`}
                    >
                      <div
                        className={`max-w-[80%] p-3 rounded-lg ${
                          message.isBot
                            ? 'bg-gm-yellow-light text-gm-black'
                            : 'bg-gm-yellow text-gm-black'
                        }`}
                      >
                        <p className="text-sm">{message.text}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </ScrollArea>

              <div className="p-4 border-t border-gm-yellow/20">
                <div className="flex gap-2">
                  <Input
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    placeholder="Ask me about Web3, crypto, or $GM..."
                    onKeyPress={(e) => e.key === 'Enter' && handleSend()}
                    className="font-meme"
                  />
                  <Button 
                    onClick={handleSend}
                    variant="gm"
                    size="sm"
                  >
                    <Send className="w-4 h-4" />
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      )}
    </>
  )
}

export default ChatWidget