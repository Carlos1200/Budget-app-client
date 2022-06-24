import { Helmet } from "react-helmet-async";

export const Dashboard = () => {
  return (
    <div>
      <Helmet>
        <title>Dashboard</title>
        <meta name="description" content="Dashboard" />
      </Helmet>
      <h1 className="">Dashboard</h1>
    </div>
  );
};
