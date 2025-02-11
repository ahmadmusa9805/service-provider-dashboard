/* eslint-disable no-undef */
import { ConfigProvider, Table } from "antd";
import { BiSolidEdit } from "react-icons/bi";
import { RiDeleteBin5Line } from "react-icons/ri";

const columns = [
  {
    title: "No",
    dataIndex: "no",
    key: "no",
    align: "center",
  },
  {
    title: "Image",
    dataIndex: "image",
    key: "image",
    align: "center",
    render: (image) => (
      <img
        src={image}
        alt="User"
        className="w-12 h-12 rounded-full object-cover mx-auto"
      />
    ),
  },
  {
    title: "Other Required Tasks",
    dataIndex: "tasks",
    key: "tasks",
  },
  {
    title: "Show Specialists In",
    dataIndex: "specialists",
    key: "specialists",
    render: (specialists) => (
      <div>
        {specialists?.map((specialist, index) => (
          <span key={index} className="mr-1">
            {specialist}
          </span>
        ))}
      </div>
    ),
  },
  {
    title: "Action",
    key: "action",
    align: "center",
    render: () => (
      <div className="flex justify-center gap-2">
        <button className="text-red-500">
          <RiDeleteBin5Line className="w-6 h-6" />
        </button>
        <button className="text-[#00C0B5]">
          <BiSolidEdit className="w-6 h-6" />
        </button>
      </div>
    ),
  },
];

const dataSource = [
  {
    key: "1",
    no: "1",
    image: "https://avatar.iran.liara.run/public/1",
    tasks: "Verify Email, Complete Profile",
    specialists: ["Cardiology", "Neurology"],
  },
  {
    key: "2",
    no: "2",
    image: "https://avatar.iran.liara.run/public/2",
    tasks: "Upload Documents",
    specialists: ["Dermatology", "Pediatrics"],
  },
  {
    key: "3",
    no: "3",
    image: "https://avatar.iran.liara.run/public/3",
    tasks: "Set Appointment",
    specialists: ["Psychology", "Orthopedics"],
  },
  {
    key: "4",
    no: "4",
    image: "https://avatar.iran.liara.run/public/4",
    tasks: "Confirm Phone Number",
    specialists: ["General Medicine", "Oncology"],
  },
  {
    key: "8",
    no: "8",
    image: "https://avatar.iran.liara.run/public/8",
    tasks: "Verify Email, Complete Profile",
    specialists: ["Cardiology", "Neurology"],
  },
  {
    key: "5",
    no: "5",
    image: "https://avatar.iran.liara.run/public/5",
    tasks: "Upload Documents",
    specialists: ["Dermatology", "Pediatrics"],
  },
  {
    key: "6",
    no: "6",
    image: "https://avatar.iran.liara.run/public/6",
    tasks: "Set Appointment",
    specialists: ["Psychology", "Orthopedics"],
  },
  {
    key: "7",
    no: "7",
    image: "https://avatar.iran.liara.run/public/7",
    tasks: "Confirm Phone Number",
    specialists: ["General Medicine", "Oncology"],
  },
];

function Services() {
  return (
    <ConfigProvider
      theme={{
        components: {
          InputNumber: {
            activeBorderColor: "rgb(19,194,194)",
          },
          Pagination: {
            colorPrimaryBorder: "rgb(19,194,194)",
            colorBorder: "rgb(19,194,194)",
            colorPrimaryHover: "rgb(19,194,194)",
            colorBgTextActive: "rgb(19,194,194)",
            colorTextDisabled: "rgb(19,194,194)",
            colorTextPlaceholder: "rgb(19,194,194)",
            itemActiveBgDisabled: "rgb(255,255,255)",
            colorPrimary: "rgb(19,194,194)",
          },

          Table: {
            headerBg: "rgb(19,194,194)",
            headerColor: "rgb(255,255,255)",
            cellFontSize: 20,
            headerSplitColor: "rgb(19,194,194)",
          },
        },
      }}
    >
      <Table
        dataSource={dataSource}
        columns={columns}
        pagination={{ pageSize: 5 }}
      />
    </ConfigProvider>
  );
}

export default Services;
