'use client'

import { useEffect, useRef, useState } from 'react'

type NaverMapProps = {
  latitude: number
  longitude: number
  markerLabel?: string
  className?: string
  zoom?: number
}

export default function NaverMap({ latitude, longitude, markerLabel, className, zoom = 16 }: NaverMapProps) {
  const mapRef = useRef<HTMLDivElement | null>(null)
  const [sdkLoaded, setSdkLoaded] = useState(false)

  useEffect(() => {
    const clientId = process.env.NEXT_PUBLIC_NAVER_MAP_CLIENT_ID
    if (!clientId) {
      // eslint-disable-next-line no-console
      console.warn('NEXT_PUBLIC_NAVER_MAP_CLIENT_ID is not set. Naver Map will not load.')
      return
    }

    // If SDK already present, mark loaded
    if (typeof window !== 'undefined' && (window as any).naver?.maps) {
      setSdkLoaded(true)
      return
    }

    const script = document.createElement('script')
    script.src = `https://oapi.map.naver.com/openapi/v3/maps.js?ncpKeyId=${encodeURIComponent(clientId)}`
    script.async = true
    script.defer = true
    script.onload = () => setSdkLoaded(true)
    script.onerror = () => {
      // eslint-disable-next-line no-console
      console.error('Failed to load Naver Maps SDK')
    }
    document.head.appendChild(script)

    return () => {
      // No official unload API; best effort cleanup
      // Keep script for page lifetime to avoid reloading on client navigation
    }
  }, [])

  useEffect(() => {
    if (!sdkLoaded || !mapRef.current) return

    const naver = (window as any).naver
    if (!naver?.maps) return

    const position = new naver.maps.LatLng(latitude, longitude)

    const map = new naver.maps.Map(mapRef.current, {
      center: position,
      zoom,
      // Disable expensive gestures on mobile by default; can be tuned
      scrollWheel: false,
      scaleControl: true,
      mapDataControl: false,
      logoControl: true,
    })

    const marker = new naver.maps.Marker({
      position,
      map,
    })

    if (markerLabel) {
      const info = new naver.maps.InfoWindow({
        content: `<div style="padding:6px 10px; font-size:12px;">${markerLabel}</div>`,
      })
      info.open(map, marker)
    }

    return () => {
      // Let GC collect when component unmounts
      marker.setMap(null)
      // map has no explicit destroy; it will be GC'd when detached
    }
  }, [sdkLoaded, latitude, longitude, markerLabel, zoom])

  return (
    <div
      ref={mapRef}
      className={className}
      style={{ width: '100%', height: '16rem', borderRadius: '0.5rem', overflow: 'hidden' }}
      aria-label="Naver map"
    />
  )
} 