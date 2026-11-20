import './Watercolor.css';

type Tone = 'blush' | 'coral';

interface WatercolorProps {
  tone?: Tone;
  className?: string;
}

/**
 * Vệt màu nước trang trí, lấy lại chi tiết loang màu của bản portfolio in.
 * Thuần trang trí nên ẩn với trình đọc màn hình.
 */
export function Watercolor({ tone = 'blush', className }: WatercolorProps) {
  return (
    <svg
      className={['watercolor', `watercolor--${tone}`, className].filter(Boolean).join(' ')}
      viewBox="0 0 600 480"
      aria-hidden="true"
      focusable="false"
    >
      <path d="M119 196c-23-54 14-108 72-124 46-13 73 14 118 6 52-9 77-52 128-39 55 14 71 76 60 128-9 43-45 58-53 101-9 46 20 91-14 121-37 33-98 7-146-3-52-11-110-6-139-49-27-40 2-91-9-134-4-2-13-5-17-7Z" />
      <path
        className="watercolor__blot"
        d="M232 118c41-25 95-9 121 29 23 34 9 79 36 109 28 32 85 29 93 70 8 42-41 70-83 76-55 8-104-33-158-45-40-9-88 0-113-33-27-35-5-87 24-117 31-32 42-65 80-89Z"
      />
    </svg>
  );
}
