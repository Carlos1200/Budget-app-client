import { useMutation } from "@apollo/client";
import { Formik, Form } from "formik";
import { Toaster, toast } from "react-hot-toast";
import { NEW_BUDGET_MUTATION } from "../graphql";
import { BudgetResponse } from "../interface";
import { BudgetSchema } from "../schema";
import { CustomTextInput } from "./CustomTextInput";
import { useDispatch } from "react-redux";
import { setBudget } from "../store/slices/budget";

interface BudgetFormProps {
  hideForm: () => void;
}

interface BudgetFormValues {
  name: string;
  amount: number;
}

export const BudgetForm = ({ hideForm }: BudgetFormProps) => {
  const [createBudget] = useMutation<
    { createBudget: BudgetResponse },
    { budget: BudgetFormValues }
  >(NEW_BUDGET_MUTATION);
  const dispatch = useDispatch();
  return (
    <Formik
      initialValues={{
        name: "",
        amount: "",
      }}
      validationSchema={BudgetSchema}
      onSubmit={({ name, amount }) => {
        createBudget({
          variables: {
            budget: {
              name,
              amount: parseFloat(amount),
            },
          },
          onError(error) {
            toast.error(error.message);
          },
          onCompleted(data) {
            toast.success("Budget created successfully");
            dispatch(setBudget(data.createBudget));
            hideForm();
          },
        });
      }}
    >
      {() => (
        <Form>
          <div className="flex gap-3">
            <Toaster position="top-right" />
            <div>
              <CustomTextInput
                name="name"
                label="Name"
                placeholder="Enter name"
                labelClassName="text-sm font-nurito font-bold text-quaternary"
              />
            </div>
            <div>
              <CustomTextInput
                name="amount"
                label="Amount"
                placeholder="Enter amount"
                labelClassName="text-sm font-nurito font-bold text-quaternary"
              />
            </div>
          </div>
          <div className="flex justify-end gap-x-2">
            <button
              type="submit"
              className="px-4 py-2 mt-4 font-bold text-white rounded-md bg-secondary hover:bg-primary font-nurito"
            >
              Add
            </button>
            <button
              type="button"
              className="px-4 py-2 mt-4 font-bold text-white rounded-md bg-secondary hover:bg-primary font-nurito"
              onClick={() => {
                hideForm();
              }}
            >
              Cancel
            </button>
          </div>
        </Form>
      )}
    </Formik>
  );
};
