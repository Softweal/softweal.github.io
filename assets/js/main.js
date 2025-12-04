// import { animate } from 'https://esm.sh/animejs';

document.addEventListener("DOMContentLoaded", () => {
  // 1. Lenis'i Başlat
  const lenis = new Lenis({
    duration: 1.2, // Kaydırma süresi (saniye)
    easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // Yumuşatma eğrisi
    smooth: true
  });

  // 2. Lenis ve ScrollTrigger Entegrasyonu (KRİTİK BÖLÜM)
  // Lenis her kaydırdığında ScrollTrigger'ı güncelle
  lenis.on('scroll', ScrollTrigger.update);

  // GSAP'e Lenis'in kaydırma yaptığını söyle (Ticker entegrasyonu)
  gsap.ticker.add((time) => {
    lenis.raf(time * 1000);
  });

  // GSAP'in takılma (lag) yumuşatmasını kapat çünkü Lenis bunu hallediyor
  gsap.ticker.lagSmoothing(0);

  // 3. ScrollTrigger Plugin'ini Kaydet
  gsap.registerPlugin(ScrollTrigger);

  // --- BURADAN SONRASI SENİN ANİMASYONLARIN ---

  // Örnek: Bir kutuyu döndürme
  gsap.to(".kutu", {
    scrollTrigger: {
      trigger: ".kutu",
      start: "top center", // Tetikleyici ekranın ortasına gelince başla
      end: "bottom top",   // Tetikleyici ekranın tepesinden çıkınca bitir
      scrub: true          // Kaydırma hızına göre animasyon oynat (Smooth)
    },
    rotation: 360,
    x: 200,
    duration: 2
  });

  // --- LENIS AYARLARI (Önceki cevaptaki kodlar burada kalmalı) ---

  // 1. HERO ANİMASYONU (Sayfa yüklenince çalışır)
  // 'hero-anim' sınıfına sahip her şeyi sırayla getirir
  gsap.to(".hero-anim", {
    opacity: 1,
    y: 0,
    duration: 1,
    stagger: 0.2, // Elemanlar arası 0.2 saniye gecikme
    ease: "power2.out"
  });

  // 2. KART ANİMASYONU (Scroll edince çalışır)
  // batch: Ekrana giren elemanları gruplar halinde yakalar
  ScrollTrigger.batch(".feature-card", {
    onEnter: batch => gsap.to(batch, {
      opacity: 1,
      y: 0,
      duration: 0.8,
      stagger: 0.15,
      overwrite: true,
      ease: "back.out(1.7)" // Hafif bir yaylanma efekti verir
    }),
    start: "top 85%", // Ekranın %85'ine gelince tetikle
  });

  // Başlık için basit bir fade-in
  gsap.to(".feature-header", {
    scrollTrigger: {
      trigger: ".feature-header",
      start: "top 80%",
    },
    opacity: 1,
    duration: 1
  });

  // Hero Bölümü Giriş Animasyonu
  // .hero-item sınıfına sahip her şeyi seçer
  if (typeof gsap !== 'undefined') {
      gsap.from(".hero-item", {
        y: 30,
        opacity: 0,
        duration: 1,
        stagger: 0.15,
        ease: "power2.out",
        delay: 0.1
      });
    }

  // Arkaplandaki blur toplarının hafifçe dönmesi için (Opsiyonel)
  gsap.to(".blur-100px", {
    rotation: 360,
    duration: 20,
    repeat: -1,
    ease: "linear"
  });
});
