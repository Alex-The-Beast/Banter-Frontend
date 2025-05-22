import axios from "@/config/axiosConfig";

export const createWorkspaceRequest = async ({ name, description, token }) => {
  try {
    const response = await axios.post(
      "/workspaces",
      { name, description },
      { headers: { "x-access-token": token } }
    );
    console.log("response in create workspace", response);
    return response?.data?.data;
  } catch (error) {
    console.log("Error in create workspace error", error);
    throw error.response.data;
  }
};

export const fetchWorkspaceRequest = async ({ token }) => {
  try {
    const response = await axios.get(
      "/workspaces",

      { headers: { "x-access-token": token } }
    );
    console.log("response in fetch workspace", response);
    return response?.data?.data;
  } catch (error) {
    console.log("Error in fetch workspace", error);
    throw error.response.data;
  }
};
