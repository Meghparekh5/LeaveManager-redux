import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const API = "http://localhost:3000/leaves";

export const fetchLeaves = createAsyncThunk("leave/fetch", async () => {
  const res = await fetch(API);
  return res.json();
});

export const addLeave = createAsyncThunk("leave/add", async (data) => {
  const res = await fetch(API, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      ...data,
      status: "Pending",
      appliedDate: new Date().toLocaleDateString(),
    }),
  });
  return res.json();
});

export const deleteLeave = createAsyncThunk("leave/delete", async (id) => {
  await fetch(`${API}/${id}`, { method: "DELETE" });
  return id;
});

export const updateLeave = createAsyncThunk(
  "leave/update",
  async ({ id, status }) => {
    const res = await fetch(`${API}/${id}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ status }),
    });
    return res.json();
  }
);

const leaveSlice = createSlice({
  name: "leave",
  initialState: {
    leaves: [],
    search: "",
    filterType: "All",
  },
  reducers: {
    setSearch: (state, action) => {
      state.search = action.payload;
    },
    setFilterType: (state, action) => {
      state.filterType = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchLeaves.fulfilled, (state, action) => {
        state.leaves = action.payload;
      })
      .addCase(addLeave.fulfilled, (state, action) => {
        state.leaves.push(action.payload);
      })
      .addCase(deleteLeave.fulfilled, (state, action) => {
        state.leaves = state.leaves.filter(
          (l) => l.id !== action.payload
        );
      })
      .addCase(updateLeave.fulfilled, (state, action) => {
        const index = state.leaves.findIndex(
          (l) => l.id === action.payload.id
        );
        if (index !== -1) state.leaves[index] = action.payload;
      });
  },
});

export const { setSearch, setFilterType } = leaveSlice.actions;
export default leaveSlice.reducer;