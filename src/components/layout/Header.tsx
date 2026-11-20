import { navItems, contact } from '@/data/profile';
import { useScrollSpy } from '@/hooks/useScrollSpy';
import './Header.css';

const ids = navItems.map((item) => item.id);

export function Header() {
  const active = useScrollSpy(ids);

  return (
    <header className="masthead">
      <div className="masthead__inner">
        <a className="masthead__name" href="#top">
          <span className="masthead__initials" aria-hidden="true">
            TH
          </span>
          <span className="masthead__full">{contact.fullName}</span>
        </a>

        <nav className="masthead__nav" aria-label="Mục lục portfolio">
          <ul>
            {navItems.map((item) => (
              <li key={item.id}>
                <a
                  href={`#${item.id}`}
                  className={active === item.id ? 'is-active' : undefined}
                  aria-current={active === item.id ? 'true' : undefined}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <a className="masthead__cta" href={`mailto:${contact.email}`}>
          Liên hệ ngay
        </a>
      </div>
    </header>
  );
}
