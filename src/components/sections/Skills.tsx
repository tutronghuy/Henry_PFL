import { skillGroups } from '@/data/profile';
import { SectionHead } from '@/components/ui/SectionHead';
import './Skills.css';

export function Skills() {
  return (
    <section className="skills" id="ky-nang" aria-labelledby="skills-title">
      <div className="shell">
        <SectionHead id="skills-title" title="Kỹ năng chuyên môn" note="Thiết kế · Công cụ AI · Marketing" />

        <div className="skills__index">
          {skillGroups.map((group) => (
            <section className="skills__group reveal" key={group.id} aria-labelledby={`sk-${group.id}`}>
              <h3 className="skills__group-title" id={`sk-${group.id}`}>
                {group.title}
              </h3>

              <ul className="skills__list">
                {group.items.map((item) => (
                  <li key={item.name} className="skills__row">
                    <span className="skills__name">{item.name}</span>
                    {item.detail ? (
                      <>
                        <span className="skills__leader" aria-hidden="true" />
                        <span className="skills__detail">{item.detail}</span>
                      </>
                    ) : null}
                  </li>
                ))}
              </ul>
            </section>
          ))}
        </div>
      </div>
    </section>
  );
}
