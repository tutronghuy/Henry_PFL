import { goals } from '@/data/profile';
import { SectionHead } from '@/components/ui/SectionHead';
import './Goals.css';

export function Goals() {
  return (
    <section className="goals" id="muc-tieu" aria-labelledby="goals-title">
      <div className="shell">
        <SectionHead id="goals-title" title="Mục tiêu" />

        <ol className="goals__road">
          {goals.map((goal) => (
            <li className="goals__stop reveal" key={goal.horizon}>
              <p className="goals__period">{goal.period}</p>
              <h3 className="goals__horizon">{goal.horizon}</h3>
              <p className="goals__target">{goal.target}</p>
              <p className="goals__body">{goal.body}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
