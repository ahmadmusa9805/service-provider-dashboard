import { ConfigProvider, Table } from "antd";
import { MdArrowOutward } from "react-icons/md";

const dataSource = [
  {
    key: "1",
    no: "1",
    name: "Mr. Raju",
    date: "12/02/2025",
    phone: "+880 1340560614",
    email: "mrraju@gmail.com",
    location: "Banasree, Dhaka, Bangladesh",
  },
  {
    key: "2",
    no: "2",
    name: "Mr. Raju",
    date: "12/02/2025",
    phone: "+880 1340560614",
    email: "mrraju@gmail.com",
    location: "Banasree, Dhaka, Bangladesh",
  },
  {
    key: "3",
    no: "3",
    name: "Mr. Raju",
    date: "12/02/2025",
    phone: "+880 1340560614",
    email: "mrraju@gmail.com",
    location: "Banasree, Dhaka, Bangladesh",
  },
  {
    key: "4",
    no: "4",
    name: "Mr. Raju",
    date: "12/02/2025",
    phone: "+880 1340560614",
    email: "mrraju@gmail.com",
    location: "Banasree, Dhaka, Bangladesh",
  },
  {
    key: "5",
    no: "5",
    name: "Mr. Raju",
    date: "12/02/2025",
    phone: "+880 1340560614",
    email: "mrraju@gmail.com",
    location: "Banasree, Dhaka, Bangladesh",
  }
];

const columns = [
  {
    title: "No",
    dataIndex: "no",
    key: "no",
  },
  {
    title: "Name",
    dataIndex: "name",
    key: "name",
  },
  {
    title: "Date",
    dataIndex: "date",
    key: "date",
  },
  {
    title: "Phone Number",
    dataIndex: "phone",
    key: "phone",
  },
  {
    title: "Email",
    dataIndex: "email",
    key: "email",
  },
  {
    title: "Location",
    dataIndex: "location",
    key: "location",
  },
  {
    title: "Action",
    key: "action",
    render: () => (
      <button className="">
        <MdArrowOutward className="text-[#4289FF] w-10 h-10" />
      </button>
    ),
  },
];

const RecentUsers = () => {
  return (
    <>
      <ConfigProvider
        theme={{
          components: {
            InputNumber: {
              activeBorderColor: "rgb(19,194,194)",
            },
            Pagination: {
              colorPrimaryBorder: "rgb(19,194,194)",
              colorBorder: "rgb(19,194,194)",
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
        <Table dataSource={dataSource} columns={columns} pagination={false} />
      </ConfigProvider>
    </>
  );
};

export default RecentUsers;
