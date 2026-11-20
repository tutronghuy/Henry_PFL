import { achievement, achievementFigures } from '@/data/profile';
import { DeviceFrame } from '@/components/ui/DeviceFrame';
import { SectionHead } from '@/components/ui/SectionHead';
import './Achievements.css';

export function Achievements() {
  return (
    <section className="ach" id="thanh-tuu" aria-labelledby="ach-title">
      <div className="shell">
        <SectionHead id="ach-title" title="Thành tựu" note="Case study chính — kênh DoubleH rì viu" />

        <div className="ach__lead">
          <h3 className="ach__headline">{achievement.heading}</h3>
          <p className="ach__sub">{achievement.subheading}</p>
        </div>

        <ol className="ach__steps">
          {achievement.steps.map((step, index) => (
            <li className="ach__step reveal" key={step.title}>
              <span className="ach__step-no" aria-hidden="true">
                {index + 1}
              </span>
              <h4 className="ach__step-title">{step.title}</h4>
              <p className="ach__step-body">{step.body}</p>
            </li>
          ))}
        </ol>
      </div>

      <div className="ach__band">
        <dl className="ach__kpis shell">
          {achievementFigures.map((figure) => (
            <div className="ach__kpi" key={figure.label}>
              <dt className="ach__kpi-label">{figure.label}</dt>
              <dd className="ach__kpi-value">
                {figure.value}
                {figure.unit ? <span className="ach__kpi-unit">{figure.unit}</span> : null}
              </dd>
            </div>
          ))}
        </dl>
      </div>

      <div className="ach__proof shell">
        <p className="ach__proof-note">Ảnh chụp màn hình số liệu bán hàng của kênh</p>
        <div className="ach__proof-row">
          {achievement.media.map((media) => (
            <DeviceFrame key={media.src} {...media} />
          ))}
        </div>
      </div>
    </section>
  );
}
