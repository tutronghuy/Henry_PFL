import { contact, experiences, achievementFigures } from '@/data/profile';
import { Watercolor } from '@/components/ui/Watercolor';
import './Hero.css';

/** Ba chỉ số phụ đặt dưới tiêu đề — lấy từ phần Thành tựu trong hồ sơ gốc. */
const headlineFigures = achievementFigures.filter((figure) =>
  ['doanh thu sau 3 tháng', 'mặt hàng đã bán', 'lượt xem video cao nhất'].includes(figure.label),
);

export function Hero() {
  return (
    <section className="hero" id="top">
      <Watercolor tone="blush" className="hero__wash" />

      <div className="hero__inner shell">
        <p className="hero__eyebrow">
          {contact.fullName} — {contact.role}
        </p>

        {/* Dẫn bằng kết quả, không dẫn bằng chức danh */}
        <h1 className="hero__title">
          <span className="hero__figure">3.000 đơn hàng</span>
          <span className="hero__rest">từ một kênh review xây từ con số 0</span>
        </h1>

        <div className="hero__foot">
          <p className="hero__pitch">
            Một năm làm marketing đa kênh: viết content, dựng video, vận hành livestream và quản trị
            website cho doanh nghiệp.
          </p>

          <div className="hero__actions">
            <a className="btn btn--solid" href="#thanh-tuu">
              Xem thành tựu
            </a>
            <a className="btn btn--line" href={contact.resumeFile} download>
              Tải portfolio PDF
            </a>
          </div>
        </div>

        <dl className="hero__figures">
          {headlineFigures.map((figure) => (
            <div key={figure.label}>
              <dt>{figure.label}</dt>
              <dd>
                {figure.value}
                {figure.unit ? <span>{figure.unit}</span> : null}
              </dd>
            </div>
          ))}
        </dl>
      </div>

      <div className="orgs">
        <div className="orgs__inner shell">
          <p className="orgs__label">Đã làm việc tại</p>
          <ul className="orgs__list">
            {experiences.map((item) => (
              <li key={item.id}>{item.org}</li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
