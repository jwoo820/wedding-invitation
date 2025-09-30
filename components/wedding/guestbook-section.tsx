"use client"

import type React from "react"

import { useState } from "react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Heart } from "lucide-react"

interface Message {
  id: number
  name: string
  message: string
  date: string
}

export default function GuestbookSection() {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      name: "김하늘",
      message: "축하합니다! 오래오래 행복하세요 💕",
      date: "2025-05-20",
    },
    {
      id: 2,
      name: "박서준",
      message: "결혼 진심으로 축하해! 두 분 모두 행복하길 바랄게요",
      date: "2025-05-19",
    },
  ])
  const [name, setName] = useState("")
  const [message, setMessage] = useState("")

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (name && message) {
      const newMessage: Message = {
        id: messages.length + 1,
        name,
        message,
        date: new Date().toISOString().split("T")[0],
      }
      setMessages([newMessage, ...messages])
      setName("")
      setMessage("")
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center p-4 py-20">
      <Card className="max-w-4xl w-full p-8 md:p-12">
        <h2 className="text-3xl font-bold text-center mb-8 text-foreground">축하 메시지</h2>

        {/* Message Form */}
        <form onSubmit={handleSubmit} className="space-y-4 mb-12">
          <Input placeholder="이름" value={name} onChange={(e) => setName(e.target.value)} required />
          <Textarea
            placeholder="축하 메시지를 남겨주세요"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            rows={4}
            required
          />
          <Button type="submit" className="w-full">
            메시지 남기기
          </Button>
        </form>

        {/* Messages List */}
        <div className="space-y-4">
          {messages.map((msg) => (
            <Card key={msg.id} className="p-4 bg-secondary/30">
              <div className="flex items-start justify-between mb-2">
                <div className="flex items-center gap-2">
                  <Heart className="h-4 w-4 text-accent fill-current" />
                  <span className="font-semibold text-foreground">{msg.name}</span>
                </div>
                <span className="text-xs text-muted-foreground">{msg.date}</span>
              </div>
              <p className="text-sm text-foreground leading-relaxed">{msg.message}</p>
            </Card>
          ))}
        </div>
      </Card>
    </div>
  )
}
