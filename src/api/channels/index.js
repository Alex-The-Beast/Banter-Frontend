import axios from "@/config/axiosConfig";

export const getChannelByIdRequest = async ({ channelId, token }) => {
  console.log("channelId", channelId);
  try {
    const response = await axios.get(`/channels/${channelId}`, {
      headers: {
        "x-access-token": token,
      },
    });
    return response?.data?.data;
  } catch (error) {
    console.log("Error in getChannelByIdRequest", error);
  }
};

export const getPaginatedMessagesRequest = async ({
  channelId,
  limit,
  offset,
  token,
}) => {
  try {
    const response = await axios.get(`/messages/${channelId}`, {
      params: {
        limit: limit || 20,
        offset: offset || 0,
      },
      headers: { "x-access-token": token },
    });
    return response?.data?.data;
  } catch (error) {
    console.error("Error in getPaginatedMessagesRequest", error);
    throw error; // optionally rethrow if you want to handle it upstream
  }
};

