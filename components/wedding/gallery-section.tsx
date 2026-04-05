"use client"

import { useEffect, useMemo, useState } from "react"
import { Card } from "@/components/ui/card"
import { X } from "lucide-react"
import Image, { type ImageLoader } from "next/image"

type GalleryImage = {
  id: number
  name: string
  src: string
}

const passthroughLoader: ImageLoader = ({ src }) => src

export default function GallerySection() {
  const [selectedImage, setSelectedImage] = useState<number | null>(null)
  const [apiImages, setApiImages] = useState<GalleryImage[]>([])

  const hasCdn = !!process.env.NEXT_PUBLIC_CDN
  const fallbackImages = useMemo(
    () =>
      Array.from({ length: 6 }, (_, i) => ({
        id: i + 1,
        name: `gallery-${i + 1}.jpg`,
        src: hasCdn
          ? `https://${process.env.NEXT_PUBLIC_CDN}/gallery/gallery-${i + 1}.jpg`
          : `/gallery-${i + 1}.jpg`,
      })),
    [hasCdn]
  )

  useEffect(() => {
    if (hasCdn) return

    let isMounted = true
    const load = async () => {
      try {
        const response = await fetch("/api/images", { cache: "no-store" })
        if (!response.ok) return
        const data = (await response.json()) as { images?: GalleryImage[] }
        if (isMounted && Array.isArray(data.images) && data.images.length > 0) {
          setApiImages(data.images)
        }
      } catch {
        // Fallback images are used if API fails.
      }
    }

    load()
    return () => {
      isMounted = false
    }
  }, [hasCdn])

  const images = hasCdn ? fallbackImages : apiImages.length > 0 ? apiImages : fallbackImages

  return (
    <div className="min-h-screen flex items-center justify-center p-4 py-20">
      <Card className="max-w-4xl w-full p-8 md:p-12">
        <h2 className="text-3xl font-bold text-center mb-8 text-foreground">우리의 순간들</h2>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {images.map((image, index) => (
            <div
              key={image.id}
              className="relative aspect-square rounded-lg overflow-hidden cursor-pointer hover:opacity-90 transition-opacity"
              onClick={() => setSelectedImage(index)}
            >
              <Image
                loader={passthroughLoader}
                unoptimized
                src={image.src || "/placeholder.svg"}
                alt={image.name || `Gallery ${image.id}`}
                fill
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
            <div className="relative h-[80vh] w-full max-w-5xl">
              <Image
                loader={passthroughLoader}
                unoptimized
                src={images[selectedImage].src || "/placeholder.svg"}
                alt="Selected"
                fill
                className="object-contain"
              />
            </div>
          </div>
        )}
      </Card>
    </div>
  )
}
