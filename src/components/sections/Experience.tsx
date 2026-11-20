import { experiences } from '@/data/profile';
import { DeviceFrame } from '@/components/ui/DeviceFrame';
import { SectionHead } from '@/components/ui/SectionHead';
import './Experience.css';

export function Experience() {
  return (
    <section className="exp" id="kinh-nghiem" aria-labelledby="exp-title">
      <div className="shell">
        <SectionHead
          id="exp-title"
          title="Kinh nghiệm làm việc"
          note={`${experiences.length} vị trí, mới nhất ở trên`}
        />

        <ol className="exp__table">
          {experiences.map((item) => (
            <li className="exp__row reveal" key={item.id}>
              <p className="exp__period">
                <time>{item.period}</time>
              </p>

              <div className="exp__who">
                <h3 className="exp__org">{item.org}</h3>
                {item.role ? <p className="exp__role">{item.role}</p> : null}
                {item.note ? <p className="exp__note">{item.note}</p> : null}
                {item.link ? (
                  <p className="exp__link">
                    <a href={item.link.href} target="_blank" rel="noreferrer noopener">
                      {item.link.label}
                    </a>
                  </p>
                ) : null}
              </div>

              <ul className="exp__tasks">
                {item.bullets.map((bullet) => (
                  <li key={bullet}>{bullet}</li>
                ))}
              </ul>

              {item.media ? (
                <div className="exp__media">
                  {item.media.map((media) => (
                    <DeviceFrame key={media.src} {...media} />
                  ))}
                </div>
              ) : null}
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
