const projects = [
  {
    title: 'NeuroCity 🏙️ — Living Intelligence Grid',
    desc: 'A fully sentient-feeling smart city platform powered by Gen AI. Features a 3D holographic city map, conversational city AI (speaks in first person), live IoT sensor streams, predictive intelligence engine, emergency command center, and citizen identity nodes.',
    tech: ['Next.js 14', 'TypeScript', 'Spring Boot', 'Three.js', 'Framer Motion', 'OpenAI', 'WebSockets', 'Tailwind'],
    color: '#00F5FF',
    icon: '🏙️',
    github: 'https://github.com/PAVANRYADUVANSHI/NeuroCity',
    live: 'http://localhost:3000',
    featured: true,
    stats: [
      { icon: '🧠', value: 'CityMind', label: 'AI Brain' },
      { icon: '🗺️', value: '3D Map', label: 'NeuroMap' },
      { icon: '📡', value: '14,392', label: 'IoT Sensors' },
      { icon: '🔮', value: 'Predict', label: 'Engine' },
      { icon: '🚨', value: 'NeuroPulse', label: 'Emergency' },
      { icon: '⚡', value: 'Next.js', label: 'TypeScript' },
    ]
  },
  {
    title: 'NeuralForge 🧠 — AI Dev Platform',
    desc: 'World\'s first Autonomous AI Development Intelligence Platform built in Java. Generates full-stack features from plain English, predicts bugs before runtime, self-heals production errors, and features a 3D neural dashboard.',
    tech: ['Java 21', 'Spring Boot 3', 'React', 'LangChain4j', 'GPT-4o', 'Docker', 'Kafka', 'Redis'],
    color: '#6366f1',
    icon: '🧠',
    github: 'https://github.com/PAVANRYADUVANSHI/NeuralForge',
    live: 'http://localhost:3030',
    featured: true,
    stats: [
      { icon: '🤖', value: 'GPT-4o', label: 'AI Engine' },
      { icon: '⚡', value: 'Intent', label: 'To Feature' },
      { icon: '🔮', value: 'Bug', label: 'Oracle' },
      { icon: '🛡️', value: 'Self', label: 'Healing' },
      { icon: '🧬', value: 'Vector', label: 'Memory' },
      { icon: '☕', value: 'Java', label: 'Spring Boot' },
    ]
  },
  {
    title: 'FAST Food Delivery App 🍔',
    desc: 'Swiggy/Zomato-like full-stack food delivery app — 500+ dishes, JWT auth, Stripe + UPI + COD payments, AI chatbot (GPT), real-time order tracking, coupon system, and admin dashboard with charts.',
    tech: ['React', 'Spring Boot', 'MySQL', 'Stripe', 'Gen AI', 'Tailwind'],
    color: '#fc8019',
    icon: '🍔',
    github: 'https://github.com/PAVANRYADUVANSHI/FAST-Food-Delivery-App',
    live: 'https://fast-food-delivery-srinidhi.netlify.app',
  },
  {
    title: 'Bake My Cake 🎂',
    desc: 'A React SPA for an online cake shop with category filtering, search, flip-card product gallery, shopping cart, checkout flow, and 54 products served via json-server REST API.',
    tech: ['React', 'Axios', 'Framer Motion', 'json-server', 'CSS'],
    color: '#DAA520',
    icon: '🎂',
    github: 'https://github.com/PAVANRYADUVANSHI/bake-my-cake-phase-1',
    live: 'https://bake-my-cake-srinidhi.netlify.app',
  },
  {
    title: 'Zomato UI Clone',
    desc: 'A pixel-perfect responsive clone of Zomato\'s food delivery UI with smooth animations and interactive components.',
    tech: ['HTML', 'CSS', 'JavaScript'],
    color: '#e23744',
    icon: '🍕',
    github: 'https://github.com/PAVANRYADUVANSHI/zomato-ui-clone',
    live: '#',
  },
  {
    title: 'Task Manager App',
    desc: 'Full-stack task management application with CRUD operations, user authentication, and real-time updates.',
    tech: ['React', 'Node.js', 'SQL'],
    color: '#2563eb',
    icon: '✅',
    github: 'https://github.com/PAVANRYADUVANSHI/task-manager-app',
    live: '#',
  },
  {
    title: 'Portfolio Website',
    desc: 'Modern developer portfolio with 3D animations, dark theme, and responsive design built with React.',
    tech: ['React', 'CSS', 'JavaScript'],
    color: '#9333ea',
    icon: '🚀',
    github: 'https://github.com/PAVANRYADUVANSHI/portfolio-website',
    live: '#',
  },
  {
    title: 'ShopNow — eCommerce App',
    desc: 'Amazon-like full-stack eCommerce platform with JWT auth, Stripe payments, product reviews, wishlist, admin dashboard, and Cloudinary image uploads.',
    tech: ['Next.js', 'Node.js', 'MongoDB', 'Stripe'],
    color: '#10b981',
    icon: '🛒',
    github: 'https://github.com/PAVANRYADUVANSHI/shopnow-ecommerce',
    live: '#',
  },
  {
    title: 'Weather Dashboard',
    desc: 'Real-time weather app consuming OpenWeatherMap API with beautiful UI and location-based forecasts.',
    tech: ['React', 'API', 'CSS'],
    color: '#f59e0b',
    icon: '🌤️',
    github: 'https://github.com/PAVANRYADUVANSHI/weather-dashboard',
    live: '#',
  },
];

export default function Projects() {
  const neurocity = projects[0];
  const neuralforge = projects[1];
  const featured = projects[2];
  const rest = projects.slice(3);

  return (
    <section className="projects section" id="projects">
      <div className="section-title">
        <h2>My <span>Projects</span></h2>
        <div className="title-line" />
      </div>

      {/* NeuroCity — TOP FLAGSHIP */}
      <div className="featured-card" style={{ '--color': neurocity.color, marginBottom: '2rem' }}>
        <div className="featured-badge" style={{ background: 'linear-gradient(135deg,#00F5FF,#39FF14)' }}>🏙️ NEW — Smart City Gen AI</div>
        <div className="featured-inner">
          <div className="featured-left">
            <span className="featured-icon">{neurocity.icon}</span>
            <h2>{neurocity.title}</h2>
            <p>{neurocity.desc}</p>
            <div className="project-tech">
              {neurocity.tech.map(t => <span key={t}>{t}</span>)}
            </div>
            <div className="featured-btns">
              <a href={neurocity.github} target="_blank" rel="noreferrer" className="featured-github-btn">GitHub ↗</a>
              <a href={neurocity.live} target="_blank" rel="noreferrer" className="featured-live-btn">Live Demo ↗</a>
            </div>
          </div>
          <div className="featured-right">
            <div className="featured-stats">
              {neurocity.stats.map(s => (
                <div className="fstat" key={s.label}><span>{s.icon}</span><strong>{s.value}</strong><small>{s.label}</small></div>
              ))}
            </div>
          </div>
        </div>
        <div className="featured-glow" />
      </div>

      {/* NeuralForge — NEW FLAGSHIP */}
      <div className="featured-card" style={{ '--color': neuralforge.color, marginBottom: '2rem' }}>
        <div className="featured-badge" style={{ background: 'linear-gradient(135deg,#6366f1,#10b981)' }}>🧠 NEW — Gen AI Flagship</div>
        <div className="featured-inner">
          <div className="featured-left">
            <span className="featured-icon">{neuralforge.icon}</span>
            <h2>{neuralforge.title}</h2>
            <p>{neuralforge.desc}</p>
            <div className="project-tech">
              {neuralforge.tech.map(t => <span key={t}>{t}</span>)}
            </div>
            <div className="featured-btns">
              <a href={neuralforge.github} target="_blank" rel="noreferrer" className="featured-github-btn">GitHub ↗</a>
              <a href={neuralforge.live} target="_blank" rel="noreferrer" className="featured-live-btn">Live Demo ↗</a>
            </div>
          </div>
          <div className="featured-right">
            <div className="featured-stats">
              {neuralforge.stats.map(s => (
                <div className="fstat" key={s.label}><span>{s.icon}</span><strong>{s.value}</strong><small>{s.label}</small></div>
              ))}
            </div>
          </div>
        </div>
        <div className="featured-glow" />
      </div>
      {/* FAST Food — Featured */}
      <div className="featured-card" style={{ '--color': featured.color }}>
        <div className="featured-badge">⭐ Main Project</div>
        <div className="featured-inner">
          <div className="featured-left">
            <span className="featured-icon">{featured.icon}</span>
            <h2>{featured.title}</h2>
            <p>{featured.desc}</p>
            <div className="project-tech">
              {featured.tech.map(t => <span key={t}>{t}</span>)}
            </div>
            <div className="featured-btns">
              <a href={featured.github} target="_blank" rel="noreferrer" className="featured-github-btn">GitHub ↗</a>
              <a href={featured.live} target="_blank" rel="noreferrer" className="featured-live-btn">Live Demo ↗</a>
            </div>
          </div>
          <div className="featured-right">
            <div className="featured-stats">
              <div className="fstat"><span>🍔</span><strong>500+</strong><small>Food Items</small></div>
              <div className="fstat"><span>🔐</span><strong>JWT</strong><small>Auth</small></div>
              <div className="fstat"><span>💳</span><strong>Stripe</strong><small>Payments</small></div>
              <div className="fstat"><span>🤖</span><strong>Gen AI</strong><small>Chatbot</small></div>
              <div className="fstat"><span>📊</span><strong>Admin</strong><small>Dashboard</small></div>
              <div className="fstat"><span>☕</span><strong>Java</strong><small>Spring Boot</small></div>
            </div>
          </div>
        </div>
        <div className="featured-glow" />
      </div>

      {/* Rest of Projects */}
      <div className="projects-grid">
        {rest.map((p, i) => (
          <div className="project-card" key={p.title} style={{ '--color': p.color, '--delay': `${i * 0.1}s` }}>
            <div className="project-top">
              <span className="project-icon">{p.icon}</span>
              <div className="project-links">
                <a href={p.github} target="_blank" rel="noreferrer">GitHub</a>
                {p.live !== '#' ? (
                  <a href={p.live} target="_blank" rel="noreferrer" className="live-link">Live ↗</a>
                ) : (
                  <span className="live-soon">Coming Soon</span>
                )}
              </div>
            </div>
            <h3>{p.title}</h3>
            <p>{p.desc}</p>
            <div className="project-tech">
              {p.tech.map(t => <span key={t}>{t}</span>)}
            </div>
            <div className="project-glow" />
          </div>
        ))}
      </div>
    </section>
  );
}
