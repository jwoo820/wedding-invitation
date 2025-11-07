/** @type {import('next').NextConfig} */
const nextConfig = {
  // ✅ 개발 모드에서 Cross-Origin 허용 (공식문서 권장)
  allowedDevOrigins: [
    'http://localhost:3000',
    'http://wedding.flosmeeting.local:3000',
    'http://manager.flosmeeting.local:3000',
    'http://www.flosmeeting.local:3000',
  ],

  // ✅ eslint / typescript 설정 (빌드 중 오류 무시 옵션, 필요시 유지)
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },

  // ✅ 이미지 최적화 비활성화 (정적 빌드 속도 향상용)
  images: {
    unoptimized: true,
  },

  // ✅ 필요 시 header를 명시적으로 허용할 수도 있음 (추가 안전장치)
  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          {
            key: 'Access-Control-Allow-Origin',
            value:
              'http://localhost:3000, http://wedding.flosmeeting.local:3000, http://manager.flosmeeting.local:3000, http://www.flosmeeting.local:3000',
          },
          { key: 'Access-Control-Allow-Methods', value: 'GET,OPTIONS' },
          { key: 'Access-Control-Allow-Headers', value: 'Content-Type' },
        ],
      },
    ];
  },
};

module.exports = nextConfig;