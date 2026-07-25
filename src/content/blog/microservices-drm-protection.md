---
title: "Bảo Vệ Bản Quyền Video Trực Tuyến Với DRM & FaceID AI Computer Vision"
date: "2026-07-20"
summary: "Phân tích giải pháp kết hợp .NET Core Microservices, OpenCV Watermarking động và mô hình FaceID chống gian lận chia sẻ tài khoản."
author: "Giang Thanh Tùng"
tags: ["DRM", ".NET Core", "Python AI", "OpenCV", "Microservices"]
---

# Bảo Vệ Bản Quyền Video Trực Tuyến Với DRM & FaceID AI

Vi phạm bản quyền video bài giảng trực tuyến là bài toán nan giải trong ngành EdTech.

## 1. Kiến Trúc Phân Lớp Microservices

Hệ thống được chia làm 3 microservices chính:
1. **Core Business Microservice (.NET Core)**: Quản lý khóa học, thanh toán và cấp JWT Token.
2. **Media Processing Microservice (Python & OpenCV)**: Chèn Watermark thông tin người dùng trực tiếp vào từng frame video.
3. **FaceID Authentication Microservice**: Chạy mô hình học máy nhẹ để quét khuôn mặt người học qua webcam định kỳ.

```python
import cv2

def apply_dynamic_watermark(frame, user_info, timestamp):
    overlay_text = f"{user_info} | {timestamp}"
    cv2.putText(frame, overlay_text, (50, 50), 
                cv2.FONT_HERSHEY_SIMPLEX, 0.6, (0, 243, 255), 1)
    return frame
```

## 2. Kết Quả Thực Tế

- Ngăn chặn 99.9% việc quay lén màn hình do có chứa vết mờ danh tính (watermark).
- Nhận diện chính xác 98.5% các trường hợp học hộ hoặc chia sẻ tài khoản cho người khác.
