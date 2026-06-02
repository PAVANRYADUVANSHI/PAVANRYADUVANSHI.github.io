export default function Footer() {
  return (
    <footer className="footer">
      <p>Designed & Built by <span>PAVAN R YADAV</span></p>
      <p className="footer-sub">© {new Date().getFullYear()} All rights reserved.</p>
      <div className="footer-links">
        <a href="https://github.com/PAVANRYADUVANSHI" target="_blank" rel="noreferrer" className="footer-link">🐙 GitHub</a>
        <span className="footer-divider">·</span>
        <a href="http://localhost:5173" target="_blank" rel="noreferrer" className="footer-link">🚀 Portfolio v2</a>
      </div>
    </footer>
  );
}
