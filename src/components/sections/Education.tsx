import { education } from '@/data/profile';
import { SectionHead } from '@/components/ui/SectionHead';
import { Watercolor } from '@/components/ui/Watercolor';
import './Education.css';

export function Education() {
  return (
    <section className="edu" id="hoc-van" aria-labelledby="edu-title">
      <Watercolor tone="coral" className="edu__wash" />

      <div className="edu__inner shell">
        <div className="edu__text">
          <SectionHead id="edu-title" title="Học vấn" />
          <p className="edu__school">{education.school}</p>

          <dl className="edu__stats">
            <div>
              <dt>Năm học</dt>
              <dd>{education.year}</dd>
            </div>
            <div>
              <dt>GPA</dt>
              <dd className="edu__gpa">{education.gpa}</dd>
            </div>
          </dl>

          <p className="edu__body">{education.body}</p>
        </div>

        <div className="edu__photos reveal">
          {education.photos.map((photo, index) => (
            <img
              key={photo.src}
              className={`edu__photo edu__photo--${index + 1}`}
              src={photo.src}
              alt={photo.alt}
              loading="lazy"
            />
          ))}
        </div>
      </div>
    </section>
  );
}
