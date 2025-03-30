import React from "react";
import { FiEye } from "react-icons/fi";
import {
  Radar,
  RadarChart,
  PolarGrid,
  Legend,
  PolarAngleAxis,
  PolarRadiusAxis,
  ResponsiveContainer,
  Tooltip,
} from "recharts";

const data = [
  {
    feature: "Tracking",
    mobile: 12,
    desktop: 110,
    max: 150,
  },
  {
    feature: "Biulder",
    mobile: 130,
    desktop: 90,
    max: 150,
  },
  {
    feature: "Schedule",
    mobile: 86,
    desktop: 130,
    max: 150,
  },
  {
    feature: "AI Train",
    mobile: 125,
    desktop: 40,
    max: 150,
  },
  {
    feature: "Interval",
    mobile: 148,
    desktop: 90,
    max: 150,
  },
];

const UsageRadar = () => {
  return (
    <div className="col-span-4 overflow-hidden rounded border border-gray-500">
      <div className="p-4">
        <h3 className="flex items-center gap-1.5 font-medium text-white">
          <FiEye /> Usage
        </h3>
      </div>

      <div className="h-64 px-4">
        <ResponsiveContainer width="100%" height="100%">
          <RadarChart cx="50%" cy="50%" outerRadius="80%" data={data}>
            <PolarGrid />
            <PolarAngleAxis className="text-xs font-bold" dataKey="feature" />
            <PolarRadiusAxis angle={30} domain={[0, 150]} />
            <Radar
              name="Mobile"
              dataKey="mobile"
              stroke="#8884d8"
              fill="#8884d8"
              fillOpacity={0.6}
            />
            <Radar
              name="Desktop"
              dataKey="desktop"
              stroke="#82ca9d"
              fill="#82ca9d"
              fillOpacity={0.6}
            />
            <Tooltip
              wrapperClassName="text-sm rounded"
              labelClassName="text-xs text-gray-500"
            />
            <Legend />
          </RadarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default UsageRadar;
