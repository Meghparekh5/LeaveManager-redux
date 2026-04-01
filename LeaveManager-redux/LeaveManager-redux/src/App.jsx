import LeaveForm from "./components/LeaveForm";
import LeaveList from "./components/LeaveList";
import Filter from "./components/filter";
import "./index.css";

export default function App() {
  return (
    <div className="container">

      <h1>Smart Leave Management System</h1>

      <Filter />

      <LeaveForm />

      <LeaveList />

    </div>
  );
}