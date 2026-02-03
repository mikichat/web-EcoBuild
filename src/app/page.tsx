'use client'

import './globals.css'
import { EditableText, EditModePanel } from '@/components/EditableText'

export default function Home() {
  return (
    <main className="min-h-screen bg-stone-50">
      <EditModePanel />
      
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-stone-200">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 bg-gradient-to-br from-emerald-600 to-teal-600 rounded-xl flex items-center justify-center shadow-lg shadow-emerald-500/20">
              <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
              </svg>
            </div>
            <div>
              <EditableText id="brand-name" defaultText="에코빌드" className="text-2xl font-bold text-stone-800" as="span" />
              <span className="block text-xs text-stone-500">ECO BUILD CONSTRUCTION</span>
            </div>
          </div>
          
          <div className="hidden md:flex items-center gap-8">
            <a href="#about" className="text-stone-600 hover:text-emerald-600 transition-colors font-medium">회사소개</a>
            <a href="#services" className="text-stone-600 hover:text-emerald-600 transition-colors font-medium">사업영역</a>
            <a href="#projects" className="text-stone-600 hover:text-emerald-600 transition-colors font-medium">시공실적</a>
            <a href="#contact" className="text-stone-600 hover:text-emerald-600 transition-colors font-medium">문의하기</a>
            <a href="tel:02-1234-5678" className="px-6 py-3 bg-gradient-to-r from-emerald-600 to-teal-600 text-white rounded-full font-bold hover:shadow-lg hover:shadow-emerald-500/30 transition-all">
              <EditableText id="phone-nav" defaultText="📞 02-1234-5678" as="span" />
            </a>
          </div>

          <button className="md:hidden p-2 text-stone-600">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-24 min-h-screen flex items-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-stone-900 via-stone-800 to-stone-900">
          <div className="absolute inset-0 opacity-30">
            <div className="absolute top-0 left-0 w-full h-full" style={{
              backgroundImage: 'url("data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%239C92AC" fill-opacity="0.1"%3E%3Cpath d="M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")'
            }}></div>
          </div>
          <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-stone-50 to-transparent"></div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-6 py-24">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-emerald-500/10 border border-emerald-500/30 rounded-full text-emerald-400 text-sm font-medium mb-8">
              <span className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse"></span>
              <EditableText id="hero-badge" defaultText="친환경 건축 전문기업" as="span" />
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-8 leading-tight">
              <EditableText id="hero-title-1" defaultText="자연과 함께하는" as="span" /><br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-400">
                <EditableText id="hero-title-2" defaultText="지속가능한 건축" as="span" />
              </span>
            </h1>
            
            <p className="text-xl text-stone-300 mb-10 leading-relaxed max-w-2xl">
              <EditableText id="hero-desc" defaultText="25년의 경험과 기술력으로 친환경 자재와 에너지 효율을 고려한 미래지향적 건축물을 설계하고 시공합니다." as="span" />
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="#contact" className="px-8 py-4 bg-gradient-to-r from-emerald-500 to-teal-500 text-white rounded-xl font-bold text-lg hover:shadow-xl hover:shadow-emerald-500/30 transition-all text-center">
                <EditableText id="hero-cta-1" defaultText="프로젝트 상담" as="span" />
              </a>
              <a href="#projects" className="px-8 py-4 bg-white/10 backdrop-blur-sm text-white rounded-xl font-bold text-lg hover:bg-white/20 transition-all text-center border border-white/20">
                <EditableText id="hero-cta-2" defaultText="시공사례 보기" as="span" />
              </a>
            </div>
          </div>
        </div>

        <div className="absolute bottom-24 right-8 hidden lg:flex flex-col gap-4">
          <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20">
            <div className="text-4xl font-bold text-emerald-400"><EditableText id="stat-1-num" defaultText="25+" as="span" /></div>
            <div className="text-white/70"><EditableText id="stat-1-label" defaultText="Years Experience" as="span" /></div>
          </div>
          <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20">
            <div className="text-4xl font-bold text-emerald-400"><EditableText id="stat-2-num" defaultText="500+" as="span" /></div>
            <div className="text-white/70"><EditableText id="stat-2-label" defaultText="Projects Done" as="span" /></div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-bold text-stone-800 mb-6">
                <EditableText id="about-title-1" defaultText="신뢰와 품질로" as="span" /><br/>
                <span className="text-emerald-600"><EditableText id="about-title-2" defaultText="미래를 건설합니다" as="span" /></span>
              </h2>
              <p className="text-stone-600 mb-8 leading-relaxed text-lg">
                <EditableText id="about-desc" defaultText="에코빌드는 1999년 설립 이래 친환경 건축을 선도해온 종합건설 전문기업입니다. 주거, 상업, 공공시설에 이르기까지 다양한 프로젝트를 성공적으로 수행하며 고객의 꿈을 현실로 만들어왔습니다." as="span" />
              </p>
              
              <div className="grid grid-cols-2 gap-6">
                {[
                  { id: 'about-1', icon: '🏗️', title: '종합건설업', desc: '1급 면허 보유' },
                  { id: 'about-2', icon: '🌱', title: '친환경 인증', desc: '녹색건축 전문' },
                  { id: 'about-3', icon: '🏆', title: '수상 경력', desc: '건축대상 15회' },
                  { id: 'about-4', icon: '👷', title: '전문 인력', desc: '기술진 120명' },
                ].map((item, index) => (
                  <div key={index} className="p-4 bg-stone-50 rounded-2xl">
                    <div className="text-3xl mb-2">{item.icon}</div>
                    <div className="font-bold text-stone-800">
                      <EditableText id={`${item.id}-title`} defaultText={item.title} as="span" />
                    </div>
                    <div className="text-sm text-stone-500">
                      <EditableText id={`${item.id}-desc`} defaultText={item.desc} as="span" />
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="relative">
              <div className="aspect-[4/5] bg-gradient-to-br from-stone-200 to-stone-300 rounded-3xl overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-8xl mb-4">🏛️</div>
                    <p className="text-stone-500">건축 이미지</p>
                  </div>
                </div>
              </div>
              
              <div className="absolute -bottom-6 -left-6 bg-white rounded-2xl p-6 shadow-xl border border-stone-100">
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 bg-emerald-100 rounded-xl flex items-center justify-center text-3xl">✓</div>
                  <div>
                    <div className="font-bold text-stone-800"><EditableText id="cert-title" defaultText="ISO 14001" as="span" /></div>
                    <div className="text-sm text-stone-500"><EditableText id="cert-desc" defaultText="환경경영시스템 인증" as="span" /></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-24 bg-stone-100">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-stone-800 mb-4">
              <EditableText id="services-title" defaultText="사업 영역" as="span" />
            </h2>
            <p className="text-stone-600 max-w-2xl mx-auto">
              <EditableText id="services-desc" defaultText="주거부터 상업, 공공시설까지 모든 건축 분야에서 최고의 품질을 제공합니다" as="span" />
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                id: 'svc-1',
                icon: '🏠',
                title: '주거시설',
                desc: '아파트, 빌라, 단독주택, 타운하우스',
                features: ['친환경 마감재', '에너지 효율 설계', '스마트홈 시스템']
              },
              {
                id: 'svc-2',
                icon: '🏢',
                title: '상업시설',
                desc: '오피스빌딩, 쇼핑몰, 호텔, 리조트',
                features: ['공간 효율 극대화', '브랜드 맞춤 설계', '유지보수 용이']
              },
              {
                id: 'svc-3',
                icon: '🏫',
                title: '공공시설',
                desc: '학교, 병원, 문화시설, 체육시설',
                features: ['안전 최우선 설계', '배리어프리', '내진 설계']
              },
            ].map((service, index) => (
              <div key={index} className="bg-white p-8 rounded-3xl shadow-sm hover:shadow-xl transition-all hover:-translate-y-2 border border-stone-200">
                <div className="w-20 h-20 bg-gradient-to-br from-emerald-100 to-teal-100 rounded-2xl flex items-center justify-center text-5xl mb-6">
                  {service.icon}
                </div>
                <h3 className="text-2xl font-bold text-stone-800 mb-3">
                  <EditableText id={`${service.id}-title`} defaultText={service.title} as="span" />
                </h3>
                <p className="text-stone-500 mb-6">
                  <EditableText id={`${service.id}-desc`} defaultText={service.desc} as="span" />
                </p>
                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-stone-600">
                      <span className="w-2 h-2 bg-emerald-500 rounded-full"></span>
                      <EditableText id={`${service.id}-feat-${idx}`} defaultText={feature} as="span" />
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="mt-12 grid md:grid-cols-4 gap-6">
            {[
              { id: 'extra-1', icon: '📐', title: '설계/디자인' },
              { id: 'extra-2', icon: '🔨', title: '시공/감리' },
              { id: 'extra-3', icon: '🔧', title: '리모델링' },
              { id: 'extra-4', icon: '🛠️', title: '유지보수' },
            ].map((item, index) => (
              <div key={index} className="bg-white p-6 rounded-2xl text-center border border-stone-200 hover:border-emerald-300 transition-colors cursor-pointer">
                <div className="text-4xl mb-3">{item.icon}</div>
                <div className="font-bold text-stone-700">
                  <EditableText id={`${item.id}-title`} defaultText={item.title} as="span" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-stone-800 mb-4">
              <EditableText id="projects-title" defaultText="시공 실적" as="span" />
            </h2>
            <p className="text-stone-600 max-w-2xl mx-auto">
              <EditableText id="projects-desc" defaultText="500개 이상의 프로젝트를 성공적으로 완수했습니다" as="span" />
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { id: 'proj-1', title: '래미안 에코팰리스', type: '아파트', location: '서울 강남구', year: '2024', size: '1,200세대' },
              { id: 'proj-2', title: '그린타워 오피스', type: '오피스빌딩', location: '경기 판교', year: '2023', size: '지상 25층' },
              { id: 'proj-3', title: '에코힐스 리조트', type: '리조트', location: '강원 평창', year: '2023', size: '객실 280실' },
              { id: 'proj-4', title: '미래초등학교', type: '교육시설', location: '인천 송도', year: '2022', size: '36학급' },
              { id: 'proj-5', title: '헬스케어센터', type: '의료시설', location: '대전 유성구', year: '2022', size: '지상 12층' },
              { id: 'proj-6', title: '문화예술회관', type: '문화시설', location: '부산 해운대', year: '2021', size: '1,500석 규모' },
            ].map((project, index) => (
              <div key={index} className="group cursor-pointer">
                <div className="aspect-[4/3] bg-gradient-to-br from-stone-200 to-stone-300 rounded-2xl overflow-hidden mb-4 relative">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-6xl opacity-50">🏗️</div>
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-stone-900/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-6">
                    <span className="text-white font-medium">자세히 보기 →</span>
                  </div>
                  <div className="absolute top-4 left-4 px-3 py-1 bg-emerald-500 text-white text-sm font-medium rounded-full">
                    <EditableText id={`${project.id}-type`} defaultText={project.type} as="span" />
                  </div>
                </div>
                <h3 className="text-xl font-bold text-stone-800 mb-2 group-hover:text-emerald-600 transition-colors">
                  <EditableText id={`${project.id}-title`} defaultText={project.title} as="span" />
                </h3>
                <div className="flex items-center gap-4 text-sm text-stone-500">
                  <span>📍 <EditableText id={`${project.id}-loc`} defaultText={project.location} as="span" /></span>
                  <span>📅 <EditableText id={`${project.id}-year`} defaultText={project.year} as="span" /></span>
                </div>
                <div className="text-sm text-stone-400 mt-1">
                  <EditableText id={`${project.id}-size`} defaultText={project.size} as="span" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-24 bg-gradient-to-br from-stone-800 to-stone-900 text-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">
              <EditableText id="why-title" defaultText="에코빌드를 선택하는 이유" as="span" />
            </h2>
            <p className="text-stone-400 max-w-2xl mx-auto">
              <EditableText id="why-desc" defaultText="차별화된 기술력과 신뢰로 고객 만족을 실현합니다" as="span" />
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              { id: 'why-1', icon: '🌿', title: '친환경 시공', desc: '탄소중립 목표 달성을 위한 친환경 자재 및 공법 적용' },
              { id: 'why-2', icon: '⚡', title: '에너지 효율', desc: '제로에너지 건축물 인증 취득 노하우 보유' },
              { id: 'why-3', icon: '🔒', title: '안전 최우선', desc: '무재해 3배수 달성, 체계적 안전관리 시스템' },
              { id: 'why-4', icon: '💯', title: '품질 보증', desc: '하자 보수 10년 보증, 사후관리 서비스' },
            ].map((item, index) => (
              <div key={index} className="text-center p-8 bg-white/5 rounded-3xl border border-white/10 hover:border-emerald-500/50 transition-colors">
                <div className="text-5xl mb-4">{item.icon}</div>
                <h3 className="text-xl font-bold mb-3">
                  <EditableText id={`${item.id}-title`} defaultText={item.title} as="span" />
                </h3>
                <p className="text-stone-400 text-sm leading-relaxed">
                  <EditableText id={`${item.id}-desc`} defaultText={item.desc} as="span" />
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="contact" className="py-24 bg-stone-50">
        <div className="max-w-4xl mx-auto px-6">
          <div className="bg-gradient-to-br from-emerald-600 to-teal-600 p-12 rounded-3xl text-center text-white shadow-2xl shadow-emerald-500/20">
            <h2 className="text-4xl font-bold mb-6">
              <EditableText id="cta-title" defaultText="프로젝트 상담" as="span" />
            </h2>
            <p className="text-xl text-emerald-100 mb-8">
              <EditableText id="cta-desc" defaultText="건축 전문가가 무료로 상담해 드립니다" as="span" />
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-10">
              <a href="tel:02-1234-5678" className="px-10 py-5 bg-white text-emerald-600 rounded-xl font-bold text-xl hover:shadow-2xl transition-all flex items-center gap-3">
                <span className="text-2xl">📞</span>
                <EditableText id="cta-phone" defaultText="02-1234-5678" as="span" />
              </a>
              <a href="mailto:contact@ecobuild.kr" className="px-10 py-5 bg-white/20 text-white rounded-xl font-bold text-xl hover:bg-white/30 transition-all border-2 border-white/30">
                <EditableText id="cta-email-btn" defaultText="📧 이메일 문의" as="span" />
              </a>
            </div>

            <div className="flex flex-wrap items-center justify-center gap-8 text-emerald-100">
              <div className="flex items-center gap-2">
                <span>🕐</span> <EditableText id="cta-hours" defaultText="평일 09:00 ~ 18:00" as="span" />
              </div>
              <div className="flex items-center gap-2">
                <span>📍</span> <EditableText id="cta-location" defaultText="서울시 강남구 테헤란로 456" as="span" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-16 bg-stone-900 text-stone-400">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-12 mb-12">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 bg-gradient-to-br from-emerald-500 to-teal-500 rounded-xl flex items-center justify-center">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                </div>
                <span className="text-xl font-bold text-white">
                  <EditableText id="footer-brand" defaultText="에코빌드" as="span" />
                </span>
              </div>
              <p className="text-sm leading-relaxed">
                <EditableText id="footer-desc" defaultText="지속가능한 미래를 건설하는 친환경 건축 전문기업" as="span" />
              </p>
            </div>
            
            <div>
              <h4 className="text-white font-bold mb-4">사업영역</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="hover:text-emerald-400 transition-colors">주거시설</a></li>
                <li><a href="#" className="hover:text-emerald-400 transition-colors">상업시설</a></li>
                <li><a href="#" className="hover:text-emerald-400 transition-colors">공공시설</a></li>
                <li><a href="#" className="hover:text-emerald-400 transition-colors">리모델링</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-white font-bold mb-4">회사정보</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="hover:text-emerald-400 transition-colors">회사소개</a></li>
                <li><a href="#" className="hover:text-emerald-400 transition-colors">연혁</a></li>
                <li><a href="#" className="hover:text-emerald-400 transition-colors">인증현황</a></li>
                <li><a href="#" className="hover:text-emerald-400 transition-colors">채용정보</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-white font-bold mb-4">연락처</h4>
              <ul className="space-y-2 text-sm">
                <li>📞 대표번호: <EditableText id="footer-phone" defaultText="02-1234-5678" as="span" /></li>
                <li>📠 팩스: <EditableText id="footer-fax" defaultText="02-1234-5679" as="span" /></li>
                <li>📧 <EditableText id="footer-email" defaultText="contact@ecobuild.kr" as="span" /></li>
                <li>📍 <EditableText id="footer-address" defaultText="서울시 강남구 테헤란로 456" as="span" /></li>
              </ul>
            </div>
          </div>
          
          <div className="pt-8 border-t border-stone-800 flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-sm">© 2026 에코빌드 주식회사. All rights reserved.</p>
            <div className="flex items-center gap-6 text-sm">
              <a href="#" className="hover:text-emerald-400 transition-colors">이용약관</a>
              <a href="#" className="hover:text-emerald-400 transition-colors">개인정보처리방침</a>
              <a href="#" className="hover:text-emerald-400 transition-colors">사업자정보확인</a>
            </div>
          </div>
        </div>
      </footer>
    </main>
  )
}
