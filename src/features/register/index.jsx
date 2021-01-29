import React from "react";
import { Form, Input, Button, Checkbox } from "antd";
import SocialButton from "../../common/components/social-btn";


function Register(props) {
  const onFinish = (values) => {
    console.log("Success:", values);
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <div className="pt-20">
      <div className="container mx-auto  flex flex-col justify-center text-center">
        <div>
          <h1 className="lg:text-3xl text-2xl ">สมัครสมาชิก</h1>
        </div>
        <div className="flex justify-center">
          <div className="lg:w-1/3 w-4/5">
            <Form.Item>สมัครสมาชิกง่ายๆด้วย</Form.Item>

            <Form.Item>
              <SocialButton
                channel="facebook"
                label="เข้าสู่ระบบด้วย facebook"
              ></SocialButton>
            </Form.Item>

            <Form.Item>หรือ</Form.Item>


            <Form
              name="basic"
              initialValues={{
                remember: true,
              }}
               layout="vertical"
              onFinish={onFinish}
              onFinishFailed={onFinishFailed}
            >
              <Form.Item
                label="Username"
                name="username"
                rules={[
                  {
                    required: true,
                    message: "Please input your username!",
                  },
                ]}
              >
                <Input />
              </Form.Item>

              <Form.Item
                label="ชื่อ"
                name="firstName"
                rules={[
                  {
                    required: true,
                    message: "Please input your username!",
                  },
                ]}
              >
                <Input />
              </Form.Item>

              <Form.Item
                label="นามสกุล"
                name="lastName"
                rules={[
                  {
                    required: true,
                    message: "Please input your username!",
                  },
                ]}
              >
                <Input />
              </Form.Item>

              <Form.Item
                label="Password"
                name="password"
                rules={[
                  {
                    required: true,
                    message: "Please input your password!",
                  },
                ]}
              >
                <Input.Password />
              </Form.Item>

              <Form.Item
                label="Confirm Password"
                name="confirmPassword"
                rules={[
                  {
                    required: true,
                    message: "Please input your password!",
                  },
                ]}
              >
                <Input.Password />
              </Form.Item>

              <Form.Item>
                <Button type="primary" htmlType="submit">
                  สมัครสมาชิก
                </Button>
              </Form.Item>
            </Form>
          </div>
        </div>
      </div>
      <br />
      <div className="bg-gradient-to-b from-white to-blue-200  mt-10 text-center p-10">
        <h1 className="text-3xl text-indigo-900">ให้ edverest ช่วยคุณ</h1>
        <h1 className="text-2xl text-indigo-900">
          เพื่อเจอทุนที่เราแนะนำสำหรับคุณ พร้อมระบบติดตามและสมัครทุนในอนาคต !
        </h1>
      </div>
    </div>
  );
}

export default Register;
