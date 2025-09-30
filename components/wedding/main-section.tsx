import { Heart } from "lucide-react"
import { Card } from "@/components/ui/card"

export default function MainSection() {
  return (
    <div className="min-h-screen flex items-center justify-center p-4 animate-fade-in-up">
      <Card className="max-w-2xl w-full p-8 md:p-12 text-center">
        {/* Main Image */}
        <div className="mb-8 rounded-lg overflow-hidden">
          <img src="/romantic-wedding-couple-portrait-in-elegant-settin.jpg" alt="Wedding Couple" className="w-full h-auto object-cover" />
        </div>

        {/* Invitation Text */}
        <div className="space-y-6">
          <div className="flex items-center justify-center gap-2 text-accent">
            <Heart className="h-5 w-5 fill-current" />
            <span className="text-sm font-medium tracking-wider">WEDDING INVITATION</span>
            <Heart className="h-5 w-5 fill-current" />
          </div>

          <h1 className="text-4xl md:text-5xl font-bold text-foreground">
            민수 <span className="text-accent">&</span> 지은
          </h1>

          <div className="py-6 border-y border-border">
            <p className="text-lg text-muted-foreground leading-relaxed">
              {"저희 두 사람이 사랑으로 하나 되어"}
              <br />
              {"새로운 인생을 시작하려 합니다."}
              <br />
              <br />
              {"귀한 걸음 하시어"}
              <br />
              {"축복해 주시면 감사하겠습니다."}
            </p>
          </div>

          {/* Parents Info */}
          <div className="grid grid-cols-2 gap-8 text-sm">
            <div>
              <p className="text-muted-foreground mb-2">신랑측 혼주</p>
              <p className="font-medium">김철수 · 박영희</p>
              <p className="text-muted-foreground mt-1">의 장남 민수</p>
            </div>
            <div>
              <p className="text-muted-foreground mb-2">신부측 혼주</p>
              <p className="font-medium">이동욱 · 최미경</p>
              <p className="text-muted-foreground mt-1">의 장녀 지은</p>
            </div>
          </div>

          {/* Date & Time */}
          <div className="bg-secondary/50 rounded-lg p-6 space-y-2">
            <p className="text-2xl font-bold text-foreground">2025년 5월 24일 토요일</p>
            <p className="text-lg text-muted-foreground">오후 2시</p>
          </div>

          {/* Location */}
          <div className="space-y-1">
            <p className="text-lg font-semibold text-foreground">더 컨벤션</p>
            <p className="text-muted-foreground">3층 그랜드볼룸</p>
            <p className="text-sm text-muted-foreground">서울 강남구 테헤란로 123</p>
          </div>
        </div>
      </Card>
    </div>
  )
}
