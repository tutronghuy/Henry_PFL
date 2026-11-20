# Portfolio — Từ Trọng Huy (Marketing Executive)

Website portfolio một trang, nội dung lấy nguyên từ `Portfolio_TuTrongHuy_MarketingExecutive.pdf`.

## Công nghệ
- **Vite 5 + React 18 + TypeScript** (strict)
- CSS thuần, có design tokens (`src/styles/tokens.css`); mỗi component một file CSS riêng
- Giao diện marketing kiểu ấn phẩm: nền giấy ngà, xanh cobalt, vệt màu nước hồng/san hô (theo bộ nhận diện của bản PDF)
- Font: Archivo (tiêu đề), Be Vietnam Pro (nội dung) — đều hỗ trợ tiếng Việt

## Chạy dự án
```bash
npm install
npm run dev       # môi trường phát triển: http://localhost:5173
npm run build     # kiểm tra kiểu + build ra dist/
npm run preview   # xem bản build: http://localhost:4173
```

## Cấu trúc thư mục
```
portfolio/
├── index.html                 # SEO meta, Open Graph, font
├── package.json
├── vite.config.ts             # alias @ -> src
├── tsconfig.json / tsconfig.node.json
├── public/
│   ├── favicon.svg
│   └── assets/                # ảnh trích từ PDF + file PDF gốc để tải về
└── src/
    ├── main.tsx               # điểm khởi chạy
    ├── App.tsx                # ghép các section
    ├── data/profile.ts        # TOÀN BỘ nội dung (chỉ sửa ở đây)
    ├── types/index.ts         # kiểu dữ liệu
    ├── hooks/
    │   ├── useScrollSpy.ts    # đánh dấu mục đang xem trên menu
    │   └── useReveal.ts       # hiệu ứng xuất hiện khi cuộn
    ├── styles/
    │   ├── tokens.css         # màu, chữ, khoảng cách
    │   └── global.css         # reset + tiện ích chung
    └── components/
        ├── layout/            # Header, Footer
        ├── sections/          # Hero, About, Goals, Education, Skills,
        │                      # Experience, Achievements, Contact
        └── ui/                # Watercolor, SectionHead, DeviceFrame (khung điện thoại/laptop)
```

## Cập nhật nội dung
Sửa `src/data/profile.ts`. Thay ảnh trong `public/assets/` (giữ nguyên tên file hoặc đổi đường dẫn trong `profile.ts`).

## Triển khai
Thư mục `dist/` là site tĩnh, deploy được lên Vercel, Netlify, GitHub Pages hoặc bất kỳ hosting tĩnh nào.
