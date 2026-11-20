import { contact } from '@/data/profile';
import { Watercolor } from '@/components/ui/Watercolor';
import './Contact.css';

const channels = [
  { id: 'mail', label: 'Email', value: contact.email, href: `mailto:${contact.email}`, download: false },
  { id: 'call', label: 'Điện thoại', value: contact.phone, href: `tel:${contact.phoneHref}`, download: false },
  { id: 'pdf', label: 'Hồ sơ', value: 'Tải portfolio PDF', href: contact.resumeFile, download: true },
];

export function Contact() {
  return (
    <section className="contact" id="lien-he" aria-labelledby="contact-title">
      <Watercolor tone="blush" className="contact__wash" />

      <div className="contact__inner shell">
        <h2 className="contact__title" id="contact-title">
          <span>Let&rsquo;s work</span>
          <span>together</span>
        </h2>

        <ul className="contact__channels">
          {channels.map((ch) => (
            <li key={ch.id}>
              <a className="contact__channel" href={ch.href} download={ch.download || undefined}>
                <span className="contact__label">{ch.label}</span>
                <span className="contact__value">{ch.value}</span>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
