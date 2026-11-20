import { contact } from '@/data/profile';
import './Footer.css';

export function Footer() {
  return (
    <footer className="colophon">
      <div className="colophon__inner shell">
        <p className="colophon__name">
          {contact.fullName} — {contact.role}
        </p>
        <p className="colophon__links">
          <a href={`mailto:${contact.email}`}>{contact.email}</a>
          <a href={`tel:${contact.phoneHref}`}>{contact.phone}</a>
        </p>
        <p className="colophon__back">
          <a href="#top">Về đầu trang</a>
        </p>
      </div>
    </footer>
  );
}
