import SearchUsers from "@/components/SearchUsers";
import UsersPage from "@/components/UsersPage";
import { fetchUsers } from "@/services/fetchUsers";

async function Home({ searchParams }) {
  const params = await searchParams;
  const search = params?.search || "";
  const page = +params?.page || 1;
  const sortField = params?.sortField || "id";
  const sortOrder = params?.sortOrder || "asc";

  const { users, totalPages } = await fetchUsers({
    page,
    search,
    sortField,
    sortOrder,
  });
  return (
    <div className="container h-screen mx-auto p-4">
      <div className="flex max-w-3xl justify-center m-auto gap-77 align-center mt-20 mb-10">
        <h1 className="justify-center text-3xl">User's List</h1>
        <SearchUsers search={search} />
      </div>
      <UsersPage
        users={users}
        totalPages={totalPages}
        search={search}
        page={page}
        sortField={sortField}
        sortOrder={sortOrder}
      />
    </div>
  );
}

export default Home;
