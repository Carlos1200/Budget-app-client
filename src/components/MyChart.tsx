import {
  AreaChart,
  XAxis,
  YAxis,
  Area,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Legend,
} from "recharts";
import { ChartData } from "../interface";
interface IChartProps {
  data: ChartData[];
  maxValue: number;
}
export const MyChart = ({ data, maxValue }: IChartProps) => {
  return (
    <ResponsiveContainer width="90%" height={300}>
      <AreaChart data={data}>
        <defs>
          <linearGradient id="colorPrimary" x1="0" y1="0" x2="0" y2="1">
            <stop offset="5%" stopColor="#5a9201" stopOpacity={0.8} />
            <stop offset="95%" stopColor="#5a9201" stopOpacity={0} />
          </linearGradient>
          <linearGradient id="colorSecondary" x1="0" y1="0" x2="0" y2="1">
            <stop offset="5%" stopColor="#00FFDD" stopOpacity={0.8} />
            <stop offset="95%" stopColor="#00FFDD" stopOpacity={0} />
          </linearGradient>
        </defs>
        <Legend />
        <XAxis
          dataKey="name"
          tick={{ fill: "#fff" }}
          tickLine={{ stroke: "#fff" }}
          dy={10}
        />
        <YAxis
          type="number"
          domain={[0, maxValue + maxValue * 0.05]}
          tick={{ fill: "#fff" }}
          tickLine={{ stroke: "#fff" }}
          dx={-10}
        />
        <CartesianGrid strokeDasharray="3 3" />
        <Tooltip />
        <Area
          type="monotone"
          dataKey="remaning"
          stroke="#00FFDD"
          fill="url(#colorSecondary)"
        />
        <Area
          type="monotone"
          dataKey="transaction"
          stroke="#5a9201"
          fill="url(#colorPrimary)"
        />
      </AreaChart>
    </ResponsiveContainer>
  );
};
