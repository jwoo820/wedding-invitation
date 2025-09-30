"use client"

import { useState } from "react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Copy, Check } from "lucide-react"

export default function AccountSection() {
  const [copiedId, setCopiedId] = useState<string | null>(null)

  const accounts = [
    {
      id: "groom",
      title: "신랑측",
      people: [
        { name: "김민수", bank: "국민은행", account: "123-456-789012" },
        { name: "김철수 (부)", bank: "신한은행", account: "110-123-456789" },
        { name: "박영희 (모)", bank: "우리은행", account: "1002-123-456789" },
      ],
    },
    {
      id: "bride",
      title: "신부측",
      people: [
        { name: "이지은", bank: "카카오뱅크", account: "3333-01-1234567" },
        { name: "이동욱 (부)", bank: "KB국민은행", account: "123-12-123456" },
        { name: "최미경 (모)", bank: "하나은행", account: "123-456789-12345" },
      ],
    },
  ]

  const copyToClipboard = (text: string, id: string) => {
    navigator.clipboard.writeText(text)
    setCopiedId(id)
    setTimeout(() => setCopiedId(null), 2000)
  }

  return (
    <div className="min-h-screen flex items-center justify-center p-4 py-20">
      <Card className="max-w-4xl w-full p-8 md:p-12">
        <h2 className="text-3xl font-bold text-center mb-4 text-foreground">마음 전하실 곳</h2>
        <p className="text-center text-muted-foreground mb-12">
          {"참석이 어려우신 분들을 위해"}
          <br />
          {"계좌번호를 기재하였습니다."}
        </p>

        <div className="grid md:grid-cols-2 gap-8">
          {accounts.map((section) => (
            <div key={section.id} className="space-y-4">
              <h3 className="text-xl font-semibold text-center text-foreground pb-2 border-b border-border">
                {section.title}
              </h3>
              {section.people.map((person, index) => (
                <Card key={index} className="p-4 bg-secondary/30">
                  <div className="space-y-2">
                    <p className="font-semibold text-foreground">{person.name}</p>
                    <p className="text-sm text-muted-foreground">{person.bank}</p>
                    <div className="flex items-center justify-between gap-2">
                      <p className="text-sm font-mono text-foreground">{person.account}</p>
                      <Button
                        size="sm"
                        variant="outline"
                        onClick={() => copyToClipboard(person.account, `${section.id}-${index}`)}
                      >
                        {copiedId === `${section.id}-${index}` ? (
                          <Check className="h-4 w-4" />
                        ) : (
                          <Copy className="h-4 w-4" />
                        )}
                      </Button>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          ))}
        </div>
      </Card>
    </div>
  )
}
