import Table from "@/components/Table";
import { fetchTableData } from "./server";

export default async function Home() {
  const data = await fetchTableData();
  console.log("data>>>>", data);
  return <Table tableData={data} />;
}
