import { Info } from "lucide-react";

const ChatAreaHeader = () => {
  return (
    <div className="flex items-center justify-between">
      <div className=" ">
        <p className="text-xl  font-bold">Kate Winslet</p>
        <p className="text-sm">33 min ago</p>
      </div>
      <div>
        <button className="btn btn-circle">
          <Info />
        </button>
      </div>
    </div>
  );
};

export default ChatAreaHeader;
