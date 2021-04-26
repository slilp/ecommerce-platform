import React , {useEffect} from "react";
import { Form, Input, Button, message } from "antd";
import SocialButton from "../../common/components/social-btn";
import { postJson , getParamAuth} from "../../axios";
import { setAccessToken , removeAccessToken } from "../../storage/token";
import { setCustomerInfo } from "../../storage/info";
import { Link } from "react-router-dom";
import "./style.scss";

function Login(props) {
  const [form] = Form.useForm();

  useEffect(async () => {
    let params = new URLSearchParams(props.location.search);
    let token = params.get("t");
    if (token) {
      setAccessToken(token);
      const res = await getParamAuth("/customer/info", {});
      if (res.status == 200) {
        if (res.data.data != null) {
          setCustomerInfo(`${res.data.data.firstName ? res.data.data.firstName : ''} ${res.data.data.lastName? res.data.data.lastName : '' }`);
          window.location.reload();
        }else{
          message.error("เข้าสู่ระบบไม่สำเร็จ กรุณาลองใหม่", 3);
        }
      }else{
        removeAccessToken();
        message.error("เข้าสู่ระบบไม่สำเร็จ กรุณาลองใหม่", 3);
      }
    }
  }, [])

  const onFinish = async (values) => {
    const res = await postJson("/customer/login", {
      username: values.email,
      password: values.password,
    });

    if (res.status == 200) {
      //set login info
      setAccessToken(res.data.data.accessToken);
      setCustomerInfo(`${res.data.data.customerInfo.firstName} ${res.data.data.customerInfo.lastName}`);
      window.location.reload();
    } else {
      message.error("อีเมลล์ หรือ รหัสผ่าน ไม่ถูกต้อง", 3);
      // form.resetFields();
    }
  };

  return (
    <div className="pt-20">
      <div className="container mx-auto  flex flex-col justify-center text-center">
        <div>
          <h1 className="lg:text-3xl text-2xl ">เข้าสู่ระบบ</h1>
        </div>
        <div className="flex justify-center text-lg">
          <div className="lg:w-1/3 w-4/5">
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
                name="email"
                label="อีเมลล์"
                hasFeedback
                rules={[
                  {
                    type: "email",
                    message: "รูปเเบบอีเมลล์ไม่ถูกต้อง",
                  },
                  {
                    required: true,
                    message: "กรุณากรอกอีเมลล์",
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
              <br></br>
              <Form.Item>
                <Button type="primary" htmlType="submit">
                  เข้าสู่ระบบ
                </Button>
              </Form.Item>

              <p className="text-lg">หรือเข้าสู่ระบบด้วย</p>

              <Form.Item>
                <SocialButton
                  channel="facebook"
                  label="เข้าสู่ระบบด้วย facebook"
                  url={"http://localhost:5000/api/customer/facebook"}
                ></SocialButton>
              </Form.Item>
            </Form>

            <p>ยังไม่มีบัญชี ? <Link to="/register">สมัครเลย</Link></p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
