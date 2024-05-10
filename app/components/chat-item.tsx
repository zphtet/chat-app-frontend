const ChatItem = () => {
  return (
    <div className="flex gap-5 bg-primary-content py-2 cursor-pointer px-2 rounded-lg">
      <div className="avatar">
        <div className="w-14 rounded-xl">
          <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
        </div>
      </div>
      <div className="flex justify-between flex-1 text-neutral">
        <div>
          <p className="font-bold text-lg">Kate winslet</p>
          <p className="text-sm line-clamp-1">
            You : Hey are you okay , I was okay with that and I am planning some
            features
          </p>
        </div>
        <p>1h</p>
      </div>
    </div>
  );
};

export default ChatItem;
