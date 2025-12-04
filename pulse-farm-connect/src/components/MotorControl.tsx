import React from "react";
import { Card } from "@/components/ui/card";

const MotorControl = () => {
  return (
    <Card className="p-6 shadow-soft bg-white max-w-2xl">
      <iframe
        src="https://172.17.2.160"
        className="w-full h-[600px] rounded-lg border"
        sandbox="allow-scripts allow-forms allow-same-origin"
      />
    </Card>
  );
};

export default MotorControl;
