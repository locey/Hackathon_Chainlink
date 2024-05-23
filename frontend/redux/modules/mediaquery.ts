/*
 * @Author: Jacket-mzl
 * @Date: 2024-05-20 16:22:58
 * @LastEditors: Jacket-mzl
 * @LastEditTime: 2024-05-22 21:30:19
 * @Description:
 */
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type MediaState = { isDeskTop: boolean };

const mediaState = {
  isDeskTop: true, // true是电脑&平板设备  false是手机
};

const mediaSlice = createSlice({
  name: "mediaquery",
  initialState: mediaState,
  reducers: {
    setMediaQuery(state: MediaState, { payload }: PayloadAction<boolean>) {
      console.log("我执行setMedia", payload);
      state.isDeskTop = payload;
    },
  },
});

export const { setMediaQuery } = mediaSlice.actions;
export default mediaSlice.reducer;
