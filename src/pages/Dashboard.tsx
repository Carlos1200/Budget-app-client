import { useQuery } from "@apollo/client";
import { Helmet } from "react-helmet-async";
import { Toaster, toast } from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";
import { BudgetCard, Loading, ProgressBar } from "../components";
import { BUDGET_QUERY } from "../graphql";
import { BudgetResponse } from "../interface";
import { RootState } from "../store";
import { setBudgets } from "../store/slices/budget";
import { useRef } from "react";
import { useShow } from "../hooks";

export const Dashboard = () => {
  const h1Ref = useRef<HTMLDivElement>(null);
  const h2Ref = useRef<HTMLDivElement>(null);
  useShow({
    ref: h1Ref,
    delay: 0,
  });
  useShow({
    ref: h2Ref,
    delay: 0.5,
  });

  const {
    auth: { name },
    budgets: { loading, budgets },
  } = useSelector((state: RootState) => state);
  const dispatch = useDispatch();
  useQuery<{ getBudgetsByUser: BudgetResponse[] }>(BUDGET_QUERY, {
    onError(error) {
      toast.error(error.message);
    },
    onCompleted(data) {
      dispatch(setBudgets(data.getBudgetsByUser));
    },
  });
  return (
    <div className="ml-4">
      <Helmet>
        <title>Dashboard</title>
        <meta name="description" content="Dashboard" />
      </Helmet>
      <div className="border-b border-tertiary/50">
        <h1
          className="mt-4 ml-4 text-3xl font-bold text-tertiary font-nurito lg:ml-0"
          ref={h1Ref}
        >
          Hello, {name}!
        </h1>
        <Toaster position="top-right" />
      </div>
      <div>
        <h2
          className="my-4 ml-4 text-2xl font-bold text-tertiary font-nurito lg:ml-0"
          ref={h2Ref}
        >
          Your Budgets
        </h2>
        <div className="flex flex-wrap gap-2 ">
          {loading ? (
            <Loading />
          ) : (
            budgets.map((budget) => (
              <BudgetCard budget={budget} key={budget.id} />
            ))
          )}
          {budgets.length < 4 && <BudgetCard lastOne />}
        </div>
      </div>
    </div>
  );
};
