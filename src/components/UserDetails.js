function UserDetails({ user, onClose }) {
  if (!user) return null;
  return (
    <dialog id="user_modal" className="modal modal-open">
      <div className="modal-box bg-[#a7bcb9] p-10">
        <h3 className="font-bold text-lg mb-2">Dear {user.username}</h3>
        <div className="py-4 space-y-2">
          <p>
            <span className="font-semibold">Id :</span> {user && user.id}
          </p>
          <p>
            <span className="font-semibold">Name :</span> {user.name}
          </p>
          <p>
            <span className="font-semibold">Username :</span> {user.username}
          </p>
          <p>
            <span className="font-semibold">Email :</span> {user.email}
          </p>
        </div>
        <div className="modal-action">
          <button className="btn bg-[#24527a] text-[#a7bcb9]" onClick={onClose}>
            Close
          </button>
        </div>
      </div>
    </dialog>
  );
}

export default UserDetails;
