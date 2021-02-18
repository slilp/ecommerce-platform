import React, { useState, useEffect } from "react";
import { Table, Tag } from "antd";
import { getParamAuth } from "../../../axios";
import { Radio } from "antd";

const optionsStatus = [
  { label: "รอการจัดส่ง", value: "ordering" , color : "volcano" },
  { label: "ส่งสำเร็จ", value: "success" ,color : "success"},
];

const word = {
  ordering: "รอการจัดส่ง",
  success: "จัดส่งเเล้ว",
};

const reloadData = async (status, page, size) => {
  const res = await getParamAuth(
    `/order/search/${status}/${page}/${size}/`,
    {}
  );
  if (res.status == 200) {
    if (res.data.data.listOrder != null) {
      let data = res.data.data.listOrder.map((item) => {
        return {
          key: item.orderId,
          date: new Date(item.orderDate).toLocaleDateString("th-TH"),
          product: item.orderCart
            .map((i) => i.productInfo.productName)
            .join(" / "),
          status: item.orderStatus,
        };
      });

      return { list: data, total: res.data.data.totalRecord };
    } else {
      return [];
    }
  }
};

function HistoryTable() {
  const [history, setHistory] = useState([]);
  const [totalCount, setTotalCount] = useState(0);
  const [status, setStatus] = useState("ordering");
  const [pagination, setPagination] = useState();

  const columns = [
    {
      title: "วันที่",
      dataIndex: "date",
      key: "date",
      render: (text) => <span>{text}</span>,
    },
    {
      title: "รายการสินค้า",
      dataIndex: "product",
      key: "product",
      render: (text) => <span>{text}</span>,
    },
    {
      title: "สถานะ",
      dataIndex: "status",
      key: "status",
      render: (text) => (
        <Tag color={optionsStatus.find(v=>v.value==status).color} key={text}>
          {word[text]}
        </Tag>
      ),
    },
  ];

  useEffect(async () => {
    const res = await reloadData(status, 0, 10);
    setHistory(res.list);
    setPagination({
      total: res.total,
      current: 1,
    });
  }, [status]);

  const handleTableChange = async (pagination, filters, sorter) => {
    const res = await reloadData(
      status,
      pagination.current - 1,
      pagination.pageSize
    );
    setHistory(res.list);
    setPagination({
      ...pagination,
      current: pagination.current,
    });
  };

  const onChangeChannel = async (e) => {
    setStatus(e.target.value);
  };

  return (
    <div>
      <Radio.Group
        options={optionsStatus}
        onChange={onChangeChannel}
        value={status}
        optionType="button"
        buttonStyle="solid"
      />
      <br></br>
      <br></br>
      <Table
        columns={columns}
        dataSource={history}
        pagination={pagination}
        onChange={handleTableChange}
      />
    </div>
  );
}

export default HistoryTable;
