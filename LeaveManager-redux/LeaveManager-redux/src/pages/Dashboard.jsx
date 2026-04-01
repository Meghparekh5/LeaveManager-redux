import AddLeave from "../components/AddLeave";
import LeaveList from "../components/LeaveList";
import SearchFilter from "../components/filter";

function Dashboard(){

return(

<div className="max-w-4xl mx-auto p-6">

<h1 className="text-3xl font-bold mb-6 text-center">

Smart Leave Management System

</h1>

<AddLeave/>

<SearchFilter/>

<LeaveList/>

</div>

);

}

export default Dashboard;