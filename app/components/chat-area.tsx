import ChatAreaHeader from "./chat-area-header";
import ChatAreaInput from "./chat-area-input";
import ChatsContainer from "./chats-container";

const ChatArea = () => {
  return (
    <div className="p-5 h-full flex flex-col gap-4 ">
      <ChatAreaHeader />
      <div className="flex-1 chat-container-scroll  overflow-y-scroll">
        <ChatsContainer />
      </div>
      <ChatAreaInput />
    </div>
  );
};

export default ChatArea;
