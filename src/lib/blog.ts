export interface BlogPost {
  slug: string;
  title: string;
  date: string;
  summary: string;
  author: string;
  tags: string[];
  content: string;
}

const staticPosts: BlogPost[] = [
  {
    slug: 'cloud-native-architecture-zero-dollar',
    title: 'Thiết Kế Hạ Tầng Cloud-Native Vận Hành $0 Chi Phí Với 19 Cloud Services',
    date: '2026-07-25',
    summary: 'Hướng dẫn chi tiết kiến trúc kết hợp Cloudflare Edge, GCP Cloud Run, Supabase và Upstash Redis giúp vận hành hệ thống chịu tải cao mà không mất chi phí cố định.',
    author: 'Giang Thanh Tùng',
    tags: ['Cloud-Native', 'GCP', 'Cloudflare', 'Serverless', 'Architecture'],
    content: `
# Thiết Kế Hạ Tầng Cloud-Native Vận Hành $0 Chi Phí

Trong kỷ nguyên Serverless và Edge Computing, việc tối ưu hóa chi phí vận hành (Operational Cost) là một trong những mục tiêu hàng đầu của nhà thiết kế hệ thống.

## 1. Môi Trường Edge: Cloudflare Pages & Workers

Bằng cách triển khai Frontend Next.js lên **Cloudflare Pages**, chúng ta đạt được 2 lợi ích lớn:
- **Global CDN Latency**: Thời gian phản hồi TTFB < 45ms toàn cầu.
- **Chi phí $0**: Cloudflare cung cấp băng thông không giới hạn ở gói Free Tier.

## 2. Serverless Compute: GCP Cloud Run

Backend FastAPI / Docker được đóng gói và đẩy lên **GCP Cloud Run**:
- Tự động Scale-to-zero khi không có traffic (0 instances = $0).
- Khi có truy vấn ngẫu nhiên, tự động mở rộng từ 0 lên 1,000+ instances trong vài giây.

## 3. Database & Caching Layer

- **Database**: Supabase PostgreSQL miễn phí 500MB storage.
- **Cache**: Upstash Redis (10,000 requests/ngày free) phục vụ rate-limiting và caching dữ liệu truy vấn cao.

## Kết luận

Kiến trúc Cloud-Native không chỉ giúp giảm chi phí về 0$ khi chưa có khách hàng, mà còn sẵn sàng đáp ứng lượng người dùng tăng đột biến mà không cần nâng cấp phần cứng thủ công.
`,
  },
  {
    slug: 'microservices-drm-protection',
    title: 'Bảo Vệ Bản Quyền Video Trực Tuyến Với DRM & FaceID AI Computer Vision',
    date: '2026-07-20',
    summary: 'Phân tích giải pháp kết hợp .NET Core Microservices, OpenCV Watermarking động và mô hình FaceID chống gian lận chia sẻ tài khoản.',
    author: 'Giang Thanh Tùng',
    tags: ['DRM', '.NET Core', 'Python AI', 'OpenCV', 'Microservices'],
    content: `
# Bảo Vệ Bản Quyền Video Trực Tuyến Với DRM & FaceID AI

Vi phạm bản quyền video bài giảng trực tuyến là bài toán nan giải trong ngành EdTech.

## 1. Kiến Trúc Phân Lớp Microservices

Hệ thống được chia làm 3 microservices chính:
1. **Core Business Microservice (.NET Core)**: Quản lý khóa học, thanh toán và cấp JWT Token.
2. **Media Processing Microservice (Python & OpenCV)**: Chèn Watermark thông tin người dùng trực tiếp vào từng frame video.
3. **FaceID Authentication Microservice**: Chạy mô hình học máy nhẹ để quét khuôn mặt người học qua webcam định kỳ.

## 2. Kết Quả Thực Tế

- Ngăn chặn 99.9% việc quay lén màn hình do có chứa vết mờ danh tính (watermark).
- Nhận diện chính xác 98.5% các trường hợp học hộ hoặc chia sẻ tài khoản cho người khác.
`,
  },
];

export function getAllPosts(): BlogPost[] {
  return staticPosts;
}

export function getPostBySlug(slug: string): BlogPost | undefined {
  return staticPosts.find((p) => p.slug === slug);
}
