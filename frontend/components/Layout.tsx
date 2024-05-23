/*
 * @Author: Jacket-mzl
 * @Date: 2024-05-20 18:21:32
 * @LastEditors: Jacket-mzl
 * @LastEditTime: 2024-05-23 21:09:41
 * @Description:
 */
"use client";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { PropsWithChildren, useEffect } from "react";
import { useDispatch } from "react-redux";
import { setMediaQuery } from "@/redux/modules/mediaquery";

export function Layout(props: PropsWithChildren) {
  // 判断当前是电脑还是手机
  const dispatch = useDispatch();
  const setMedia = () => {
    let media;
    if (window.innerWidth > 769) {
      media = true; // 是电脑
    } else {
      media = false; // 不是电脑
    }
    dispatch(setMediaQuery(media));
  };
  useEffect(() => {
    setMedia();
    window.addEventListener("resize", setMedia);
  }, []);
  return (
    <div className="flex flex-col h-full">
      <Header></Header>
      <div className="flex-1">{props.children}</div>
      {/* <Footer></Footer> */}
    </div>
  );
}
