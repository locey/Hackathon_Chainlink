/*
 * @Author: Jacket-mzl
 * @Date: 2024-05-17 17:25:14
 * @LastEditors: Jacket-mzl
 * @LastEditTime: 2024-05-22 17:05:04
 * @Description:
 */
export function TruncateMiddle(text: string, length: number = 5) {
  if (text?.length > length * 2 + 1) {
    return `${text.substring(0, length)}...${text.substring(
      text.length - length,
      text.length
    )}`;
  }

  return text;
}
