/*
 * @Author: Jacket-mzl
 * @Date: 2024-05-17 18:41:20
 * @LastEditors: Jacket-mzl
 * @LastEditTime: 2024-05-23 22:53:30
 * @Description:
 */
"use client";
import "@/assets/css/beforeGame.css";
import { useEffect, useState } from "react";
import Dialog from "@/components/Dialog";
import { Button, Form, InputNumber } from "antd";
import { RootState, useSelector } from "@/redux";

type ButtonType = "contractMainBtn" | "gameMainBtn";

export default function BeforeGame() {
  const [contractBalance, setContractAmount] = useState(0);
  const [gameBalance, setGameAmount] = useState(0);
  const [gameContent, setGameContent] = useState({
    currentGamers: 0, // 当前玩家人数
    lastWinnerAmount: 0, //上一局玩家获胜的金额
    nextGameTime: 0, // 距离下一局的时间
    finalDrawTime: 0, // 距离今天奖池开奖时间剩余时间
  });
  const [dialogTitle, setDialogTitle] = useState("");
  const [showDialog, setShowDialog] = useState(false);
  const [form] = Form.useForm();
  const [buttonType, setButtonType] = useState<ButtonType>("contractMainBtn");
  const ContractBtnArr = ["WalletToContract", "ContractToWallet"];
  const GameBtnArr = ["GameToContract", "ContractToGame"];
  const isDeskTop = useSelector((state: RootState) => state.media.isDeskTop);
  const [btnTypeArr, setBtnTypeArr] = useState(ContractBtnArr);
  const [showRulesDialog, setShowRulesDialog] = useState(false);

  useEffect(() => {
    buttonType == "contractMainBtn"
      ? setBtnTypeArr(ContractBtnArr)
      : setBtnTypeArr(GameBtnArr);
  }, [buttonType]);

  /**
   * 打开/关闭余额的弹窗
   * @param flag true开 false关
   * @param buttonType 判断是开哪个弹窗
   */
  const toggleDialog = (
    flag: boolean,
    buttonType: ButtonType = "contractMainBtn"
  ) => {
    setShowDialog(flag);
    setButtonType(buttonType);
    buttonType == "contractMainBtn"
      ? setDialogTitle("Contract Transaction")
      : setDialogTitle("Game Transaction");
    form.resetFields();
  };

  /**
   * 打开/关闭规则的弹窗
   * @param flag true开 false关
   */
  const toggleRulesDialog = (flag: boolean) => {
    setShowRulesDialog(flag);
  };

  /**
   * 点击转账到钱包或合约或钱包 成功/失败之后退出弹窗
   * @param result 成功还是失败的结果
   */
  const transferResult = (result: boolean) => {
    toggleDialog(false);
  };

  /**
   * 从钱包转到合约 eth为钱的多少
   */
  const WalletToContract = (eth: number) => {
    form
      .validateFields()
      .then((res) => {
        console.log(eth, "我成功点击了WalletToContract", res);
        transferResult(true);
      })
      .catch((err) => {
        console.log(eth, "我失败了", err);
      });
  };

  /**
   * 从合约转到钱包 eth为钱的多少
   */
  const ContractToWallet = (eth: number) => {
    form
      .validateFields()
      .then((res) => {
        console.log(eth, "我成功点击了ContractToWallet", res);
        transferResult(true);
      })
      .catch((err) => {
        console.log(eth, "我失败了ContractToWallet", err);
      });
  };

  /**
   * 从游戏转到合约 eth为钱的多少
   */
  const GameToContract = (eth: number) => {
    form
      .validateFields()
      .then((res) => {
        console.log(eth, "我成功点击了GameToContract", res);
        transferResult(true);
      })
      .catch((err) => {
        console.log("我失败了", err);
      });
  };

  /**
   * 从合约转到游戏 eth为钱的多少
   */
  const ContractToGame = (eth: number) => {
    form
      .validateFields()
      .then((res) => {
        console.log(eth, "我成功点击了ContractToGame", res);
        transferResult(true);
      })
      .catch((err) => {
        console.log("我失败了", err);
      });
  };

  /**
   * 点击Form提交交易的按钮触发
   * @param btnType 是合约余额按钮 还是 游戏余额按钮
   * @param btnNum 是Form里面第一个按钮 还是 第二个按钮
   */
  const toggleTransfer = (btnName: string) => {
    const inputValue = form.getFieldValue("transferBalance");
    if (btnName == ContractBtnArr[0]) {
      WalletToContract(inputValue);
    } else if (btnName == ContractBtnArr[1]) {
      ContractToWallet(inputValue);
    } else if (btnName == GameBtnArr[0]) {
      GameToContract(inputValue);
    } else if (btnName == GameBtnArr[1]) {
      ContractToGame(inputValue);
    } else {
      console.log("按钮名称都不对 检查是不是改过按钮名称");
    }
  };

  return (
    <div className="h-full w-full absolute">
      <div
        className={`start-game flex flex-col rounded-xl shadow-lg m-auto justify-center items-center ${
          isDeskTop ? "desktopWidth" : "phoneWidth"
        }`}
      >
        <div className="flex justify-end header select-none">
          <div
            className="ml-4 text-white cursor-pointer"
            onClick={() => toggleDialog(true, "contractMainBtn")}
          >
            <span className="text-xs">Contract Balance: </span>
            <span>{contractBalance}</span>
            <span className="text-xs"> ETH</span>
          </div>
          <div
            className="ml-4 text-white cursor-pointer"
            onClick={() => toggleDialog(true, "gameMainBtn")}
          >
            <span className="text-xs">Game Balance: </span>
            <span>{gameBalance}</span>
            <span className="text-xs"> ETH</span>
          </div>
        </div>
        <div className="content flex flex-col text-white my-4">
          <div className="font-bold  mb-4">
            <span className="mr-2">Current Gamers: </span>
            <span>{gameContent.currentGamers}</span>
          </div>
          <div className="font-bold  mb-4">
            <span className="mr-2">Last Winner Win: </span>
            <span>{gameContent.lastWinnerAmount}</span>
            <span>ETH</span>
          </div>
          <div className="font-bold  mb-4">
            <span className="mr-2">Next Game:</span>
            <span>{gameContent.nextGameTime}</span>
          </div>
          <div className="font-bold  mb-4">
            <span className="mr-2">Final Draw:</span>
            <span>{gameContent.finalDrawTime}</span>
          </div>
        </div>
        <div className="relative footer">
          <div className="rounded-full w-4/6 cursor-pointer select-none">
            Start
          </div>
          <span
            className="rules absolute text-xs text-slate-400 cursor-pointer select-none"
            onClick={() => toggleRulesDialog(true)}
          >
            Rules
          </span>
        </div>
      </div>
      <Dialog
        title={dialogTitle}
        showDialog={showDialog}
        toggleDialog={toggleDialog}
      >
        <div className="mt-2">
          <div className="text-right mb-6">
            <span className="mr-2">
              Current {buttonType == "contractMainBtn" ? "Contract" : "Game"}{" "}
              Balance:
            </span>
            <span className="font-bold mr-1">0</span>
            <span>ETH</span>
          </div>
          <Form
            name="basic"
            labelCol={{ span: 4 }}
            wrapperCol={{ span: 20 }}
            initialValues={{ remember: false }}
            form={form}
          >
            <Form.Item
              label="ETH"
              name="transferBalance"
              rules={[{ required: true, message: "At least 0.01 ETH !" }]}
            >
              <InputNumber
                placeholder="At least 0.01 ETH"
                min={0.01}
                style={{ width: "100%" }}
              />
            </Form.Item>
          </Form>
          <div className="flex justify-center mt-10">
            {btnTypeArr.map((element) => {
              return (
                <Button
                  type="primary"
                  className="mx-2"
                  onClick={() => toggleTransfer(element)}
                  key={element}
                >
                  {element}
                </Button>
              );
            })}
          </div>
        </div>
      </Dialog>
      <Dialog
        title="Rules"
        showDialog={showRulesDialog}
        toggleDialog={toggleRulesDialog}
      >
        <span>balabalabalabala</span>
      </Dialog>
    </div>
  );
}
