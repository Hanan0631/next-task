"use client";

import { clearUser, selectUser } from "@/features/users/usersSlice";
import { useRouter, useSearchParams } from "next/navigation";
import { useDispatch, useSelector } from "react-redux";
import UserDetails from "./UserDetails";

function UsersPage({ users, totalPages, page, sortField, sortOrder }) {
  const router = useRouter();
  const searchParams = useSearchParams();
  const dispatch = useDispatch();
  const selectedUser = useSelector((state) => state.users.selectedUser);

  const updateQuery = (newParams) => {
    const params = new URLSearchParams(searchParams.toString());
    Object.entries(newParams).forEach(([key, value]) =>
      value ? params.set(key, value) : params.delete(key)
    );
    router.push(`?${params.toString()}`);
  };

  const toggleSort = (field) => {
    const order = field === sortField && sortOrder === "asc" ? "des" : "asc";
    updateQuery({ sortField: field, sortOrder: order, page: 1 });
  };

  return (
    <div className="space-y-4">
      

      <div className="overflow-x-auto">
        <table className="table max-w-3xl m-auto">
          <thead className="bg-[#e0ebeb]">
            <tr>
              <th onClick={() => toggleSort("id")} className="w-1/12 cursor-pointer  text-[#24527a]">
                Id{" "}
                {sortField === "id" ? (sortOrder === "asc" ? "↑" : "↓") : null}
              </th>
              <th onClick={() => toggleSort("name")} className="w-1/4 cursor-pointer  text-[#24527a]">
                Name{" "}
                {sortField === "name"
                  ? sortOrder === "asc"
                    ? "↑"
                    : "↓"
                  : null}
              </th>
              <th onClick={() => toggleSort("username")} className="w-1/4 cursor-pointer  text-[#24527a]">
                Username{" "}
                {sortField === "username"
                  ? sortOrder === "asc"
                    ? "↑"
                    : "↓"
                  : null}
              </th>
              <th onClick={() => toggleSort("email")} className="w-1/4 cursor-pointer  text-[#24527a]">
                Email{" "}
                {sortField === "email"
                  ? sortOrder === "asc"
                    ? "↑"
                    : "↓"
                  : null}
              </th>
            </tr>
          </thead>
          <tbody className="bg-[#e0ebeb]">
            {users.length ? (
              users.map((user) => (
                <tr
                  key={user.id}
                  onClick={() => dispatch(selectUser(user))}
                  className="cursor-pointer"
                >
                  <td>{user.id}</td>
                  <td>{user.name}</td>
                  <td>{user.username}</td>
                  <td>{user.email}</td>
                </tr>
              ))
            ) : (
              <tr>
                <td>No users found</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
      <div className="flex justify-center gap-2">
        {totalPages > 1 &&
          Array.from({ length: totalPages }, (_, i) => {
            return (
              <button
                key={i}
                className="btn bg-[#a7bcb9] mt-4"
                onClick={() => updateQuery({ page: (i + 1).toString() })}
                disabled={i + 1 === page}
              >
                {i + 1}
              </button>
            );
          })}
      </div>
      {selectedUser && (
        <UserDetails
          user={selectedUser}
          onClose={() => dispatch(clearUser())}
        />
      )}
    </div>
  );
}

export default UsersPage;
