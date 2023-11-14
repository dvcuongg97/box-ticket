import React from "react";
import FormLogin from "./FormLogin";
import AnimationLogin from "./AnimationLogin";

export default function Login() {
  return (
    <>
      <div className="h-screen flex items-center bg-orange-500">
        <div
          style={{
            backgroundImage: "url(../image/bgall.jpg)",
          }}
          className="container mx-auto flex p-10 rounded-xl"
        >
          <FormLogin />
          <AnimationLogin />
        </div>
      </div>
    </>
  );
}
