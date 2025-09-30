"use client"

import { useState } from "react"
import { Menu, X, Heart, MapPin, Calendar, MessageSquare, CreditCard, Phone, Share2, Download } from "lucide-react"
import { Button } from "@/components/ui/button"
import MainSection from "@/components/wedding/main-section"
import GallerySection from "@/components/wedding/gallery-section"
import LocationSection from "@/components/wedding/location-section"
import GuestbookSection from "@/components/wedding/guestbook-section"
import AccountSection from "@/components/wedding/account-section"
import ContactSection from "@/components/wedding/contact-section"

export default function WeddingInvitation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState("main")

  const menuItems = [
    { id: "main", label: "메인", icon: Heart },
    { id: "gallery", label: "갤러리", icon: Download },
    { id: "location", label: "오시는 길", icon: MapPin },
    { id: "guestbook", label: "방명록", icon: MessageSquare },
    { id: "account", label: "마음 전하실 곳", icon: CreditCard },
    { id: "contact", label: "연락하기", icon: Phone },
  ]

  const scrollToSection = (sectionId: string) => {
    setActiveSection(sectionId)
    setIsMenuOpen(false)
    const element = document.getElementById(sectionId)
    element?.scrollIntoView({ behavior: "smooth" })
  }

  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: "김민수 ❤️ 이지은 결혼식에 초대합니다",
          text: "저희 두 사람의 소중한 날에 함께해 주세요",
          url: window.location.href,
        })
      } catch (err) {
        console.log("Share cancelled")
      }
    } else {
      alert("이 브라우저는 공유 기능을 지원하지 않습니다.")
    }
  }

  const addToCalendar = () => {
    const event = {
      title: "김민수 ❤️ 이지은 결혼식",
      start: "2025-05-24T14:00:00",
      end: "2025-05-24T16:00:00",
      location: "서울 강남구 더 컨벤션 3층 그랜드볼룸",
    }

    const googleCalendarUrl = `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${encodeURIComponent(event.title)}&dates=${event.start.replace(/[-:]/g, "")}/${event.end.replace(/[-:]/g, "")}&location=${encodeURIComponent(event.location)}`

    window.open(googleCalendarUrl, "_blank")
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Menu Button */}
      <Button
        variant="outline"
        size="icon"
        className="fixed top-4 left-4 z-50 bg-card shadow-lg"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
      >
        {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
      </Button>

      {/* Share & Calendar Buttons */}
      <div className="fixed top-4 right-4 z-50 flex gap-2">
        <Button variant="outline" size="icon" className="bg-card shadow-lg" onClick={handleShare}>
          <Share2 className="h-5 w-5" />
        </Button>
        <Button variant="outline" size="icon" className="bg-card shadow-lg" onClick={addToCalendar}>
          <Calendar className="h-5 w-5" />
        </Button>
      </div>

      {/* Side Menu */}
      <div
        className={`fixed top-0 left-0 h-full w-64 bg-card shadow-2xl z-40 transform transition-transform duration-300 ${
          isMenuOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="p-6 pt-20">
          <h2 className="text-xl font-bold mb-6 text-foreground">메뉴</h2>
          <nav className="space-y-2">
            {menuItems.map((item) => {
              const Icon = item.icon
              return (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${
                    activeSection === item.id ? "bg-primary text-primary-foreground" : "hover:bg-muted text-foreground"
                  }`}
                >
                  <Icon className="h-5 w-5" />
                  <span className="font-medium">{item.label}</span>
                </button>
              )
            })}
          </nav>
        </div>
      </div>

      {/* Overlay */}
      {isMenuOpen && <div className="fixed inset-0 bg-black/20 z-30" onClick={() => setIsMenuOpen(false)} />}

      {/* Main Content */}
      <main className="relative">
        <section id="main">
          <MainSection />
        </section>

        <section id="gallery">
          <GallerySection />
        </section>

        <section id="location">
          <LocationSection />
        </section>

        <section id="guestbook">
          <GuestbookSection />
        </section>

        <section id="account">
          <AccountSection />
        </section>

        <section id="contact">
          <ContactSection />
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-muted py-8 text-center">
        <p className="text-sm text-muted-foreground">© 2025 MinSu & JiEun Wedding</p>
      </footer>
    </div>
  )
}
