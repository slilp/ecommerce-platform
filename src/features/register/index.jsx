import React from "react";
import { Form, Input, Button, message } from "antd";
import {Link} from "react-router-dom";
import "./style.scss";
import SocialButton from "../../common/components/social-btn";
import { postJson } from "../../axios";
import { useHistory } from "react-router-dom";



function Register(props) {
  const [form] = Form.useForm();
  const history = useHistory();

  const onFinish = async (values) => {

    const res = await postJson("/customer/register", {
      username: values.username,
      password: values.password,
      firstName: values.firstName,
      lastName: values.lastName,
      email: values.username,
      registerDate: Date.now()
    });

    if (res.status == 200) {
      //set login info
      message.success("สมัครสมาชิกสำเร็จ", 5);
      history.push("/login");
    } else {

      if(res.data.statusCode == "ECOM-409"){
        message.error("มีบัญชีนี้ในระบบเเล้ว", 3);
      }else{
        message.error("เกิดข้อผิดพลาดกรุณาลองดูใหม่", 3);
      }
      // form.resetFields();
    }

  };

  return (
    <div className="pt-20">
      <div className="container mx-auto  flex flex-col justify-center text-center">
        <div>
          <h1 className="lg:text-3xl text-2xl ">สมัครสมาชิก</h1>
        </div>
        <div className="flex justify-center" >
          <div className="lg:w-1/3 w-4/5">
            <Form.Item>สมัครสมาชิกง่ายๆด้วย</Form.Item>

            <Form.Item>
              <SocialButton
                channel="facebook"
                label="เข้าสู่ระบบด้วย facebook"
                url="http://localhost:5000/api/customer/facebook"
              ></SocialButton>
            </Form.Item>

            <p className="text-lg">หรือ</p>

            <Form
              name="basic"
              initialValues={{
                remember: true,
              }}
              layout="vertical"
              onFinish={onFinish}
              form={form}
            >
              <Form.Item
                label="อีเมลล์"
                name="username"
                rules={[
                  {
                    required: true,
                    message: "กรุณากรอกอีเมลล์",
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
                    message: "กรุณากรอกชื่อ",
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
                    message: "กรุณากรอกนามสกุล",
                  },
                ]}
              >
                <Input />
              </Form.Item>

              <Form.Item
                name="password"
                label="รหัสผ่าน"
                rules={[
                  {
                    required: true,
                    message: "กรุณากรอกรหัสผ่าน",
                  },
                ]}
                hasFeedback
              >
                <Input.Password />
              </Form.Item>

              <Form.Item
                name="confirm"
                label="ยืนยันรหัสผ่าน"
                dependencies={["password"]}
                hasFeedback
                rules={[
                  {
                    required: true,
                    message: "กรุณากรอกรหัสผ่าน",
                  },
                  ({ getFieldValue }) => ({
                    validator(_, value) {
                      if (!value || getFieldValue("password") === value) {
                        return Promise.resolve();
                      }
                      return Promise.reject("รหัสผ่านไม่ตรงกัน");
                    },
                  }),
                ]}
              >
                <Input.Password />
              </Form.Item>
              <br></br>
              <Form.Item>
                <Button type="primary" htmlType="submit">
                  สมัครสมาชิก
                </Button>
              </Form.Item>
              
              <p className="text-lg">มีบัญชีเเล้ว ? <Link to="/login">เข้าสู่ระบบ</Link></p>

            </Form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Register;
