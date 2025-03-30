import React from "react";
import { FiTrendingDown, FiTrendingUp } from "react-icons/fi";

export const StatCard = () => {
  return (
    <>
      <Card
        title="Gross Revenue"
        value="$120,054.24"
        pillText="2.75%"
        trend="up"
        period="From Jan 1st - Jul 31st"
      />
      <Card
        title="Avg Order"
        value="$27.97"
        pillText="1.01%"
        trend="down"
        period="From Jan 1st - Jul 31st"
      />
      <Card
        title="Trailing Year"
        value="$278,054.24"
        pillText="60.75%"
        trend="up"
        period="Previous 365 days"
      />
    </>
  );
};

const Card = ({ title, value, pillText, trend, period }) => {
  return (
    <div className="p-3 bg-gray-700 col-span-4 rounded border-gray-300">
      <div className="flex mb-8 text-start justify-between">
        <div>
          <h3 className="text-white mb-2 text-sm">{title}</h3>
          <p className="text-lg lg:text-xl font-semibold text-amber-200">
            {value}
          </p>
        </div>
        <div>
          <span
            className={`text-xs flex items-center gap-1 font-medium px-1 py-0.5 rounded ${
              trend === "up"
                ? "bg-green-100 text-green-700"
                : "bg-red-100 text-red-700"
            }`}
          >
            {" "}
            {trend === "up" ? <FiTrendingUp /> : <FiTrendingDown />} {pillText}
          </span>
        </div>
      </div>

      <div className="text-xs text-gray-300">{period}</div>
    </div>
  );
};
