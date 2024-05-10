import { Mic, Paperclip, Send } from "lucide-react";

const ChatAreaInput = () => {
  return (
    <div className="flex [&>svg]:cursor-pointer gap-4  rounded-lg items-center bg-primary-content p-4">
      <Paperclip />
      <input
        placeholder="Your message "
        className="focus:outline-none bg-transparent  resize-none  flex-1"
      />
      <Mic />
      <Send />
    </div>
  );
};

export default ChatAreaInput;
