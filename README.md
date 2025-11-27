# AI Skincare Assistant

Ứng dụng frontend React cho AI Skincare Assistant - Trợ lý chăm sóc da thông minh với giao diện đẹp, responsive và accessible.

## Tính năng

- ✨ Hero section với CTA button
- 💡 4 card giải thích lợi ích của ứng dụng
- 🎯 Features highlight với chatbot AI và skin profile
- 📋 Modal cập nhật hồ sơ da (skin profile)
- 🧪 Quiz xác định loại da (6-8 câu hỏi)
- ⚠️ Disclaimer banner
- 📱 Responsive design (desktop & mobile)
- ♿ Accessibility features (ARIA labels, roles)

## Công nghệ sử dụng

- React 18 (functional components + hooks)
- Tailwind CSS (styling)
- Vite (build tool)

## Cài đặt và chạy

### Yêu cầu

- Node.js 16+
- npm hoặc yarn

### Các bước cài đặt

1. **Cài đặt dependencies:**

   ```bash
   npm install
   ```

2. **Chạy ứng dụng ở chế độ development:**

   ```bash
   npm run dev
   ```

3. **Build cho production:**

   ```bash
   npm run build
   ```

4. **Preview production build:**
   ```bash
   npm run preview
   ```

Sau khi chạy `npm run dev`, mở trình duyệt tại địa chỉ hiển thị trong terminal (thường là `http://localhost:5173`).

## Cấu trúc dự án

```
├── index.html              # Entry HTML file
├── package.json            # Dependencies và scripts
├── vite.config.js         # Vite configuration
├── tailwind.config.js     # Tailwind CSS configuration
├── postcss.config.js      # PostCSS configuration
├── README.md              # File hướng dẫn này
└── src/
    ├── index.jsx          # React entry point
    ├── index.css          # Tailwind CSS imports
    ├── App.jsx            # Main App component
    └── components/
        ├── Hero.jsx                    # Hero section
        ├── WhySection.jsx              # 4 benefit cards
        ├── FeatureHighlight.jsx        # Chatbot features card
        ├── SkinProfileCard.jsx         # Skin profile với modals
        ├── Disclaimer.jsx              # Disclaimer banner
        └── Footer.jsx                  # Footer với links
```

## Component Overview

### Hero.jsx

Hero section với title, illustration SVG, subtitle và CTA button. Button scroll smooth đến phần features.

### WhySection.jsx

Section hiển thị 4 card giải thích lợi ích:

- Chatbot AI cung cấp kiến thức da liễu
- AI phân tích da mụn
- Xây dựng routine chăm sóc da khoa học
- Theo dõi tiến triển da

Layout: 4 cột trên desktop, 1 cột trên mobile, 2x2 trên tablet.

### FeatureHighlight.jsx

Card lớn bên trái hiển thị các tính năng chatbot AI:

- Tư vấn da liễu
- Phân tích da mụn qua hình ảnh (AI Vision)
- Ingredient Checker
- Kiểm tra & tối ưu routine

### SkinProfileCard.jsx

Card lớn bên phải với:

- 2 buttons: "Cập nhật hồ sơ da" và "Làm quiz xác định loại da"
- Modal cập nhật profile: dropdown chọn loại da
- Modal quiz: 6-8 câu hỏi yes/no và multiple choice
- Hiển thị badge hồ sơ hiện tại (nếu đã lưu)

Tất cả dữ liệu lưu trong local state (không có backend).

### Disclaimer.jsx

Banner màu xám nhạt hiển thị thông báo quan trọng về tính tham khảo của AI.

### Footer.jsx

Footer nhẹ với links (About, Điều khoản, Privacy, FAQ, Liên hệ) và social media icons.

## Design Notes

- **Color Palette**: Pastel colors (mint green, pink), white background
- **Spacing**: Padding thoáng, card shadow nhẹ
- **Border Radius**: 12px-16px cho cards
- **Fonts**: Inter (sans-serif), Quicksand (display)
- **Responsive**: Mobile-first approach với Tailwind breakpoints

## Accessibility

- ARIA labels và roles cho các interactive elements
- Semantic HTML (nav, section, article, footer)
- Keyboard navigation support (Escape để đóng modal)
- Alt text và descriptive labels
- Proper heading hierarchy

## Ghi chú

- Không có backend/API calls - tất cả interactions dùng local state
- Không có authentication hoặc routing
- SVG icons được embed inline
- Mock data/logic cho quiz results

## License

MIT
