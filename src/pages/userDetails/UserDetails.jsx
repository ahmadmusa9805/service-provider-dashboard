import { ConfigProvider, Table } from "antd";
import { useState } from "react";
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
  },
  {
    key: "6",
    no: "6",
    name: "Mr. Raju",
    date: "12/02/2025",
    phone: "+880 1340560614",
    email: "mrraju@gmail.com",
    location: "Banasree, Dhaka, Bangladesh",
  },
  {
    key: "7",
    no: "7",
    name: "Mr. Raju",
    date: "12/02/2025",
    phone: "+880 1340560614",
    email: "mrraju@gmail.com",
    location: "Banasree, Dhaka, Bangladesh",
  },
  {
    key: "8",
    no: "8",
    name: "Mr. Raju",
    date: "12/02/2025",
    phone: "+880 1340560614",
    email: "mrraju@gmail.com",
    location: "Banasree, Dhaka, Bangladesh",
  },
  {
    key: "9",
    no: "9",
    name: "Mr. Raju",
    date: "12/02/2025",
    phone: "+880 1340560614",
    email: "mrraju@gmail.com",
    location: "Banasree, Dhaka, Bangladesh",
  },
  {
    key: "10",
    no: "10",
    name: "Mr. Raju",
    date: "12/02/2025",
    phone: "+880 1340560614",
    email: "mrraju@gmail.com",
    location: "Banasree, Dhaka, Bangladesh",
  },
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

function UserDetails() {
    const [toggle, setToggle] = useState(false);
  
  return  <div>
        <div>
          <div className="flex gap-2">
            <div className="flex items-center gap-[10px]">
              <div
                className={` w-[35px] h-[35px] border border-[#3B9DF8]  rounded-full flex items-center justify-center cursor-pointer `}
                onClick={() => setToggle(!toggle)}
              >
                <div
                  className={`${
                    toggle
                      ? "bg-[#3B9DF8] scale-[1]"
                      : "bg-transparent scale-[0.7]"
                  } w-[21px] h-[21px] transition-all duration-200 rounded-full `}
                ></div>
              </div>
              <p
                className="text-[1.2rem] font-bold text-text cursor-pointer"
                onClick={() => setToggle(!toggle)}
              >
                All User
              </p>
            </div>
            <div className="flex items-center gap-[10px]">
              <div
                className={` w-[35px] h-[35px] border border-[#3B9DF8]  rounded-full flex items-center justify-center cursor-pointer `}
                onClick={() => setToggle(!toggle)}
              >
                <div
                  className={`${
                    toggle
                      ? "bg-[#3B9DF8] scale-[1]"
                      : "bg-transparent scale-[0.7]"
                  } w-[21px] h-[21px] transition-all duration-200 rounded-full `}
                ></div>
              </div>
              <p
                className="text-[1.2rem] font-bold text-text cursor-pointer"
                onClick={() => setToggle(!toggle)}
              >
                Service Provider
              </p>
            </div>
          </div>
        </div>
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
      </div>
}

export default UserDetails;
