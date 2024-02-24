import { deleteTableData, editTableData } from "@/app/server";

export const handleEdit = async (user_id: number, name: string) => {
  const res = await editTableData(user_id, name);
  console.log("res>>>>", res);
  return res;
};

export const handleDelete = async (user_id: number) => {
  const res = await deleteTableData(user_id);
  console.log("res>>>>", res);
  return res;
};
