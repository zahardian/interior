"use client";
import { usePathname } from "next/navigation";
import Header from "./header";

export default function DisableNavbar() {
  const pathname = usePathname();
  const disableNavbar = ["/login", "/register"];
  return <>{!disableNavbar.includes(pathname) && <Header />}</>;
}
