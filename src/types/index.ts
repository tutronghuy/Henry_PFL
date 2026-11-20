export type Device = 'phone' | 'laptop';

/** Ảnh chụp màn hình, kèm loại thiết bị đã chụp để hiển thị đúng khung. */
export interface MediaShot {
  src: string;
  alt: string;
  device: Device;
}

export interface ContactInfo {
  fullName: string;
  role: string;
  email: string;
  phone: string;
  phoneHref: string;
  resumeFile: string;
  portrait: string;
}

export interface GoalItem {
  horizon: string;
  period: string;
  target: string;
  body: string;
}

export interface SkillGroup {
  id: string;
  title: string;
  items: { name: string; detail?: string }[];
}

export interface ExperienceItem {
  id: string;
  org: string;
  role?: string;
  note?: string;
  period: string;
  link?: { label: string; href: string };
  bullets: string[];
  media?: MediaShot[];
}

export interface Education {
  school: string;
  city: string;
  year: string;
  gpa: string;
  body: string;
  photos: { src: string; alt: string }[];
}

export interface AchievementFigure {
  value: string;
  unit?: string;
  label: string;
}

export interface NavItem {
  id: string;
  label: string;
}
