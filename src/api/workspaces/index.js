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

export const fetchWorkspaceDetailsRequest = async ({ workspaceId, token }) => {
  try {
    const response = await axios.get(`/workspaces/${workspaceId}`, {
      headers: { "x-access-token": token },
    });
    console.log("response in fetch workspace details", response);
    return response?.data?.data;
  } catch (error) {
    console.log("Error in fetch workspace details request", error);
    throw error.response.data;
  }
};

export const deleteWorkspaceRequest = async ({ workspaceId, token }) => {
  try {
    const response = await axios.delete(`/workspaces/${workspaceId}`, {
      headers: { "x-access-token": token },
    });

    console.log("workspace deleted successfully", response);
    return response?.data?.data;
  } catch (error) {
    console.log("Error in Delete workspace rerquest.", error);
    throw error.response.data;
  }
};

export const updateWorkspaceRequest = async ({ workspaceId,name, token }) => {
  try {
    const response = await axios.put(
      `/workspaces/${workspaceId}`,
      {name},
      { headers: { "x-access-token": token } }
    );
    console.log("response in update workspace", response);
    return response?.data?.data;
  } catch (error) {
    console.log("Error in update workspace request", error);
    throw error.response.data;
  }
};
