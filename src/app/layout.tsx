export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ko">
      <head>
        <title>에코빌드 - 친환경 건축 전문기업 | 종합건설</title>
        <meta name="description" content="25년 경력의 친환경 건축 전문기업 에코빌드. 주거, 상업, 공공시설 설계 및 시공. ISO 14001 인증, 녹색건축 전문. 무료 프로젝트 상담." />
        <meta name="keywords" content="건축회사, 종합건설, 친환경 건축, 아파트 시공, 상업시설, 리모델링, 에코빌드" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta property="og:title" content="에코빌드 - 친환경 건축 전문기업" />
        <meta property="og:description" content="25년 경력의 친환경 건축 전문기업. 지속가능한 미래를 건설합니다." />
        <meta property="og:type" content="website" />
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body className="antialiased">{children}</body>
    </html>
  )
}
