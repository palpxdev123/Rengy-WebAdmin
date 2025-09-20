import "../../Styles/index.scss";
import './style.scss';
const Dashboard = () => {
  return (
    <div className={`text-primary`}>
      <div className="bg-[green] w-[100px] h-[100px] ">

        <div className="w-[40px] h-[40px] bg-[red] absolute"></div>
        <div className="w-[40px] h-[40px] bg-[blue] absolute"></div>

      </div>
    </div>
  )
}

export default Dashboard