import React from "react";
import { Card, Avatar } from "antd";
import {
  EditOutlined,
  EllipsisOutlined,
  SettingOutlined,
} from "@ant-design/icons";
const { Meta } = Card;

function MarketPlaceItem() {
  return (
    <div className="m-1">
      <Card
        hoverable
        style={{ width: 300 }}
        cover={
          <img
            alt="example"
            src="https://assets.skooldio.com/courses/design-thinking-01/design-thinking-cover-2021-2.png"
          />
        }
      >
        <Meta title="จุฬามาร์เก็ตเพลส" description="รวมร้านค้าจากคนเรียนจุฬา" />
      </Card>
    </div>
  );
}

export default MarketPlaceItem;
