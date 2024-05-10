import ChatItem from "./chat-item";
import SearchInput from "./input";

const LeftSideBar = () => {
  return (
    <div className=" p-5 space-y-5 h-full">
      <SearchInput />
      <div className="space-y-2">
        <ChatItem />
        <ChatItem />
        <ChatItem />
        <ChatItem />
        <ChatItem />
        <ChatItem />
        <ChatItem />
        <ChatItem />
        <ChatItem />
        <ChatItem />
        <ChatItem />
        <ChatItem />
        <ChatItem />
        <ChatItem />
        <ChatItem />
      </div>
    </div>
  );
};

export default LeftSideBar;
