"use client"

import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { MapPin, Car, Train, Bus, ExternalLink } from "lucide-react"

export default function LocationSection() {
  const venueName = "더 컨벤션"
  const venueAddress = "서울 강남구 테헤란로 123"
  const latitude = 37.4979 // 강남역 근처 예시 좌표
  const longitude = 127.0276

  const openNaverMap = () => {
    // 모바일에서는 네이버 지도 앱으로, 데스크톱에서는 웹으로 열기
    const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent)

    if (isMobile) {
      // 네이버 지도 앱 딥링크 (앱이 없으면 자동으로 웹으로 fallback)
      const naverMapApp = `nmap://place?lat=${latitude}&lng=${longitude}&name=${encodeURIComponent(venueName)}&appname=com.wedding.invitation`
      const naverMapWeb = `https://map.naver.com/v5/search/${encodeURIComponent(venueAddress)}`

      // 앱 열기 시도
      window.location.href = naverMapApp

      // 2초 후에도 페이지에 있으면 웹으로 이동
      setTimeout(() => {
        window.open(naverMapWeb, "_blank")
      }, 2000)
    } else {
      // 데스크톱에서는 바로 웹으로
      window.open(`https://map.naver.com/v5/search/${encodeURIComponent(venueAddress)}`, "_blank")
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center p-4 py-20">
      <Card className="max-w-4xl w-full p-8 md:p-12">
        <h2 className="text-3xl font-bold text-center mb-8 text-foreground">오시는 길</h2>

        <div className="mb-8 rounded-lg overflow-hidden bg-muted">
          <img
            src={`https://naveropenapi.apigw.ntruss.com/map-static/v2/raster?w=600&h=400&center=${longitude},${latitude}&level=16&markers=type:d|size:mid|pos:${longitude}%20${latitude}&X-NCP-APIGW-API-KEY-ID=YOUR_CLIENT_ID`}
            alt="웨딩홀 위치"
            className="w-full h-64 object-cover"
            onError={(e) => {
              // API 키가 없을 경우 fallback 이미지
              e.currentTarget.src = `https://via.placeholder.com/600x400/f0f0f0/666666?text=${encodeURIComponent("지도 영역\n" + venueName)}`
            }}
          />
        </div>

        <div className="space-y-6">
          {/* Address */}
          <div className="text-center space-y-2">
            <h3 className="text-xl font-semibold text-foreground">{venueName}</h3>
            <p className="text-muted-foreground">{venueAddress}</p>
            <p className="text-muted-foreground">3층 그랜드볼룸</p>
            <Button onClick={openNaverMap} className="mt-4 gap-2">
              <MapPin className="h-4 w-4" />
              네이버 지도에서 열기
              <ExternalLink className="h-4 w-4" />
            </Button>
          </div>

          {/* Transportation */}
          <div className="grid md:grid-cols-3 gap-6 pt-6">
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-accent">
                <Train className="h-5 w-5" />
                <h4 className="font-semibold">지하철</h4>
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed">
                2호선 강남역 3번 출구
                <br />
                도보 5분
              </p>
            </div>

            <div className="space-y-2">
              <div className="flex items-center gap-2 text-accent">
                <Bus className="h-5 w-5" />
                <h4 className="font-semibold">버스</h4>
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed">
                간선: 146, 360, 740
                <br />
                지선: 3412, 4412
              </p>
            </div>

            <div className="space-y-2">
              <div className="flex items-center gap-2 text-accent">
                <Car className="h-5 w-5" />
                <h4 className="font-semibold">주차</h4>
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed">
                건물 지하 1~3층
                <br />
                3시간 무료
              </p>
            </div>
          </div>
        </div>
      </Card>
    </div>
  )
}
