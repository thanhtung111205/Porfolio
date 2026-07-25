---
title: "Thiết Kế Hạ Tầng Cloud-Native Vận Hành $0 Chi Phí Với 19 Cloud Services"
date: "2026-07-25"
summary: "Hướng dẫn chi tiết kiến trúc kết hợp Cloudflare Edge, GCP Cloud Run, Supabase và Upstash Redis giúp vận hành hệ thống chịu tải cao mà không mất chi phí cố định."
author: "Giang Thanh Tùng"
tags: ["Cloud-Native", "GCP", "Cloudflare", "Serverless", "Architecture"]
---

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

```typescript
// Ví dụ rate limiting với Upstash Redis tại Edge Worker
import { Redis } from '@upstash/redis';

const redis = new Redis({
  url: process.env.UPSTASH_REDIS_REST_URL,
  token: process.env.UPSTASH_REDIS_REST_TOKEN,
});

export async function checkRateLimit(ip: string) {
  const requests = await redis.incr(`rate:${ip}`);
  if (requests === 1) {
    await redis.expire(`rate:${ip}`, 60);
  }
  return requests <= 100;
}
```

## Kết luận

Kiến trúc Cloud-Native không chỉ giúp giảm chi phí về 0$ khi chưa có khách hàng, mà còn sẵn sàng đáp ứng lượng người dùng tăng đột biến mà không cần nâng cấp phần cứng thủ công.
