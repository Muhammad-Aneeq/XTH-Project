export const fetchTableData = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  return res.json();
};

export const editTableData = async (user_id: number, name: string) => {
  //for now will just try to edit the user by name cause of limited time
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/users/${user_id}`,
    {
      method: "PATCH",
      body: JSON.stringify(name),
    }
  );

  if (res.ok) {
    console.log("res>>>", res);
    return { message: "user edittted successfully!" };
  }
};

export const deleteTableData = async (user_id: number) => {
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/users/${user_id}`,
    {
      method: "DELETE",
    }
  );

  if (res.ok) {
    console.log("res>>>", res);
    return { message: "user deletted successfully!" };
  }
};
