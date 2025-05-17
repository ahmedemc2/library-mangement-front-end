import Sidebar from "./components/Sidebar";
import OrderTable from "./components/OrderTable";
import Header from "./components/Header";

const Dashboard = () => {
  return (
    <div className="flex">
      <Sidebar />
      <main className="flex-1 p-6 bg-gray-50">
        <Header />
        <OrderTable />
      </main>
    </div>
  );
};

export default Dashboard;
