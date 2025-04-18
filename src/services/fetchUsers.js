const fetchUsers = async ({
  page = 1,
  search = "",
  sortField = "id",
  sortOrder = "asc",
}) => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  let users = await res.json();

  users = search
    ? users.filter(
        (user) =>
          user.name.toLowerCase().includes(search.toLowerCase()) ||
          user.email.toLowerCase().includes(search.toLowerCase())
      )
    : users;

  users.sort((a, b) => {
    const aVal = sortField === "id" ? a[sortField] : a[sortField].toLowerCase();
    const bVal = sortField === "id" ? b[sortField] : b[sortField].toLowerCase();
    if (aVal < bVal) return sortOrder === "asc" ? -1 : 1;
    if (aVal > bVal) return sortOrder === "asc" ? 1 : -1;
    return 0;
  });

  const totalPages = users.length / 5;
  const start = (page - 1) * 5;
  const paginated = users.slice(start, start + 5);

  return { users: paginated, totalPages };
};

export { fetchUsers };
