/*
 * @Author: Jacket-mzl
 * @Date: 2024-05-20 18:21:32
 * @LastEditors: Jacket-mzl
 * @LastEditTime: 2024-05-20 21:43:46
 * @Description:
 */
"use client";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { PropsWithChildren } from "react";
import { useEffect } from "react";
import { store } from "@/redux";
import { setMediaQuery } from "@/redux/modules/mediaquery";
// import { useDispatch } from "@/redux";

// 判断当前是电脑还是手机
// const dispatch = useDispatch();
function setMedia() {
  let media;
  if (window.innerWidth > 769) {
    media = true; // 是电脑
  } else {
    media = false; // 不是电脑
  }
  store.dispatch(setMediaQuery(media));
  console.log("当前media仓库的信息", store.getState().media);
}

export function Layout(props: PropsWithChildren) {
  useEffect(() => {
    setMedia();
    window.addEventListener("resize", setMedia);
  }, []);
  return (
    <>
      <Header></Header>
      <div>{props.children}</div>
      <Footer></Footer>
    </>
  );
}
