import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "셀러가드 | 판매자 정책 변화 레이더",
  description:
    "스마트스토어 정책·제재·운영 변경을 내 스토어에 미치는 영향과 실행할 일로 바꿔드립니다.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="ko">
      <body>{children}</body>
    </html>
  );
}
