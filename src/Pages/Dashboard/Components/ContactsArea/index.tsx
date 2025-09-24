import { ContactCard } from '../../../../Components'

interface props{
    ContactData: any[]
}


const ContactArea = ({ContactData}:props) => {
  return (
   <div className='flex flex-col gap-[24px] pb-[24px]'>
         <ContactCard title={"Vendor Contacts"} viewAllAction={()=>""} items={ContactData} />
         <ContactCard title={"Delivery Partner Contacts"} viewAllAction={()=>""} items={ContactData} />
         <ContactCard title={"Finance & Banks Contacts"} viewAllAction={()=>""} items={ContactData} />

   </div>
  )
}

export default ContactArea