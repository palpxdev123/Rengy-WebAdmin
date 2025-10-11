import { Table } from "antd";
import "../../styles/_utilities.scss";
import Input from "../Input";
import SelectComponent from "../Select";
import "./style.scss";

interface props {
  dataSource: any[];
  columns: any[];
  header?: boolean;
  handleRowSelction: ({}) => void;
  pagination?: any;
}

const TableComponent = ({
  dataSource,
  columns,
  header,
  handleRowSelction,
  pagination = false,
}: props) => {
  return (
    <div className="bg-main-secondary">
      {header && (
        <div className="px-[20px] py-[12px] flex justify-between">
          <Input
            search
            name="headerInpu"
            size="small"
            inputClass="!w-[250px] text-seven h-[36px]"
            placeholder="Search Requests"
          />
          <article className="flex gap-[12px]">
            <SelectComponent
              selectClass="text-seven select-text"
              onChange={() => ""}
              size="small"
              options={[{ label: "All Roles", value: "all_roles" }]}
              value={"all_roles"}
              name="headerSelect"
            />
            <SelectComponent
              selectClass="text-seven select-text"
              onChange={(name, value) => console.log(name, value)}
              size="small"
              options={[
                { label: "All Status", value: "all_status" },
                { label: "All Statussdfs", value: "all_statussdfs" },
              ]}
              value={"all_status"}
              name="headerSelect"
            />
          </article>
        </div>
      )}
      <Table
        dataSource={dataSource}
        columns={columns}
        className="rengy-app"
        rowSelection={{
          type: "checkbox",
          onChange(selectedRowKeys, selectedRows, info) {
            handleRowSelction({ selectedRowKeys, selectedRows });
          },
        }}
        pagination={pagination}
        onRow={() => ({
          style: {
            // height: 40,
            maxWidth: 96,
            // whiteSpace: "nowrap",
            // overflow: "hidden",
            // textOverflow: "ellipsis",
          },
        })}
      />
    </div>
  );
};

export default TableComponent;
