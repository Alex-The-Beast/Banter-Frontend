import { useQuery } from '@tanstack/react-query';

import { useAuth } from '@/hooks/context/useAuth';
import {  getChannelByIdRequest } from '@/api/channels';

export const useGetChannelById = (channelId) => {
    console.log('channelId 1', channelId);
    const { auth } = useAuth();
    const { isFetching, isError, error, data: channelDetails } = useQuery({
        queryFn: () => getChannelByIdRequest({ channelId, token: auth?.token }),
        queryKey: [`get-channel-${channelId}`],
        // staleTime: 10000
    });

    return {
        isFetching,
        isError,
        error,
        channelDetails
    };
};