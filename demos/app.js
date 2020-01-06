import React from "react";
import Steps from "../src";

export default function App() {
  return (
    <div>
      <Steps
        current={1}
        source={[
          { id: "1", title: "开始", description: "开始节点" },
          { id: "2", title: "进行中", description: "开始节点" },
          { id: "3", title: "未开始", description: "开始节点" },
        ]}
      />
    </div>
  );
}
