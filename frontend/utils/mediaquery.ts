/*
 * @Author: Jacket-mzl
 * @Date: 2024-05-20 17:19:37
 * @LastEditors: Jacket-mzl
 * @LastEditTime: 2024-05-20 17:42:28
 * @Description:
 */

import { store } from "@/redux";
import { setMediaQuery } from "@/redux/modules/mediaquery";
import { useEffect } from "react";

// export const judgeMediaQuery = () => {
//   function setMedia() {
//     let media;
//     if (window.innerWidth > 769) {
//       media = true; // 是电脑
//     } else {
//       media = false; // 不是电脑
//     }
//     store.dispatch(setMediaQuery(media));
//     console.log("当前仓库的信息", store);
//     console.log("是不是电脑现在", store.getState().mediaQuery.isDeskTop);
//   }
//   useEffect(() => {
//     setMedia();
//     window.addEventListener("resize", setMedia);
//   }, []);
// };
