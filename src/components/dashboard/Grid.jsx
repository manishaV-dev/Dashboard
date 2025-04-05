import React from "react";
import { StatCard } from "./StatCard";
import ActivityGraph from "./ActivityGraph";
import UsageRadar from "./UsageRadar";
import RecentTransaction from "./RecentTransaction";

export const Grid = () => {
  return <div className="grid grid-cols-12 px-4 gap-3">
    <StatCard />
    <ActivityGraph />
    <UsageRadar />
    <RecentTransaction />
  </div>;
};
