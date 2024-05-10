import ChatArea from "./components/chat-area";
import LeftSideBar from "./components/left-side-bar";
import UserInfo from "./components/user-info";

export default function Home() {
  return (
    <main className="h-[--main-h] ">
      <div className="flex h-full">
        <div className="basis-[300px] left-sider-scroll overflow-y-scroll">
          <LeftSideBar />
        </div>
        <div className="flex-1">
          <ChatArea />
        </div>
        <div className="basis-[300px]">
          <UserInfo />
        </div>
      </div>
    </main>
  );
}
