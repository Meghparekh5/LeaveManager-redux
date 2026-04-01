import { useDispatch } from "react-redux";
import { useState } from "react";
import { addLeave } from "../features/leaveSlice";

function AddLeave(){

const dispatch = useDispatch();

const [form,setForm] = useState({
name:"",
type:"Sick",
start:"",
end:"",
reason:""
});

const submitHandler=(e)=>{

e.preventDefault();

dispatch(addLeave({

id: Date.now(),
...form,
status:"Pending",
appliedDate:new Date().toLocaleDateString()

}));

};

return(

<div className="bg-white p-6 rounded-xl shadow">

<h2 className="text-xl font-bold mb-4">
Apply Leave
</h2>

<form onSubmit={submitHandler} className="space-y-3">

<input
className="border p-2 w-full"
placeholder="Employee Name"
/>

<select className="border p-2 w-full">

<option>Sick</option>
<option>Casual</option>
<option>Emergency</option>
<option>Vacation</option>
<option>Half-Day</option>

</select>

<input type="date" className="border p-2 w-full"/>

<input type="date" className="border p-2 w-full"/>

<textarea
className="border p-2 w-full"
placeholder="Reason"
/>

<button
className="bg-blue-600 text-white px-4 py-2 rounded"
>

Submit

</button>

</form>

</div>

);

}

export default AddLeave;