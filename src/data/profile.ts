/**
 * Toàn bộ nội dung trong file này được lấy nguyên văn từ
 * Portfolio_TuTrongHuy_MarketingExecutive.pdf (11 trang).
 * Không thêm thông tin ngoài hồ sơ gốc.
 */

/** Trả về đường dẫn asset có prefix base URL đúng cho cả local lẫn GitHub Pages */
const asset = (path: string) => `${import.meta.env.BASE_URL}${path.replace(/^\//, '')}`;

import type {
  AchievementFigure,
  ContactInfo,
  Education,
  ExperienceItem,
  GoalItem,
  MediaShot,
  NavItem,
  SkillGroup,
} from '@/types';

export const contact: ContactInfo = {
  fullName: 'Từ Trọng Huy',
  role: 'Marketing Executive',
  email: 'tutronghuy.work@gmail.com',
  phone: '+84 70 739 8857',
  phoneHref: '+84707398857',
  resumeFile: asset('/assets/Portfolio_TuTrongHuy_MarketingExecutive.pdf'),
  portrait: asset('/assets/portrait.jpg'),
};

export const navItems: NavItem[] = [
  { id: 'gioi-thieu', label: 'Giới thiệu' },
  { id: 'thanh-tuu', label: 'Thành tựu' },
  { id: 'kinh-nghiem', label: 'Kinh nghiệm' },
  { id: 'ky-nang', label: 'Kỹ năng' },
  { id: 'hoc-van', label: 'Học vấn' },
  { id: 'muc-tieu', label: 'Mục tiêu' },
  { id: 'lien-he', label: 'Liên hệ' },
];

export const intro = {
  heading: 'Giới thiệu bản thân',
  body: 'Tôi là Huy - một nhân viên Marketing với 1 năm kinh nghiệm trong lĩnh vực Marketing đa kênh. Tôi đặc biệt hứng thú với việc xây dựng thương hiệu và tạo ra những chiến dịch marketing vừa sáng tạo vừa mang lại hiệu quả thực tế cho doanh nghiệp. Trong công việc, tôi luôn chú trọng vào tính khả thi và giá trị mang lại, thay vì chỉ dừng ở ý tưởng.',
};

export const goals: GoalItem[] = [
  {
    horizon: 'Ngắn hạn',
    period: '1–2 năm',
    target: 'Marketing Executive',
    body: 'Tôi muốn tiếp tục học hỏi và rèn luyện kỹ năng để làm thật tốt vai trò Marketing Executive, góp phần giúp thương hiệu được nhiều người biết đến hơn và mang lại kết quả rõ ràng cho công ty.',
  },
  {
    horizon: 'Dài hạn',
    period: '3–5 năm',
    target: 'Marketing Manager / Team Leader',
    body: 'Tôi hướng tới vị trí Marketing Manager/Team Leader, nơi có thể dẫn dắt một đội ngũ marketing cùng nhau xây dựng và triển khai những chiến lược thương hiệu quy mô lớn, tạo ra giá trị bền vững cho doanh nghiệp.',
  },
];

export const education: Education = {
  school: 'Trường Đại học Nông Lâm TP. Hồ Chí Minh',
  city: 'TP. Hồ Chí Minh',
  year: 'Sinh viên năm 4',
  gpa: '3.4/4.0',
  body: 'Tôi là sinh viên năm 4 tại Trường Đại học Nông Lâm TP. Hồ Chí Minh với GPA 3.4/4.0. Trong quá trình học, tôi luôn duy trì thành tích tốt, tích cực tham gia các hoạt động và dự án để rèn luyện kỹ năng thực tiễn. Mục tiêu của tôi là trở thành một Marketing Specialist, có thể đóng góp vào hoạt động xây dựng thương hiệu và triển khai các chiến dịch mang lại giá trị thực tế cho doanh nghiệp.',
  photos: [
    { src: asset('/assets/nong-lam-1.jpg'), alt: 'Toà nhà Trường Đại học Nông Lâm TP. Hồ Chí Minh' },
    { src: asset('/assets/nong-lam-2.jpg'), alt: 'Giảng đường Phượng Vỹ, Trường Đại học Nông Lâm TP. Hồ Chí Minh' },
  ],
};

export const skillGroups: SkillGroup[] = [
  {
    id: 'thiet-ke',
    title: 'Thiết kế & Sáng tạo',
    items: [
      { name: 'Canva', detail: 'Thiết kế graphics, poster, social media content' },
      { name: 'CapCut', detail: 'Chỉnh sửa video marketing, reels, TikTok' },
      { name: 'Photography & Videography', detail: 'Chụp ảnh, quay video sản phẩm' },
    ],
  },
  {
    id: 'ai-digital',
    title: 'Công cụ AI & Digital Marketing',
    items: [
      { name: 'ChatGPT, Gemini', detail: 'Tạo content, brainstorm ý tưởng' },
      { name: 'Microsoft Office', detail: 'Word, Excel, PowerPoint thành thạo' },
    ],
  },
  {
    id: 'marketing',
    title: 'Marketing Skills',
    items: [
      { name: 'Content Marketing & Storytelling' },
      { name: 'Social Media Marketing' },
      { name: 'E-commerce Management' },
    ],
  },
];

export const experiences: ExperienceItem[] = [
  {
    id: 'ngoi-sao-xanh',
    org: 'Công ty TNHH Giao Nhận Quốc Tế Ngôi Sao Xanh',
    period: '04/2026 – 05/2026',
    bullets: ['Tham gia thiết kế giao diện website WordPress.'],
  },
  {
    id: 'hoang-nam-home',
    org: 'Công ty TNHH Hoàng Nam Home',
    period: '07/2024 – 02/2025',
    bullets: [
      'Khởi tạo và quản lý Zalo OA',
      'Đăng và tối ưu sản phẩm cho Website',
      'Sản xuất content và phân phối trên website',
      'Quản trị website và fanpage',
    ],
  },
  {
    id: 'kim-long-phat',
    org: 'Công ty CP Tập đoàn Kim Long Phát',
    period: '07/2024 – 02/2025',
    link: { label: 'dienmayklp.vn', href: 'https://dienmayklp.vn/' },
    bullets: [
      'Tham gia hỗ trợ khôi phục website.',
      'Khôi phục bài viết, hình ảnh, link sản phẩm.',
    ],
  },
  {
    id: 'doubleh',
    org: 'DoubleH Rì Viu',
    role: 'Content Creator & Channel Builder',
    note: 'Founder of the DoubleH Rì Viu channel',
    period: '12/2022 – 01/2024',
    bullets: [
      'Xây dựng và phát triển kênh review từ 0, đạt 3.000 đơn hàng.',
      'Thiết kế và vận hành phòng livestream.',
      'Tạo content đa nền tảng, tăng engagement và conversion rate.',
    ],
    media: [
      {
        src: asset('/assets/tiktok-doubleh.jpg'),
      device: 'phone',
        alt: 'Trang hồ sơ TikTok DoubleH rì viu (@doubleh.r.viu): 789 follower, 28,4K lượt thích, video cao nhất 612K view',
      },
      {
        src: asset('/assets/tiktok-chipp.jpg'),
      device: 'phone',
        alt: 'Trang hồ sơ TikTok Chipp rìviu (@chipp.rviu5): 1.259 follower, 3.195 lượt thích',
      },
    ],
  },
];

export const achievement = {
  heading: 'Xây dựng kênh review thành công',
  subheading: 'Đạt 3.000 đơn hàng bán được',
  steps: [
    {
      title: 'Bối cảnh',
      body: 'Kênh DoubleH rì viu được thành lập vào tháng 12/2023. Xây dựng và phát triển kênh review từ 0.',
    },
    {
      title: 'Cách làm',
      body: 'Thiết kế và vận hành phòng livestream. Tạo content đa nền tảng, tăng engagement và conversion rate.',
    },
    {
      title: 'Kết quả sau 3 tháng',
      body: 'Đạt được doanh thu 85.000.000đ và 8.300.000đ hoa hồng với 486 mặt hàng. Kênh có lượt view cao nhất là 612k.',
    },
  ],
  media: <MediaShot[]>[
    {
      src: asset('/assets/affiliate-dashboard.jpg'),
      device: 'laptop',
      alt: 'Bảng dữ liệu liên kết: @doubleh.r.viu đạt doanh thu 85,99 triệu đồng, 8,34 triệu đồng hoa hồng, 486 mặt hàng',
    },
    {
      src: asset('/assets/tiktok-shop.jpg'),
      device: 'phone',
      alt: 'Màn hình TikTok Shop của tài khoản doubleh.r.viu với dữ liệu bán hàng trong ngày',
    },
  ],
};

export const achievementFigures: AchievementFigure[] = [
  { value: '3.000', label: 'đơn hàng bán được' },
  { value: '85', unit: 'triệu đồng', label: 'doanh thu sau 3 tháng' },
  { value: '8,3', unit: 'triệu đồng', label: 'hoa hồng sau 3 tháng' },
  { value: '486', label: 'mặt hàng đã bán' },
  { value: '612k', label: 'lượt xem video cao nhất' },
];
