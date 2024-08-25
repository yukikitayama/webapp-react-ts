import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const data = [
  {
    name: "202401",
    performance: 1,
    concert: 1,
  },
  {
    name: "202402",
    performance: 1,
    concert: 1,
  },
  {
    name: "202403",
    performance: 1,
    concert: 1,
  },
  {
    name: "202404",
    performance: 1,
    concert: 1,
  },
  {
    name: "202405",
    performance: 1,
    concert: 2,
  },
  {
    name: "202406",
    performance: 3,
    concert: 1,
  },
  {
    name: "202407",
    performance: 1,
    concert: 0,
  },
];

const Metric = () => {
  return (
    <ResponsiveContainer width="100%" height={250}>
      <BarChart
        data={data}
        margin={{
          top: 5,
          right: 30,
          left: 20,
          bottom: 5,
        }}
      >
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar type="monotone" dataKey="performance" fill="#8884d8" />
        <Bar type="monotone" dataKey="concert" fill="#82ca9d" />
      </BarChart>
    </ResponsiveContainer>
  );
};

export default Metric;
