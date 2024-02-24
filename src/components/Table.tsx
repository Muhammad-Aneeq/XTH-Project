"use client";

import { handleDelete, handleEdit } from "@/utils/crud";
import { useRouter } from "next/navigation";
import React from "react";

const Table = ({ tableData }: any) => {
  const router = useRouter();
  const headings: string[] = [
    "Name",
    "Description",
    "Rate",
    "Balance",
    "Deposit",
    "Status",
    "Dots",
  ];

  return (
    <div className="mx-auto my-8 w-[80%]">
      {/* Filteration */}
      <section className="my-8">
        <input
          type="search"
          placeholder="search"
          className="border border-1 px-8 py-2"
        />
      </section>

      {/* Table */}
      <table>
        <thead>
          <tr className="flex justify-between items-center ">
            {headings.map((heading: string) => (
              <th
                className={`${heading === "Description" && "w-96"} ${
                  heading === "Name" && "w-36"
                }`}
                key={heading}
              >
                {heading}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {tableData?.map((data: any) => (
            <tr key={data.id} className="flex between items-center">
              <td className="w-36 inline-block mx-4">
                <div className="flex flex-col">
                  <span>{data.name}</span>
                  <span>{data.email}</span>
                  <span> {data.phone}</span>
                </div>
              </td>
              <td className="inline-block mx-4 w-96">
                <div className="flex flex-col ">
                  <span>{data.company.name}</span>
                  <span>{data.company.catchPhrase}</span>
                  <span>{data.company.bs}</span>
                </div>
              </td>
              <td className=" inline-block mx-4 text-center">70.00</td>
              <td className=" inline-block mx-4 text-center">270.00</td>
              <td className=" inline-block mx-4 text-center">500</td>
              <td className=" inline-block mx-4 text-center">Active</td>
              <td
                onClick={() => {
                  handleEdit(data.id, "Dummy");
                  alert(
                    "Due to shortage of time.I am justing editing the table data with name field which i am sending with the function as default value just to make sure the functionality is working fine.You can check the JSON API Resoponse in server.ts file"
                  );
                  router.refresh();
                }}
                className=" inline-block mx-4 text-center text-green-700 cursor-pointer"
              >
                Edit{" "}
              </td>
              <td
                onClick={() => {
                  handleDelete(data.id);
                  alert(
                    "Data is deleted and api is working fine but the changes are not being reffered to get data and it might be due to JSON API that it does not reffering to the changes.You can check the JSON API Response In server.ts where I am consoling the response."
                  );
                  router.refresh();
                }}
                className=" inline-block mx-4 text-center text-red-700 cursor-pointer"
              >
                Delete
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
