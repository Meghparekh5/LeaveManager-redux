import { useDispatch } from "react-redux";
import { setSearch, setFilterType } from "../features/leaveSlice";

export default function Filter() {
  const dispatch = useDispatch();

  return (
    <div className="filter">
      <input
        placeholder="Search employee..."
        onChange={(e) => dispatch(setSearch(e.target.value))}
      />

      <select
        onChange={(e) => dispatch(setFilterType(e.target.value))}
      >
        <option value="All">All</option>
        <option>Sick</option>
        <option>Casual</option>
        <option>Emergency</option>
        <option>Vacation</option>
        <option>Half-Day</option>
      </select>
    </div>
  );
}