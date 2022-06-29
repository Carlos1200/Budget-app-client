import { useQuery } from "@apollo/client";
import { Helmet } from "react-helmet-async";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { Grid } from "gridjs-react";
import { BUDGETID_QUERY } from "../graphql";
import { BudgetIDResponse } from "../interface";
import { RootState } from "../store";
import { setBudgetId } from "../store/slices/budget/budgetIdSlice";
import { Loading, MyChart, ShapeDivider, Table } from "../components";
import { useDataChart } from "../hooks";

export const Budget = () => {
  let params = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  let budgetId = params.id?.match(/\d+/);
  if (!budgetId) {
    navigate("/not-found");
  }
  useQuery<BudgetIDResponse, { getBudgetId: number }>(BUDGETID_QUERY, {
    variables: { getBudgetId: Number(budgetId) },
    onCompleted(data) {
      dispatch(setBudgetId(data.getBudget));
    },
    onError(error) {
      console.log({ error });
    },
  });
  return <ValidatedBudgetId />;
};

const ValidatedBudgetId = () => {
  const { name, categories, amount, createdAt, loading } = useSelector(
    (state: RootState) => state.budgetId
  );
  //   create a data array for the chart
  const { data, dataTable } = useDataChart({
    categories,
    amount,
    createdAt: Number(createdAt),
  });

  if (loading) {
    return (
      <div className="h-screen bg-secondary">
        <div className="flex items-center justify-center h-full">
          <Loading />
        </div>
      </div>
    );
  }

  return (
    <div>
      <Helmet>
        <title>{name} Budget</title>
        <meta name="description" content={`${name} budget detail`} />
      </Helmet>
      <div className="pt-4 bg-slate-900 ">
        <h1 className="mb-4 text-4xl text-center text-white font-nurito ">
          {name} Budget
        </h1>
        <div className="flex items-center justify-center ">
          <MyChart data={data} maxValue={amount} />
        </div>
        <ShapeDivider />
      </div>
      <div className="mx-5 my-5">
        <Table data={dataTable} columns={["Category", "Amount", "Date"]} />
      </div>
    </div>
  );
};
