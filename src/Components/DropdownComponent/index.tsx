import { Dropdown, type MenuProps } from 'antd'
import { useState } from 'react'
import { HiDotsHorizontal } from 'react-icons/hi'
import './style.scss'


interface props {
options: any[],
onSelect: (value: string)=>void,
trigger: any
}

const DropdownComponent = ({options, onSelect, trigger}:props) => {
    const [open, setopen] = useState(false)

    const menu: MenuProps = {
    items: options.map((opt) => ({
      key: opt.value,
      label: (
        <div className={`${opt?.value === "delete" && "decrease-color"}  flex gap-[8px] items-center dropdown-rengy`}>
            {opt?.icons}
            {opt?.label}
        </div>
      ), 
    })),
    onClick: (info) => {
      onSelect?.(info.key); 
    },
  };
  return (
    <Dropdown className='dropdown-rengy' menu={menu} open={open} trigger={[trigger]} onOpenChange={(flag) => setopen(flag)} >

        <div onClick={()=>setopen(true)} className='cursor-pointer flex justify-center'>
            <HiDotsHorizontal />
        </div>

    </Dropdown>
  )
}

export default DropdownComponent