import { Grid } from "gridjs-react";
import "gridjs/dist/theme/mermaid.css";

interface TableProps {
  data: string[][];
  columns: string[];
}

export const Table = ({ data, columns }: TableProps) => {
  return (
    <Grid
      data={data}
      columns={columns}
      pagination={{
        enabled: true,
        limit: 5,
      }}
      sort
      style={{
        th: {
          backgroundColor: "#27496D",
          color: "#fff",
        },
        td: {
          backgroundColor: "#142850",
          color: "#fff",
        },
      }}
      className={{
        paginationSummary: "text-white",
        paginationButton: "bg-primary",
        footer: "bg-primary",
        paginationButtonCurrent: "bg-primary",
      }}
    />
  );
};
