/*
 * @Author: Jacket-mzl
 * @Date: 2024-05-20 09:08:00
 * @LastEditors: Jacket-mzl
 * @LastEditTime: 2024-05-20 14:31:52
 * @Description:
 */
import logo from "@/assets/images/c2n_logo.png";
import Image from "next/image";
export function Header() {
  return (
    <div className="navbar flex justify-between p-4 pt-2">
      <Image src={logo.src} alt="" width={100} height={50} />
      <w3m-button label="Connect" balance="hide" size="sm" />
    </div>
  );
}
