import { promises as fs } from "node:fs"
import path from "node:path"
import { NextResponse } from "next/server"

type GalleryImage = {
  id: number
  name: string
  src: string
}

function parseGalleryOrder(fileName: string): number {
  const match = fileName.match(/^gallery-(\d+)\.(jpg|jpeg|png|webp)$/i)
  if (!match) return Number.MAX_SAFE_INTEGER
  return Number.parseInt(match[1], 10)
}

export async function GET() {
  try {
    const publicDir = path.join(process.cwd(), "public")
    const fileNames = await fs.readdir(publicDir)

    const images: GalleryImage[] = fileNames
      .filter((name) => /^gallery-\d+\.(jpg|jpeg|png|webp)$/i.test(name))
      .sort((a, b) => parseGalleryOrder(a) - parseGalleryOrder(b))
      .map((name, index) => ({
        id: index + 1,
        name,
        src: "/" + name,
      }))

    return NextResponse.json({ images })
  } catch {
    return NextResponse.json(
      { images: [], error: "Failed to load gallery images" },
      { status: 500 }
    )
  }
}
