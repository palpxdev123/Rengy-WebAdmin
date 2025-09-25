import { ContactCard } from "../../../../Components";
import { memo } from "react";

interface Props {
  ContactData?: any[];
}

const ContactArea = ({ ContactData }: Props) => {

  return (
    <div className="flex flex-col gap-[24px] pb-[24px]">
      <ContactCard
        title="Vendor Contacts"
        viewAllAction={() => ""}
        items={ContactData}
      />
      <ContactCard
        title="Delivery Partner Contacts"
        viewAllAction={() => ""}
        items={ContactData}
      />
      <ContactCard
        title="Finance & Banks Contacts"
        viewAllAction={() => ""}
        items={ContactData}
      />
    </div>
  );
};

// Memoize component
export default memo(ContactArea);
