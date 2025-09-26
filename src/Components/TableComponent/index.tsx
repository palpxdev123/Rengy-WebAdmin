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
        {header && <div className="px-[20px] py-[12px] flex justify-between">
            <Input search name="headerInpu" size="small" inputClass="!w-[250px] text-seven h-[36px]" placeholder="Search Requests" />
            <article className="flex gap-[12px]">
                <SelectComponent selectClass="text-seven select-text" onChange={()=>""} size="small" options={[{label:"All Roles", value: "all_roles"}]} value={"all_roles"} name="headerSelect" />
                <SelectComponent selectClass="text-seven select-text" onChange={(name, value)=>console.log(name, value)} size="small" options={[{label:"All Status", value: "all_status"}, {label:"All Statussdfs", value: "all_statussdfs"}]} value={"all_status"} name="headerSelect" />
            </article>
        </div>}
        <Table dataSource={dataSource} columns={columns} className="rengy-app" />
    </div>
  );
};

export default TableComponent;
