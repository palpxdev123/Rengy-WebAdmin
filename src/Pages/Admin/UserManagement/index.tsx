import {
  ActiveUser,
  Loan,
  Profile,
  totalUser,
  Vendor,
} from "../../../assets/Images";
import {
  DropdownComponent,
  Input,
  Popup,
  SelectComponent,
  TableComponent,
} from "../../../Components";
import PageLayout from "../../../Components/PageLayout";
import { formatDate } from "../../../../Utils/CommonFunctions";
import { FiEdit2 } from "react-icons/fi";
import { LuUserRoundX } from "react-icons/lu";
import { AiOutlineDelete } from "react-icons/ai";
import { useState } from "react";

interface DataType {
  key: string;
  user: string;
  role: string;
  department: string;
  status: "Active" | "Inactive";
  lastLogin: string;
}

const UserManagement = () => {
  const [open, setOpen] = useState(false);

  const handleDropdown = (value: string) => {
    switch (value) {
      case "edit":
        setOpen(true);
    }
  };
  const roleColor: any = {
    Admin: "role-admin ",
    Vendor: "role-vendor ",
    "Operation Manager": "role-operation-manager ",
    "Loan Officer": "role-loan-officer ",
  };

  const DashboardCardvalue = [
    {
      value: "04",
      label: "Total User",
      imageSource: totalUser,
    },
    {
      value: "03",
      label: "Active Users",
      imageSource: ActiveUser,
    },
    {
      value: "01",
      label: "Loan Officers",
      imageSource: Loan,
    },
    {
      value: "01",
      label: "Vendors",
      imageSource: Vendor,
    },
  ];
  const dataSource: DataType[] = [
    {
      key: "1",
      user: "John Doe",
      role: "Admin",
      department: "Loan Processing",
      status: "Active",
      lastLogin: "2025-09-22 14:30",
    },
    {
      key: "2",
      user: "Jane Smith",
      role: "Vendor",
      department: "Operations",
      status: "Inactive",
      lastLogin: "2025-09-20 09:15",
    },
    {
      key: "2",
      user: "Jane Smith",
      role: "Loan Officer",
      department: "Solar Pro Equipment",
      status: "Inactive",
      lastLogin: "2025-09-20 09:15",
    },
    {
      key: "2",
      user: "Jane Smith",
      role: "Operation Manager",
      department: "Administartion",
      status: "Inactive",
      lastLogin: "2025-09-20 09:15",
    },
  ];

  const columns = [
    {
      title: "User",
      dataIndex: "user",
      key: "user",
      className: "text-two",
    },
    {
      title: "Role",
      dataIndex: "role",
      key: "role",
      render: (_: any, record: any) => {
        return (
          <div
            className={`${
              roleColor[record?.role]
            } flex justify-center items-center rounded-[40px] py-[4px] px-[8px] w-max text-five`}
          >
            {record?.role}
          </div>
        );
      },
    },
    {
      title: "Department",
      dataIndex: "department",
      key: "department",
      className: "text-two",
    },
    {
      title: "Status",
      dataIndex: "status",
      key: "status",
      render: (_: any, record: any) => {
        return (
          <div
            className={`${
              record?.status === "Active" ? "status-active" : "status-inactive"
            } flex justify-center items-center rounded-[40px] py-[4px] px-[8px] w-max text-five`}
          >
            {record?.status}
          </div>
        );
      },
    },
    {
      title: "Last Login",
      dataIndex: "lastLogin",
      className: "text-two",
      key: "lastLogin",
      render: (record: any) => formatDate(record?.lastLogin),
    },
    {
      title: "Actions",
      key: "actions",

      align: "center",
      render: (_: any, record: any) => {
        return (
          <>
            <DropdownComponent
              options={[
                { label: "Edit User", value: "edit", icons: <FiEdit2 /> },
                {
                  label: "Deactivate",
                  value: "deactivate",
                  icons: <LuUserRoundX />,
                },
                {
                  label: "Delete User",
                  value: "delete",
                  icons: <AiOutlineDelete />,
                },
              ]}
              onSelect={handleDropdown}
              trigger="click"
            />
          </>
        );
      },
    },
  ];

  const ContactData = [
    {
      profile_pic: Profile,
      profile_name: "Nagraj",
      phone_number: "+91 9980556655",
      email: "savannah@gmail.com",
    },
    {
      profile_pic: Profile,
      profile_name: "Nagraj",
      phone_number: "+91 9980556655",
      email: "savannah@gmail.com",
    },
    {
      profile_pic: Profile,
      profile_name: "Nagraj",
      phone_number: "+91 9980556655",
      email: "savannah@gmail.com",
    },
    {
      profile_pic: Profile,
      profile_name: "Nagraj",
      phone_number: "+91 9980556655",
      email: "savannah@gmail.com",
    },
    {
      profile_pic: Profile,
      profile_name: "Nagraj",
      phone_number: "+91 9980556655",
      email: "savannah@gmail.com",
    },
  ];

  return (
    <PageLayout
      title={"User Management"}
      header2={false}
      DashboardCardvalue={DashboardCardvalue}
      ContactData={ContactData}
    >
      <TableComponent dataSource={dataSource} columns={columns} header={true} />
      <Popup
        title="Update User Information & Persmission"
        open={open}
        setOpen={setOpen}
        Footer={true}
        footerLeftButtonlabel="Cancel"
        footerRightButtonlabel="Update User"
        footerRightButtonOnclick={() => alert("User Updated")}
        className="w-max"
      >
        <div className="grid grid-cols-2 gap-[16px]">
          <Input
            label="Full Name"
            name="full_name"
            onChange={() => ""}
            value="ramakrishnan"
            mandatory={true}
            error="full name is required"
            inputClass="w-[282px]"
          />
          <Input
            label="Email Address"
            name="email"
            onChange={() => ""}
            value="abc@example.com"
            mandatory={true}
            inputClass="w-[282px]"
            // error="full name is required"
          />
          <SelectComponent
            label="Email Address"
            name="email"
            onChange={(name, value) => console.log(name, value)}
            // value="abc@example.com"
            mandatory={true}
            selectClass="w-[282px] "
            placeholder="Please select"
            options={[
              { label: "John Doe", value: "john" },
              { label: "Jane Smith", value: "jane" },
              { label: "Michael Lee", value: "michael" },
            ]}
          />
        </div>
      </Popup>
    </PageLayout>
  );
};

export default UserManagement;
