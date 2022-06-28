import { faCirclePlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useNavigate } from "react-router-dom";
import { useRef, useState } from "react";
import { useShow } from "../hooks";
import { BudgetResponse } from "../interface";
import { BudgetForm } from "./BudgetForm";
import { ProgressBar } from "./ProgressBar";
import { useAnimation } from "../hooks/useAnimation";

interface BudgetCardProps {
  budget?: BudgetResponse;
  lastOne?: boolean;
}

export const BudgetCard = ({ budget, lastOne }: BudgetCardProps) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const [showForm, setShowForm] = useState(false);
  const formRef = useRef<HTMLDivElement>(null);
  const { ChangeVisibility } = useAnimation({ ref: cardRef });
  const navigate = useNavigate();

  useShow({
    ref: cardRef,
    delay: 1,
  });
  if (!lastOne) {
    return (
      <div
        className="w-11/12 p-2 bg-white rounded-md shadow-md cursor-pointer sm:w-9/12 md:w-1/2 lg:w-1/3 xl:w-1/4 hover:bg-gray-100"
        onClick={() => navigate(`/budget/${budget?.id}`)}
        ref={cardRef}
      >
        <div className="flex justify-between">
          <div>
            <h3 className="mt-4 text-2xl font-bold text-tertiary font-nurito">
              {budget!.name}
            </h3>
            <div>
              <p className="text-sm font-bold text-tertiary font-nurito">
                Total Amount: {budget!.amount}
              </p>
              <p className="text-sm font-bold text-tertiary font-nurito">
                Remaining Amount: {budget!.remaining}
              </p>
            </div>
          </div>
          <div className="w-1/3">
            <ProgressBar value={budget!.remaining} maxValue={budget!.amount} />
          </div>
        </div>
      </div>
    );
  }

  if (lastOne) {
    return (
      <div
        className="w-11/12 p-2 bg-white rounded-md shadow-md sm:w-9/12 md:w-1/2 lg:w-1/3 xl:w-1/4 "
        ref={cardRef}
      >
        {showForm ? (
          <BudgetForm
            hideForm={() => ChangeVisibility(() => setShowForm(false))}
          />
        ) : (
          <div className="flex justify-between" ref={formRef}>
            <div>
              <h3 className="mt-4 text-2xl font-bold text-tertiary font-nurito">
                "New Budget"
              </h3>
              <p className="text-sm font-bold text-tertiary font-nurito">
                Add a budget to get started
              </p>
            </div>
            <div className="w-1/3">
              <button
                className="flex items-center justify-center w-full h-full"
                onClick={() => {
                  ChangeVisibility(() => setShowForm(true));
                }}
              >
                <FontAwesomeIcon
                  icon={faCirclePlus}
                  className="transition-colors duration-200 ease-in-out text-8xl text-quaternary hover:text-tertiary"
                />
              </button>
            </div>
          </div>
        )}
      </div>
    );
  }

  return <p>Something happend</p>;
};
