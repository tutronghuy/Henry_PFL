import { contact, intro } from '@/data/profile';
import { SectionHead } from '@/components/ui/SectionHead';
import './About.css';

const facts = [
  { key: 'Vị trí', value: contact.role },
  { key: 'Kinh nghiệm', value: '1 năm marketing đa kênh' },
  { key: 'Thế mạnh', value: 'Xây dựng thương hiệu & chiến dịch có hiệu quả thực tế' },
];

export function About() {
  return (
    <section className="about" id="gioi-thieu" aria-labelledby="about-title">
      <div className="about__grid shell">
        <figure className="about__portrait reveal">
          <img
            src={contact.portrait}
            alt={`Ảnh chân dung ${contact.fullName}`}
            width={449}
            height={661}
            loading="lazy"
          />
        </figure>

        <div className="about__text">
          <SectionHead id="about-title" title="Giới thiệu bản thân" />
          <p className="about__body">{intro.body}</p>

          <dl className="about__facts">
            {facts.map((fact) => (
              <div key={fact.key}>
                <dt>{fact.key}</dt>
                <dd>{fact.value}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}
