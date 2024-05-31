/*
 * @Author: Jacket-mzl
 * @Date: 2024-05-20 18:21:32
 * @LastEditors: Jacket-mzl
 * @LastEditTime: 2024-05-25 14:40:46
 * @Description:
 */
"use client";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { PropsWithChildren, useEffect } from "react";
import { useDispatch } from "react-redux";
import { setMediaQuery } from "@/redux/modules/mediaquery";
import { useSelector, RootState } from "@/redux";

export function Layout(props: PropsWithChildren) {
  // 判断当前是电脑还是手机
  const dispatch = useDispatch();
  const isDeskTop = useSelector((state: RootState) => state.media.isDeskTop);
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

  const deskTopHeadStyle = {
    width: "66.6%",
  };
  const phoneHeadStyle = {
    width: "100%",
  };
  const childrenDeskTopStyle = {
    width: "100%",
  };
  const childrenPhoneStyle = {
    width: "90%",
    margin: "0px auto",
  };

  return (
    <div
      className="flex flex-col h-full m-auto"
      style={isDeskTop ? deskTopHeadStyle : phoneHeadStyle}
    >
      <Header></Header>
      <div
        className="flex-1 "
        style={isDeskTop ? childrenDeskTopStyle : childrenPhoneStyle}
      >
        {props.children}
      </div>
      {/* <Footer></Footer> */}
    </div>
  );
}
