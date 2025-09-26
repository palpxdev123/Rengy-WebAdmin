import { Table } from "antd";
import '../../styles/_utilities.scss'
import Input from "../Input";
import SelectComponent from "../Select";

interface props {
    dataSource: any[],
    columns: any[],
    header: boolean
}

const TableComponent = ({dataSource, columns, header}: props) => {
  return (
    <div className="bg-main-secondary">
        {header && <div className="h-[60px] px-[20px] py-[12px] flex justify-between">
            <Input search className="!w-[250px] text-seven h-[36px]" placeholder="Search Requests" />
            <article className="flex gap-[12px]">
                <SelectComponent options={[{label:"All Roles", value: "all_roles"}]} value={"all_roles"} />
                <SelectComponent options={[{label:"All Status", value: "all_status"}]} value={"all_status"} />
            </article>
        </div>}
        <Table dataSource={dataSource} columns={columns} className="rengy-app" />
    </div>
  );
};

export default TableComponent;
