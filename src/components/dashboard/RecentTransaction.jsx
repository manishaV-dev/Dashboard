import React from "react";
import { FiArrowUpRight, FiDollarSign, FiMoreHorizontal } from "react-icons/fi";

const RecentTransaction = () => {
  return (
    <div className="col-span-12 p-4 rounded border border-gray-500">
      <div className="mb-4 flex items-center justify-between">
        <h3 className="flex items-center gap-1.5 font-medium text-gray-100">
          <FiDollarSign /> Recent Transactions
        </h3>
        <button className="text-sm text-yellow-500 hover:underline cursor-pointer">
          See All
        </button>
      </div>

      <table className="w-full table-auto">
        <TableHead />
        <tbody>
          <TableRow
            cusId="#45781"
            sku="Pro 1 Month"
            date="Jan 2nd"
            price="$9.45"
            order="1"
          />
          <TableRow
            cusId="#98176"
            sku="Pro 3 Months"
            date="Feb 25th"
            price="$19.05"
            order="2"
          />
          <TableRow
            cusId="#78156"
            sku="Pro 6 Month"
            date="March 12th"
            price="$90.87"
            order="3"
          />
          <TableRow
            cusId="#15671"
            sku="Pro 1 Month"
            date="Apr 3rd"
            price="$19.05"
            order="4"
          />
          <TableRow
            cusId="#37893"
            sku="Pro 1 Month"
            date="July 13th"
            price="$7.07"
            order="5"
          />
        </tbody>
      </table>
    </div>
  );
};

export default RecentTransaction;

const TableHead = () => {
  return (
    <thead>
      <tr className="text-sm font-normal text-gray-400">
        <th className="text-start p-1.5">Customer ID</th>
        <th className="text-start p-1.5">SKU</th>
        <th className="text-start p-1.5">Date</th>
        <th className="text-start p-1.5">Price</th>
        <th className="w-8"></th>
      </tr>
    </thead>
  );
};

const TableRow = ({ cusId, sku, date, price, order }) => {
  return (
    <tr className={order % 2 ? "bg-gray-600 text-sm" : "text-sm"}>
      <td className="p-1.5">
        <a
          href="#"
          className="text-lime-200 underline flex items-center gap-1"
        >
          {cusId} <FiArrowUpRight />
        </a>
      </td>

      <td className="p-1.5 text-gray-200">{sku}</td>
      <td className="p-1.5 text-gray-200">{date}</td>
      <td className="p-1.5 text-gray-200">{price}</td>
      <td className="w-8">
        <button className="hover:bg-gray-200 hover:text-black transition-colors grid place-content-center rounded text-sm size-8 cursor-pointer text-lime-200">
        <FiMoreHorizontal />
        </button>
        
      </td>
    </tr>
  );
};
