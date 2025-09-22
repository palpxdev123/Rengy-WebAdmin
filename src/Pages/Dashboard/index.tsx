import PageLayout from "../../Components/PageLayout";
import "../../Styles/index.scss";
import FlatCard from "./Components/Cards";
import './style.scss';
const Dashboard = () => {
  return (
    <PageLayout title={"tatat"}>
      <p>hi</p>
      <FlatCard value={1765} percentage={-8.2} label="New Signups"/>
    </PageLayout>
  )
}

export default Dashboard