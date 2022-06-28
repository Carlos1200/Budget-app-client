import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

interface ProgressBarProps {
  value: number;
  maxValue: number;
}

export const ProgressBar = ({ value, maxValue }: ProgressBarProps) => {
  const percentage = Number(((value / maxValue) * 100).toFixed(2));
  console.log(percentage);

  const color =
    percentage > 80 ? "#00A8CC" : percentage > 50 ? "orange" : "red";
  return (
    <CircularProgressbar
      value={value}
      maxValue={maxValue}
      text={`${percentage}%`}
      strokeWidth={8}
      styles={{
        text: {
          fill: color,
          fontWeight: "bold",
          fontSize: "1.5rem",
          fontFamily: "Nurito",
        },
        path: {
          stroke: color,
        },
      }}
    />
  );
};
