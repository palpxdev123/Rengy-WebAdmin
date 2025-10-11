import {
  ActiveUser,
  Loan,
  Profile,
  totalUser,
  Vendor,
} from "../../../assets/Images";
import {
  Buttoncomponent,
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
import { useFormik } from "formik";
import * as yup from "yup";

interface DataType {
  key: string;
  user: string;
  role: string;
  department: string;
  status: "Active" | "Inactive";
  lastLogin: string;
}

interface FormikInitial {
  full_name: string;
  email: string;
  role: string;
  department: string;
  phone_number: string;
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

  const initialValues: FormikInitial = {
    full_name: "",
    email: "",
    role: "",
    department: "",
    phone_number: "",
  };

  const validationSchema = yup.object().shape({
    full_name: yup?.string()?.required("Full name is required"),
    email: yup?.string()?.email()?.required("email is required"),
    role: yup?.string()?.required("role is required"),
    department: yup?.string()?.required("Department is required"),
    phone_number: yup?.string()?.required("Phone Number is required"),
  });

  const { values, setFieldValue, handleSubmit, handleChange, errors, touched } =
    useFormik<FormikInitial>({
      initialValues: initialValues,
      validationSchema: validationSchema,
      onSubmit: () => console.log("value"),
    });

  // console.log(values, "formik Value", errors, touched);

  return (
    <PageLayout
      title={"User Management"}
      header2={true}
      DashboardCardvalue={DashboardCardvalue}
      ContactData={ContactData}
      footer={
        <div className="absolute bottom-0 px-[24px] py-[12px] bg-main-secondary w-[58%] flex justify-end">
          <Buttoncomponent type="primary" label={"Add User"} />
        </div>
      }
    >
      <TableComponent dataSource={dataSource} columns={columns} header={true} />
      <Popup
        title="Update User Information & Persmission"
        open={open}
        setOpen={setOpen}
        Footer={true}
        footerLeftButtonlabel="Cancel"
        footerRightButtonlabel="Update User"
        footerRightButtonOnclick={() => handleSubmit()}
        className="w-max"
      >
        <div className="grid grid-cols-2 gap-[16px]">
          <Input
            label="Full Name"
            name="full_name"
            onChange={handleChange}
            value={values?.full_name}
            mandatory={true}
            error={errors && touched && errors?.full_name}
            inputClass="w-[282px]"
          />
          <Input
            label="Email Address"
            name="email"
            onChange={handleChange}
            value={values?.email}
            mandatory={true}
            inputClass="w-[282px]"
            error={errors && touched && errors?.email}
          />
          <SelectComponent
            label="Role"
            name="role"
            onChange={(name, value) => setFieldValue(name, value)}
            value={values?.role || null}
            mandatory={true}
            selectClass="w-[282px] "
            placeholder="Please select"
            options={[
              { label: "Loan Officer", value: "loan_officer" },
              { label: "Operation Manger", value: "operational_manager" },
              { label: "Super Admin", value: "super_admin" },
            ]}
            error={errors && touched && errors?.role}
          />
          <Input
            label="Department"
            name="department"
            onChange={handleChange}
            value={values?.department}
            mandatory={true}
            inputClass="w-[282px]"
            error={errors && touched && errors?.department}
          />
          <Input
            label="Phone Number"
            name="phone_number"
            onChange={handleChange}
            value={values?.phone_number}
            mandatory={true}
            inputClass="w-[282px]"
            error={errors && touched && errors?.phone_number}
          />
        </div>
      </Popup>
    </PageLayout>
  );
};

export default UserManagement;
