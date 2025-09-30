"use client"

import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Phone, MessageCircle } from "lucide-react"

export default function ContactSection() {
  const contacts = [
    {
      title: "신랑에게 연락하기",
      name: "김민수",
      phone: "010-1234-5678",
    },
    {
      title: "신부에게 연락하기",
      name: "이지은",
      phone: "010-8765-4321",
    },
  ]

  const handleCall = (phone: string) => {
    window.location.href = `tel:${phone}`
  }

  const handleMessage = (phone: string) => {
    window.location.href = `sms:${phone}`
  }

  return (
    <div className="min-h-screen flex items-center justify-center p-4 py-20">
      <Card className="max-w-4xl w-full p-8 md:p-12">
        <h2 className="text-3xl font-bold text-center mb-12 text-foreground">연락하기</h2>

        <div className="grid md:grid-cols-2 gap-8">
          {contacts.map((contact, index) => (
            <Card key={index} className="p-6 bg-secondary/30">
              <h3 className="text-lg font-semibold text-center mb-4 text-foreground">{contact.title}</h3>
              <p className="text-center text-muted-foreground mb-6">{contact.name}</p>
              <div className="flex gap-3">
                <Button className="flex-1 bg-transparent" variant="outline" onClick={() => handleCall(contact.phone)}>
                  <Phone className="h-4 w-4 mr-2" />
                  전화하기
                </Button>
                <Button
                  className="flex-1 bg-transparent"
                  variant="outline"
                  onClick={() => handleMessage(contact.phone)}
                >
                  <MessageCircle className="h-4 w-4 mr-2" />
                  문자하기
                </Button>
              </div>
            </Card>
          ))}
        </div>

        {/* Parents Contact */}
        <div className="mt-12 pt-8 border-t border-border">
          <h3 className="text-lg font-semibold text-center mb-6 text-foreground">혼주에게 연락하기</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { name: "신랑 아버지", phone: "010-1111-2222" },
              { name: "신랑 어머니", phone: "010-3333-4444" },
              { name: "신부 아버지", phone: "010-5555-6666" },
              { name: "신부 어머니", phone: "010-7777-8888" },
            ].map((parent, index) => (
              <div key={index} className="text-center space-y-2">
                <p className="text-sm font-medium text-foreground">{parent.name}</p>
                <div className="flex gap-1">
                  <Button size="sm" variant="ghost" className="flex-1" onClick={() => handleCall(parent.phone)}>
                    <Phone className="h-3 w-3" />
                  </Button>
                  <Button size="sm" variant="ghost" className="flex-1" onClick={() => handleMessage(parent.phone)}>
                    <MessageCircle className="h-3 w-3" />
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Card>
    </div>
  )
}
