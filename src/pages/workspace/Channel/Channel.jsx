import { useParams } from "react-router-dom";
import { useGetChannelById } from "@/hooks/apis/channels/useGetChannelById";
import { Loader2Icon, TriangleAlertIcon } from "lucide-react";
import { ChatInput } from "@/components/molecules/ChatInput/ChatInput";
import { ChannelHeader } from "@/components/molecules/Channel/ChannelHeader";
import { useEffect,useRef } from "react";
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
  const messageContainerListRef=useRef(null)

  useEffect(() => {
    if (messageContainerListRef.current) {
      messageContainerListRef.current.scrollTop =
        messageContainerListRef.current.scrollHeight;
    }
  }, [messageList]);

  useEffect(() => {
    console.log("channelId", channelId);
    queryClient.invalidateQueries("getPaginatedMessages");
  }, [channelId]);

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
      <div className="h-full  flex flex-col items-center justify-center gap-y-2">
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
      {/* here should be scroll message feature implemented */}
    <div
    ref={messageContainerListRef}
    className="flex-15 overflow-y-auto p-5 gap-y-2">
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
    </div>

      <div className="flex-1" />
      <ChatInput />
    </div>
  );
};

// till 1:25 with error
