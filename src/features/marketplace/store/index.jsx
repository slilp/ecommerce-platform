import React from "react";
import { Card } from "antd";
import { Link } from "react-router-dom";
const { Meta } = Card;

function StoreItem(props) {
  return (
    <div className="m-1">
      <Link to={`/store/${props.id}`}>
        <Card
          hoverable
          style={{ width: "100%" ,height:"100%"}}
          cover={<img src={props.image} />}
        >
          <Meta title={props.title} description={props.desc} />
        </Card>
      </Link>
    </div>
  );
}

export default StoreItem;
