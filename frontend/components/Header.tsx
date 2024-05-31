/*
 * @Author: Jacket-mzl
 * @Date: 2024-05-20 09:08:00
 * @LastEditors: Jacket-mzl
 * @LastEditTime: 2024-05-25 14:16:32
 * @Description:
 */
"use client";
import logo from "@/assets/images/logo4.png";
import Image from "next/image";
import { useEffect, useState } from "react";
import { RootState, useSelector } from "@/redux";
import { usePathname } from "next/navigation";
import Link from "next/link";

export function Header() {
  const isDeskTop = useSelector((state: RootState) => state.media.isDeskTop);
  const pathName = usePathname();
  const deskTopStyle = {
    backgroundColor: "rgba(255,255,255,0.1)",
    margin: "20px auto",
    height: "64px",
    width: "100%",
  };
  const phoneStyle = {
    margin: "10px 0px",
    justifyContent: "space-between",
    width: "auto",
    height: "64px",
  };
  // 为什么这里要设置一个isDeskTopFlag 然后又放在useEffect里面重新赋值
  // 因为如果直接判断isDeskTop的话会报错：Prop `style` did not match 服务端和客户端的值不一样导致报错
  // 只能间接让它页面渲染完成之后赋值给isDeskTopFlag 这样就不会因为重复渲染导致出现这个问题
  let [isDeskTopFlag, setIsDeskTopFlag] = useState(true);
  useEffect(() => {
    setIsDeskTopFlag(isDeskTop);
  }, [isDeskTop]);
  return (
    <div
      className="navbar flex justify-between items-center rounded-full"
      style={isDeskTopFlag ? deskTopStyle : phoneStyle}
    >
      <Image src={logo.src} alt="" width={70} height={70} />
      <div className="flex items-center">
        <Link
          href="/"
          className="mr-6 cursor-pointer select-none font-bold text-stone-200"
          style={
            pathName == "/"
              ? {
                  color: "var(--deepColor)",
                  borderBottom: "4px solid var(--deepColor)",
                }
              : {}
          }
        >
          Home
        </Link>
        <Link
          href="/about"
          className="mr-6 cursor-pointer select-none font-bold text-stone-200"
          style={
            pathName == "/about"
              ? {
                  color: "var(--deepColor)",
                  borderBottom: "4px solid var(--deepColor)",
                }
              : {}
          }
        >
          About
        </Link>
        <Link
          href="/records"
          className="mr-6 cursor-pointer select-none font-bold text-stone-200"
          style={
            pathName == "/records"
              ? {
                  color: "var(--deepColor)",
                  borderBottom: "4px solid var(--deepColor)",
                }
              : {}
          }
        >
          Records
        </Link>
        <w3m-button label="Connect" balance="hide" size="sm" />
      </div>
    </div>
  );
}
