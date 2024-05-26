/*
 * @Author: Jacket-mzl
 * @Date: 2024-05-24 19:16:55
 * @LastEditors: Jacket-mzl
 * @LastEditTime: 2024-05-26 20:00:00
 * @Description:
 */

interface RecordItemType {
  hash: string;
  age: string;
  from: string;
  to: string;
  value: string;
}

type PropsType = {
  tableValue: RecordItemType;
  ifHeader?: boolean;
};

import { Row, Col } from "antd";
import "@/assets/css/recordItem.css";
export default function RecordItem(props: PropsType) {
  const { tableValue, ifHeader } = props;

  const colClassName = `span-row text-center ${
    ifHeader ? "headerColStyle" : "colStyle"
  }`;

  return (
    <div
      className={`rounded-2xl w-full mb-4 px-2 py-3 ${
        ifHeader ? "headerRowStyle" : "recordItemStyle"
      }`}
    >
      <Row gutter={24}>
        <Col className={colClassName} span={6}>
          {tableValue.hash}
        </Col>
        <Col className={colClassName} span={3}>
          {tableValue.age}
        </Col>
        <Col className={colClassName} span={6}>
          {tableValue.from}
        </Col>
        <Col className={colClassName} span={6}>
          {tableValue.to}
        </Col>
        <Col className={colClassName} span={3}>
          {tableValue.value} {ifHeader ? "" : "ETH"}
        </Col>
      </Row>
    </div>
  );
}
