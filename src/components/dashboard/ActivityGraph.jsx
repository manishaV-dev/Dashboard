import React from "react";
import { FiUser } from "react-icons/fi";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const data = [
  {
    name: "Jan",
    Returning: 4000,
    New: 2400,
    amt: 2400,
  },
  {
    name: "Feb",
    Returning: 3000,
    New: 1398,
    amt: 2210,
  },
  {
    name: "March",
    Returning: 2000,
    New: 9800,
    amt: 2290,
  },
  {
    name: "April",
    Returning: 2780,
    New: 3908,
    amt: 2000,
  },
  {
    name: "May",
    Returning: 1890,
    New: 4800,
    amt: 2181,
  },
  {
    name: "June",
    Returning: 2390,
    New: 3800,
    amt: 2500,
  },
  {
    name: "July",
    Returning: 3490,
    New: 4300,
    amt: 2100,
  },
];

const ActivityGraph = () => {
  return (
    <div className="col-span-8 overflow-hidden rounded border border-gray-500">
      <div className="p-4">
        <h3 className="flex items-center gap-1.5 font-medium text-white">
          <FiUser /> Activity
        </h3>
      </div>

      {/* Recharts */}

      <div className="h-64 px-4">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart
            width={500}
            height={400}
            data={data}
            margin={{ top: 0, right: 0, left: -14, bottom: 0 }}
          >
            <CartesianGrid stroke="#7c7c7c" />
            <XAxis
              dataKey="name"
              padding={{ right: 4 }}
              axisLine={false}
              tickLine={false}
              className="text-xs font-bold"
            />
            <YAxis
              className="text-xs font-bold"
              axisLine={false}
              tickLine={false}
            />
            <Tooltip wrapperClassName="text-sm rounded" />
            <Line
              type="monotone"
              dataKey="New"
              stroke="#8884d8"
              fill="#8884d8"
            />
            <Line
              type="monotone"
              dataKey="Returning"
              stroke="#82ca9d"
              fill="#82ca9d"
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default ActivityGraph;
