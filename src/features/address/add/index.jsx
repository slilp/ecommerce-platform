import React, { useState } from "react";
import { Form, Input, Button , message } from "antd";
import { postJsonAuth } from "../../../axios";

const AddAddress = () => {
  const [form] = Form.useForm();
  const [formLayout, setFormLayout] = useState("horizontal");


  const onFormLayoutChange = ({ layout }) => {
    setFormLayout(layout);
  };

  const onFinish = async (values) => {
    const res = await postJsonAuth("/address/create",{
      addressName : values.name,
      addressInfo : values.address,
      isDefault : true,
      zipCode : values.zipCode
    });
    if (res.status == 200) {

      window.location.reload();
      
    } else {
        message.error("เกิดข้อผิดพลาดกรุณาลองดูใหม่", 3);
    }
  };

  return (
    <>
      <Form
        layout={formLayout}
        form={form}
        layout="vertical"
        onFinish={onFinish}
        initialValues={{
          layout: formLayout,
        }}
        onValuesChange={onFormLayoutChange}
      >
        

        <Form.Item label="ชื่อผู้รับ" name="name">
          <Input/>
        </Form.Item>
        <Form.Item label="ที่อยู่" name="address">
          <Input  maxLength="180"/>
        </Form.Item>
        <Form.Item label="รหัสไปรษณีย์" name="zipCode">
          <Input maxLength="5"/>
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
    </>
  );
};

export default AddAddress;
