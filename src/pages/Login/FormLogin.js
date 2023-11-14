import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { clientProfileAPI } from "../../services/Api/api";
import { userLocalStorage } from "../../services/LocalStorage/userLocalStorage";
import { Button, Divider, Form, Input, message, Checkbox } from "antd";
import {
  CloseCircleOutlined,
  LockOutlined,
  UserOutlined,
} from "@ant-design/icons";
export default function FormLogin() {
  let navigate = useNavigate();
  const onFinishFailed = (errorInfo) => {
    //   console.log("Failed:", errorInfo);
  };
  const onFinish = (values) => {
    clientProfileAPI
      .dangNhap(values)
      .then((res) => {
        userLocalStorage.set(res.data.content);
        message.success("Đăng Nhập Thành Công");
        navigate(-1);
      })
      .catch((err) => {
        message.error("Sai Tài Khoản Mật Khẩu ");
      });
  };

  return (
    <>
      <div className="w-full lg:w-1/2">
        <NavLink
          to={"/"}
          className="fixed md:absolute md:right-[170px] md:top-[40px] top-[10px] right-[10px] text-gray-300 text-5xl hover:text-orange-500"
        >
          <CloseCircleOutlined />
        </NavLink>
        <Divider
          orientation="left"
          style={{ color: "white", border: "white" }}
          className="lg:text-xl text-[18px]"
        >
          Đăng Nhập
        </Divider>

        <div className="flex justify-center mb-12">
          <img className="w-12 lg:w-24" src="image/headTixLogo.png" alt="..." />
        </div>
        <Form
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          className="w-2/3 mx-auto"
          layout="vertical"
          name="basic"
          initialValues={{
            remember: true,
          }}
          autoComplete="off"
        >
          <p className="text-white text-xl mb-3">Tài Khoản</p>
          <Form.Item
            name="taiKhoan"
            rules={[
              {
                required: true,
                message: "Hãy nhập tài khoản!",
              },
            ]}
          >
            <Input placeholder="Nhập tài khoản" prefix={<UserOutlined />} />
          </Form.Item>

          <p className="text-white text-xl mb-3">Mật Khẩu</p>
          <Form.Item
            // label="Mật Khẩu"
            name="matKhau"
            rules={[
              {
                required: true,
                message: "Hãy nhập mật khẩu!",
              },
            ]}
          >
            <Input.Password
              prefix={<LockOutlined />}
              placeholder="Nhập mật khẩu"
            />
          </Form.Item>
          <div className="md:flex md:justify-between text-center grid grid-cols-1 items-center md:mb-0  mb-3 ">
            <a className="text-blue-700 py-2" href="#">
              Bạn quên mật khẩu?
            </a>
            <NavLink className="capitalize text-green-500" to={"/dangky"}>
              đăng ký tài khoản mới!
            </NavLink>
          </div>
          <Form.Item
            className="flex justify-center"
            name="remember"
            valuePropName="checked"
          >
            <Checkbox className="text-white text-center">
              Nhớ mật khẩu?
            </Checkbox>
          </Form.Item>

          <Form.Item className="flex justify-center">
            <Button danger htmlType="submit">
              Đăng Nhập
            </Button>
          </Form.Item>
        </Form>
      </div>
    </>
  );
}
