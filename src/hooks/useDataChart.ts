import { DateTime } from "luxon";
import { Category, ChartData } from "../interface";

interface useDataChartProps {
  amount: number;
  createdAt: number;
  categories: Category[];
}

export const useDataChart = ({
  amount,
  createdAt,
  categories,
}: useDataChartProps) => {
  let data: ChartData[] = [
    {
      name: DateTime.fromMillis(createdAt).toFormat("dd-MM-yyyy"),
      transaction: 0,
      remaning: amount,
    },
  ];
  data.push(
    ...categories.reduce((acc: ChartData[], curr) => {
      curr.transactions.forEach((transaction) => {
        acc.push({
          name: DateTime.fromMillis(Number(transaction.createdAt)).toFormat(
            "dd-MM-yyyy"
          ),
          transaction: transaction.amount,
          remaning: data[data.length - 1].remaning - transaction.amount,
        });
      });
      return acc;
    }, [])
  );

  const dataTable = categories.reduce((acc: string[][], curr) => {
    curr.transactions.forEach((transaction) => {
      acc.push([
        curr.name,
        transaction.amount.toString(),
        DateTime.fromMillis(Number(transaction.createdAt)).toFormat(
          "dd-MM-yyyy"
        ),
      ]);
    });
    return acc;
  }, []);

  return { data, dataTable };
};
