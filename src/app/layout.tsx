import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Giang Thanh Tùng | Full-Stack Developer & Cloud-Native Architect',
  description:
    'Portfolio cá nhân của Giang Thanh Tùng - Full-Stack Developer chuyên về Cloud-Native (19 Cloud Services), System Architecture, Microservices, DRM và Data Mining. Sinh viên Hệ thống Thông tin ĐH Thủy Lợi.',
  keywords: [
    'Giang Thanh Tùng',
    'Full-Stack Developer',
    'Cloud-Native',
    'System Architecture',
    'Next.js Portfolio',
    'FastAPI',
    '.NET Core',
    'Microservices',
    'Data Mining',
    'Đại học Thủy Lợi',
  ],
  authors: [{ name: 'Giang Thanh Tùng' }],
  icons: {
    icon: '/AVA1.jpg',
    shortcut: '/AVA1.jpg',
    apple: '/AVA1.jpg',
  },
  openGraph: {
    title: 'Giang Thanh Tùng | Full-Stack & Cloud-Native Architect',
    description:
      'Chuyên thiết kế hạ tầng Serverless 0$ vận hành, xây dựng Microservices chịu tải cao và ứng dụng Data Mining.',
    url: 'https://github.com/thanhtung111205',
    siteName: 'Giang Thanh Tùng Portfolio',
    images: [
      {
        url: '/AVA1.jpg',
        width: 800,
        height: 800,
        alt: 'Giang Thanh Tùng Profile',
      },
    ],
    locale: 'vi_VN',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="vi" className="dark scroll-smooth">
      <head>
        <link rel="icon" href="/AVA1.jpg" type="image/jpeg" />
      </head>
      <body className="bg-[#030712] text-slate-100 antialiased selection:bg-cyan-500 selection:text-slate-950">
        {children}
      </body>
    </html>
  );
}
