/*
 * @Author: Jacket-mzl
 * @Date: 2024-05-22 23:27:45
 * @LastEditors: Jacket-mzl
 * @LastEditTime: 2024-05-26 20:31:08
 * @Description:
 */
"use client";
import RecordItem from "@/components/RecordItem";
import { Pagination } from "antd";
export default function Records() {
  const tableHead1 = [
    {
      value: "Transaction Hash",
      span: 6,
    },
    {
      value: "Age",
      span: 3,
    },
    {
      value: "From",
      span: 5,
    },
    {
      value: "To",
      span: 5,
    },
    {
      value: "Value",
      span: 5,
    },
  ];
  const tableHead = {
    hash: "A",
    age: "B",
    from: "C",
    to: "D",
    value: "E",
  };
  const result = [
    {
      hash: "0x88055777270485d8e381b2b12362986e6c79d9cdd41a2f7885e877aa78159ac8",
      age: "2 day ago",
      from: "0x631E9B031b16b18172a2B9D66C3668A68a668d20",
      to: "0x7c0DEdff7164146486c665F3381417cCd447bcba",
      value: "0.1",
    },
    {
      hash: "0x88055777270485d8e381b2b12362986e6c79d9cdd41a2f7885e877aa78159ac8",
      age: "2 day ago",
      from: "0x631E9B031b16b18172a2B9D66C3668A68a668d20",
      to: "0x7c0DEdff7164146486c665F3381417cCd447bcba",
      value: "0.1",
    },
    {
      hash: "0x88055777270485d8e381b2b12362986e6c79d9cdd41a2f7885e877aa78159ac8",
      age: "2 day ago",
      from: "0x631E9B031b16b18172a2B9D66C3668A68a668d20",
      to: "0x7c0DEdff7164146486c665F3381417cCd447bcba",
      value: "0.1",
    },
    {
      hash: "0x88055777270485d8e381b2b12362986e6c79d9cdd41a2f7885e877aa78159ac8",
      age: "2 day ago",
      from: "0x631E9B031b16b18172a2B9D66C3668A68a668d20",
      to: "0x7c0DEdff7164146486c665F3381417cCd447bcba",
      value: "0.1",
    },
    {
      hash: "0x88055777270485d8e381b2b12362986e6c79d9cdd41a2f7885e877aa78159ac8",
      age: "2 day ago",
      from: "0x631E9B031b16b18172a2B9D66C3668A68a668d20",
      to: "0x7c0DEdff7164146486c665F3381417cCd447bcba",
      value: "0.1",
    },
    {
      hash: "0x88055777270485d8e381b2b12362986e6c79d9cdd41a2f7885e877aa78159ac8",
      age: "2 day ago",
      from: "0x631E9B031b16b18172a2B9D66C3668A68a668d20",
      to: "0x7c0DEdff7164146486c665F3381417cCd447bcba",
      value: "0.1",
    },
    {
      hash: "0x88055777270485d8e381b2b12362986e6c79d9cdd41a2f7885e877aa78159ac8",
      age: "2 day ago",
      from: "0x631E9B031b16b18172a2B9D66C3668A68a668d20",
      to: "0x7c0DEdff7164146486c665F3381417cCd447bcba",
      value: "0.1",
    },
    {
      hash: "0x88055777270485d8e381b2b12362986e6c79d9cdd41a2f7885e877aa78159ac8",
      age: "2 day ago",
      from: "0x631E9B031b16b18172a2B9D66C3668A68a668d20",
      to: "0x7c0DEdff7164146486c665F3381417cCd447bcba",
      value: "0.1",
    },
    {
      hash: "0x88055777270485d8e381b2b12362986e6c79d9cdd41a2f7885e877aa78159ac8",
      age: "2 day ago",
      from: "0x631E9B031b16b18172a2B9D66C3668A68a668d20",
      to: "0x7c0DEdff7164146486c665F3381417cCd447bcba",
      value: "0.1",
    },
    {
      hash: "0x88055777270485d8e381b2b12362986e6c79d9cdd41a2f7885e877aa78159ac8",
      age: "2 day ago",
      from: "0x631E9B031b16b18172a2B9D66C3668A68a668d20",
      to: "0x7c0DEdff7164146486c665F3381417cCd447bcba",
      value: "0.1",
    },
  ];
  return (
    <div className="w-full">
      <span className="font-bold mb-4 text-xl">Transaction Records</span>
      <RecordItem tableValue={tableHead} ifHeader={true}></RecordItem>
      {result.map((item) => {
        return <RecordItem tableValue={item}></RecordItem>;
      })}
      <Pagination
        total={500}
        showTotal={(total) => `Total ${total} items`}
        pageSize={10}
        defaultCurrent={1}
        showSizeChanger={false}
      />
    </div>
  );
}
