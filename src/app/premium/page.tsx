// /premium → 프리미엄 리디자인이 메인으로 승격되어 메인 페이지로 리다이렉트
import { redirect } from "next/navigation";

export default function PremiumRedirect() {
  redirect("/");
}
