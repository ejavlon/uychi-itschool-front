import React from 'react';
import Link from '@docusaurus/Link';

const DOCS_LIST = [
  {
    title: 'Frontend Development',
    icon: '⚡',
    description: "HTML, CSS, JavaScript, React va zamonaviy web dasturlash asoslari bo'yicha to'liq qo'llanma.",
    tags: ['HTML5', 'CSS3', 'JavaScript', 'React'],
    link: '/docs/frontend/intro',
  },
  {
    title: 'Java Development',
    icon: '☕',
    description: "Java dasturlash tili asoslari, OOP tamoyillari, JVM tuzilishi va amaliy misollar.",
    tags: ['Java Core', 'OOP', 'JVM', 'Backend'],
    link: '/docs/java/intro',
  },
  {
    title: 'Python Development',
    icon: '🐍',
    description: "Python sintaksisi, algoritmlar, ma'lumotlar tuzilmasi va avtomatlashtirish darslari.",
    tags: ['Python', 'Sintaksis', 'Algoritmlar'],
    link: '/docs/python/intro',
  },
  {
    title: 'Grafik Dizayn',
    icon: '🎨',
    description: "Grafik dizayn qoidalari, vizual kompozitsiya va dizayn vositalari bo'yicha qo'llanma.",
    tags: ['UI/UX', 'Photoshop', 'Dizayn asoslari'],
    link: '/docs/design/intro',
  },
];

export default function HomepageFeatures() {
  return (
    <div>
      {/* Hero Section */}
      <section className="hero-wrapper">
        <div className="hero-badge">
          <span>✨ docs.javlon.blog</span>
        </div>
        
        <h1 className="hero-title">
          Dasturlash va Texnologiyalar <br />
          <span className="hero-title-gradient">Qo'llanmalar To'plami</span>
        </h1>
        
        <p className="hero-description">
          Frontend, Java, Python va Dizayn bo'yicha tizimlashtirilgan konspektlar, 
          amaliy kodlar va qadamma-qadam qo'llanmalar.
        </p>

        <div className="hero-buttons">
          <Link className="btn-primary-custom" to="/docs/frontend/intro">
            Qo'llanmalarni O'qish <span>→</span>
          </Link>
          <Link className="btn-secondary-custom" to="/blog">
            Blog Postlari
          </Link>
          <a 
            className="btn-secondary-custom" 
            href="https://javlon.blog" 
            target="_blank" 
            rel="noopener noreferrer"
          >
            Asosiy Blog (javlon.blog) ↗
          </a>
        </div>
      </section>

      {/* Docs Grid Section */}
      <section className="docs-section">
        <div className="section-header">
          <h2 className="section-title">Mavjud Qo'llanmalar</h2>
          <p className="section-subtitle">
            O'zingizga qiziq bo'lgan yo'nalishni tanlang va o'rganishni boshlang
          </p>
        </div>

        <div className="docs-grid">
          {DOCS_LIST.map((item, idx) => (
            <Link key={idx} to={item.link} className="doc-card">
              <div className="card-icon">{item.icon}</div>
              <h3 className="card-title">{item.title}</h3>
              <p className="card-desc">{item.description}</p>
              
              <div className="card-topics">
                {item.tags.map((tag, tIdx) => (
                  <span key={tIdx} className="topic-tag">{tag}</span>
                ))}
              </div>

              <div className="card-link-text">
                Bo'limga o'tish <span>→</span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* About & Quick Links Banner */}
      <section className="about-banner">
        <div className="about-box">
          <div className="about-content">
            <h3>Javlon Ergashev</h3>
            <p>
              Ushbu sahifada men dasturlash faoliyatim davomida o'rgangan va yozgan barcha 
              muhim ma'lumotlar, qo'llanmalar hamda konspektlarni bir joyga jamlaganman.
            </p>
          </div>
          <div>
            <a 
              href="https://t.me/ejavlon" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="btn-secondary-custom"
            >
              Telegram orqali bog'lanish ↗
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
