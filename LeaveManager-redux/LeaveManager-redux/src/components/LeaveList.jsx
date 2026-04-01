import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchLeaves,
  deleteLeave,
  updateLeave,
} from "../features/leaveSlice";

export default function LeaveList() {

  const dispatch = useDispatch();

  const { leaves, search, filterType } =
    useSelector((state) => state.leave);

  useEffect(() => {
    dispatch(fetchLeaves());
  }, [dispatch]);

  const filtered = leaves.filter((l) =>
    l.name.toLowerCase().includes(search.toLowerCase()) &&
    (filterType === "All" || l.type === filterType)
  );

  return (
    <div className="leave-list">

      {filtered.map((l) => (

        <div key={l.id} className="leave-card">

          <h3>{l.name}</h3>

          <p><b>Type:</b> {l.type}</p>

          <p>{l.start} → {l.end}</p>

          <p>{l.reason}</p>

          <p>Status: <b>{l.status}</b></p>

          <div className="buttons">

            <button
              className="approve"
              onClick={() =>
                dispatch(updateLeave({ id: l.id, status: "Approved" }))
              }
            >
              Approve
            </button>

            <button
              className="reject"
              onClick={() =>
                dispatch(updateLeave({ id: l.id, status: "Rejected" }))
              }
            >
              Reject
            </button>

            <button
              className="delete"
              onClick={() => dispatch(deleteLeave(l.id))}
            >
              Delete
            </button>

          </div>

        </div>

      ))}

    </div>
  );
}