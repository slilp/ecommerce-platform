import React, { useState } from "react";
import { Form, Input, Button, Select } from "antd";
const { Option } = Select;
const provinceData = ["Zhejiang", "Jiangsu"];
const cityData = {
  Zhejiang: ["Hangzhou", "Ningbo", "Wenzhou"],
  Jiangsu: ["Nanjing", "Suzhou", "Zhenjiang"],
};

const AddAddress = () => {
  const [form] = Form.useForm();
  const [formLayout, setFormLayout] = useState("horizontal");

  const [cities, setCities] = React.useState(cityData[provinceData[0]]);
  const [secondCity, setSecondCity] = React.useState(
    cityData[provinceData[0]][0]
  );

  const handleProvinceChange = (value) => {
    setCities(cityData[value]);
    setSecondCity(cityData[value][0]);
  };

  const onSecondCityChange = (value) => {
    setSecondCity(value);
  };

  const onFormLayoutChange = ({ layout }) => {
    setFormLayout(layout);
  };

  return (
    <>
      <Form
        layout={formLayout}
        form={form}
        layout="vertical"
        initialValues={{
          layout: formLayout,
        }}
        onValuesChange={onFormLayoutChange}
      >
        <Form.Item label="Form Layout" name="layout">
          <Select
            defaultValue={provinceData[0]}
            style={{ width: 120 }}
            onChange={handleProvinceChange}
          >
            {provinceData.map((province) => (
              <Option key={province}>{province}</Option>
            ))}
          </Select>
        </Form.Item>

        <Form.Item label="Form Layout" name="layout">
          <Select
            style={{ width: 120 }}
            value={secondCity}
            onChange={onSecondCityChange}
          >
            {cities.map((city) => (
              <Option key={city}>{city}</Option>
            ))}
          </Select>
        </Form.Item>

        <Form.Item label="Field A">
          <Input placeholder="input placeholder" />
        </Form.Item>
        <Form.Item label="Field B">
          <Input placeholder="input placeholder" />
        </Form.Item>
        <Form.Item>
          <Button type="primary">Submit</Button>
        </Form.Item>
      </Form>
    </>
  );
};

export default AddAddress;
