let leaves = [];

export const fetchLeavesAPI = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(leaves);
    }, 500);
  });
};

export const saveLeaveAPI = (leave) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      const newLeave = {
        ...leave,
        id: Date.now(),
        status: "Pending",
        appliedDate: new Date().toLocaleDateString(),
      };

      leaves.push(newLeave);
      resolve(newLeave);
    }, 500);
  });
};

export const deleteLeaveAPI = (id) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      leaves = leaves.filter((leave) => leave.id !== id);
      resolve(id);
    }, 500);
  });
};