"use client"

import { useState } from "react"
import { Card } from "@/components/ui/card"
import { X } from "lucide-react"

export default function GallerySection() {
  const [selectedImage, setSelectedImage] = useState<number | null>(null)

  const hasCdn = !!process.env.NEXT_PUBLIC_CDN;
  const images = Array.from({ length: 6 }, (_, i) => ({
    id: i + 1,
    src: hasCdn
      ? `https://${process.env.NEXT_PUBLIC_CDN}/gallery/gallery-${i + 1}.jpg`
      : `/sample/gallery-${i + 1}.jpg`, // fallback sample image in /public/sample/
  }))

  return (
    <div className="min-h-screen flex items-center justify-center p-4 py-20">
      <Card className="max-w-4xl w-full p-8 md:p-12">
        <h2 className="text-3xl font-bold text-center mb-8 text-foreground">우리의 순간들</h2>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {images.map((image, index) => (
            <div
              key={image.id}
              className="aspect-square rounded-lg overflow-hidden cursor-pointer hover:opacity-90 transition-opacity"
              onClick={() => setSelectedImage(index)}
            >
              <img
                src={image.src || "/placeholder.svg"}
                alt={`Gallery ${image.id}`}
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </div>

        {/* Lightbox */}
        {selectedImage !== null && (
          <div
            className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedImage(null)}
          >
            <button className="absolute top-4 right-4 text-white" onClick={() => setSelectedImage(null)}>
              <X className="h-8 w-8" />
            </button>
            <img
              src={images[selectedImage].src || "/placeholder.svg"}
              alt="Selected"
              className="max-w-full max-h-full object-contain"
            />
          </div>
        )}
      </Card>
    </div>
  )
}
