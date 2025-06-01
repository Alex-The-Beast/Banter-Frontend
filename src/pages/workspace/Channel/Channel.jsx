import { useParams } from "react-router-dom";
import { useGetChannelById } from "@/hooks/apis/channels/useGetChannelById";
import { Loader2Icon, TriangleAlertIcon } from "lucide-react";
import { ChatInput } from "@/components/molecules/ChatInput/ChatInput";
import { ChannelHeader } from "@/components/molecules/Channel/ChannelHeader";
import { useEffect } from "react";
import { useSocket } from "@/hooks/context/useSocket";
import { useGetChannelMessages } from "@/hooks/apis/channels/useGetChannelMessages";
import { Message } from "@/components/molecules/Message/Message";
import { useChannelMessages } from "@/hooks/context/useChannelMessages";
import { useQueryClient } from "@tanstack/react-query";

export const Channel = () => {
  const { channelId } = useParams();

  const { channelDetails, isFetching, isError } = useGetChannelById(channelId);
  const { joinChannel } = useSocket();
  const { messageList, setMessageList } = useChannelMessages();
  const queryClient = useQueryClient(); 


  const { messages, isSuccess } = useGetChannelMessages(channelId);

  useEffect(() => {
    console.log("channelId", channelId);
    queryClient.invalidateQueries("getPaginatedMessages");
  }, [channelId, queryClient]);

  useEffect(() => {
    if (!isFetching && !isError) {
      // queryClient.invalidateQueries('getPaginatedMessages');
      joinChannel(channelId);
    }
  }, [isFetching, isError, channelId, joinChannel]);

    useEffect(() => {
    // Clear messages on channel switch
    setMessageList([]);
  }, [channelId, setMessageList]);

  useEffect(() => {
    if (isSuccess) {
      console.log("channel messages fetched", messages);
      setMessageList(messages);
    }
  }, [isSuccess, messages, setMessageList]);

  if (isFetching) {
    return (
      <div className="h-full flex-1 flex items-center justify-center">
        <Loader2Icon className="size-5 animate-spin text-muted-foreground" />
      </div>
    );
  }

  if (isError) {
    return (
      <div className="h-full flex-1 flex flex-col items-center justify-center gap-y-2">
        <TriangleAlertIcon className="size-6 text-muted-foreground" />
        <span className="text-sm text-muted-foreground">
          Channel not found.
        </span>
      </div>
    );
  }
  return (
    <div className="flex flex-col h-full ">
      <ChannelHeader name={channelDetails?.name} />
      {messageList?.map((message) => {
        return (
          console.log("message", message),
          (
            <Message
              key={message._id}
              body={message.body}
              authorName={message.senderId?.username}
              authorImage={message.senderId?.avatar}
              createdAt={message.createdAt}
            />
          )
        );
      })}

      <div className="flex-1" />
      <ChatInput />
    </div>
  );
};

// till 1:25 with error
