import { useState } from "react";
import { useDispatch } from "react-redux";
import { addLeave } from "../features/leaveSlice";

export default function LeaveForm() {

  const dispatch = useDispatch();

  const [form, setForm] = useState({
    name: "",
    type: "Sick",
    start: "",
    end: "",
    reason: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!form.name) return;

    await dispatch(addLeave(form));

    setForm({
      name: "",
      type: "Sick",
      start: "",
      end: "",
      reason: "",
    });
  };

  return (
    <form className="form-card" onSubmit={handleSubmit}>

      <h2>Apply Leave</h2>

      <input
        value={form.name}
        placeholder="Employee Name"
        onChange={(e) =>
          setForm({ ...form, name: e.target.value })
        }
      />

      <select
        value={form.type}
        onChange={(e) =>
          setForm({ ...form, type: e.target.value })
        }
      >
        <option>Sick</option>
        <option>Casual</option>
        <option>Emergency</option>
        <option>Vacation</option>
        <option>Half-Day</option>
      </select>

      <input
        type="date"
        value={form.start}
        onChange={(e) =>
          setForm({ ...form, start: e.target.value })
        }
      />

      <input
        type="date"
        value={form.end}
        onChange={(e) =>
          setForm({ ...form, end: e.target.value })
        }
      />

      <textarea
        value={form.reason}
        placeholder="Reason"
        onChange={(e) =>
          setForm({ ...form, reason: e.target.value })
        }
      />

      <button>Submit Leave</button>

    </form>
  );
}