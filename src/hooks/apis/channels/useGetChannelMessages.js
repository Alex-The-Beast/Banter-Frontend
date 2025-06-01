import { getPaginatedMessagesRequest } from "@/api/channels";
import { useQuery } from "@tanstack/react-query";
import { useAuth } from "@/hooks/context/useAuth";

export const useGetChannelMessages = (channelId) => {
  const { auth } = useAuth();

  const { isFetching, isError ,error,data,isSuccess} = useQuery({
    queryFn: () =>
      getPaginatedMessagesRequest({
        channelId,
        limit: 10,
        offset: 0,
        token: auth?.token,
      }),
    queryKey: ["getPaginatedMessages"],
  });
  return { isFetching, isError ,error,messages:data,isSuccess };
};
