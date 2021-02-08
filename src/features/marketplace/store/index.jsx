import React from "react";
import { Card, Avatar } from "antd";
const { Meta } = Card;

function StoreItem() {
  return (
    <div className="m-1">
      <Card
        hoverable
        style={{ width: "100%" }}
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

export default StoreItem;
