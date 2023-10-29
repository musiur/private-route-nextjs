
import PrivateRoute from "@/auth/private";

const Dashboard = () => {
  return (
    <PrivateRoute>
      <div className="container flex flex-col items-center justify-between p-24 gap-10">
        <h1 className="text-4xl font-black">Dashboard</h1>
        <p>This is Dashboard, visible while user logged in!</p>
      </div>
    </PrivateRoute>
  );
};

export default Dashboard;
