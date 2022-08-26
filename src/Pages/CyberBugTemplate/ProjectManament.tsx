import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createAllProject } from "../../Slices/Project/AllProject";
import { AppDispatch, RootState } from "../../store";
import { Space, Table, Tag } from "antd";
import type { ColumnsType, TableProps } from "antd/es/table";
import { AllProjectInterface } from "../../Interface/AllProject/AllprojectInterface";
import { EditOutlined, DeleteOutlined } from "@ant-design/icons";
import parse from "html-react-parser";
import EditModal from "../../HOC/Modal/EditModal";
import { NavLink } from "react-router-dom";
const ProjectManament = () => {
  const { data } = useSelector((state: RootState) => state.AllProject);
  const dispatch = useDispatch<AppDispatch>();
  useEffect(() => {
    dispatch(createAllProject());
  }, []);
  console.log(data);
  const columns: ColumnsType<AllProjectInterface> = [
    {
      title: "id",
      dataIndex: "id",
      // onFilter: (value: string, record) => record.name.includes(value),
      width: "30%",
      sorter: (a, b) => a.id - b.id,
      sortDirections: ["descend"],
    },
    {
      title: "projectName",
      dataIndex: "projectName",
      // onFilter: (value: string, record) => record.name.includes(value),
      width: "20%",
      sorter: (a, b) => a.projectName .length - b.projectName.length,
    },
    {
      title: "category",
      dataIndex: "categoryName",
      key: "categoryName",
      sorter: (a, b) => a.categoryName.length - b.categoryName.length,
    },
    {
      title: "creator",
      dataIndex: "creator",
      key: "creator",
      sorter: (a, b) => a.creator.name.length - b.creator.name.length,
      render(value, record, index) {
        return <Tag color="lime"> {record.creator.name}</Tag>;
      },
    },
    // {
    //   title: 'description',
    //   dataIndex: 'description',
    //   render(value, record, index) {
    //     let jsxContent = parse(value)
    //     return <span>{jsxContent} </span>
    //   },
    //   sorter: (a, b) => a.description.length - b.description.length,
    // },
    {
      title: "Action",
      dataIndex: "Action",
      render(value, record, index) {
        return (
          <Space size="middle">
            <a className="text-primary">
              <NavLink to={`/projectmanament/edit/${record.id}`}>
                <EditOutlined/>
              </NavLink>
            </a>
            <a className="text-danger">
              <DeleteOutlined />
            </a>
          </Space>
        );
      },
      // onFilter: (value: string, record) => record.name.includes(value),
      width: "10%",
    },
  ];
  const dataSource = data;
  const onChange: TableProps<AllProjectInterface>["onChange"] = (
    pagination,
    filters,
    sorter,
    extra
  ) => {
    console.log("params", pagination, filters, sorter, extra);
  };
  return (
    <div className="container mt-5" style={{ width: "10000px" }}>
      <Table
        columns={columns}
        rowKey={"id"}
        dataSource={dataSource}
        onChange={onChange}
      />
    </div>
  );
};

export default ProjectManament;
