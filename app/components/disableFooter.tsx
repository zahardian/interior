"use client";
import { usePathname } from "next/navigation";
import Footer from "./footer";

export default function DisableFooter() {
  const pathname = usePathname();
  const disableNavbar = ["/login", "/register"];
  return <>{!disableNavbar.includes(pathname) && <Footer />}</>;
}
