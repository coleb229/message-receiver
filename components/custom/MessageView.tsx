"use client"

import { Card, CardContent } from "@/components/ui/card"
import { ScrollArea } from "@/components/ui/scroll-area"
import { motion } from "framer-motion"

interface Message {
  id: string
  name: string
  email: string
  message: string
  timestamp: string
}

export default function MessageView({ data }: { data: Message[] }) {
  return (
    <Card className="w-full max-w-3xl mx-auto bg-primary/5 backdrop-blur-sm">
      <CardContent className="p-6">
        <h2 className="text-3xl font-bold mb-6 text-primary text-center">Messages</h2>
        <ScrollArea className="h-[500px] pr-4">
          {data.map((message, index) => (
            <motion.div
              key={message.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
            >
              <Card className="mb-4 bg-secondary/10 hover:bg-secondary/20 transition-colors duration-200">
                <CardContent className="p-4">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="font-semibold text-primary">{message.name}</h3>
                    <span className="text-sm text-primary-foreground/70">{message.timestamp}</span>
                  </div>
                  <p className="text-sm text-primary-foreground/70 mb-2">{message.email}</p>
                  <p className="text-sm text-primary-foreground">{message.message}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </ScrollArea>
      </CardContent>
    </Card>
  )
}