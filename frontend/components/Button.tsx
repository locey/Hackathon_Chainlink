/*
 * @Author: Jacket-mzl
 * @Date: 2024-05-24 15:42:05
 * @LastEditors: Jacket-mzl
 * @LastEditTime: 2024-05-24 15:49:04
 * @Description:
 */
import "@/assets/css/button.css";
export default function Button(props: any) {
  return <div className="btn mx-2">{props.children}</div>;
}
