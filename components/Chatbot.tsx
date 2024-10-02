import React from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
// import {
//   TooltipProvider,
//   Tooltip,
//   TooltipTrigger,
//   TooltipContent,
// } from "@radix-ui/react-tooltip";
import { HiChatBubbleBottomCenterText } from "react-icons/hi2";

const Chatbot = () => {
  // Chatbot
  //   const { messages, input, handleInputChange, handleSubmit } = useChat();
  return (
    <div>
      <Dialog>
        <DialogTrigger className="fixed bottom-10 right-10">
          {" "}
          {/* <div className="absolute bottom-10 right-10">
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger>
                  {" "}
                  <HiChatBubbleBottomCenterText className="size-10" />
                </TooltipTrigger>
                <TooltipContent>
                  <p>Chat with Sophie</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          </div> */}
          <HiChatBubbleBottomCenterText className="size-10" />
        </DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>AI Stylist</DialogTitle>
            <DialogDescription>
              {/* chatbot container */}
              <section id="ai">
                {/* chatbot wrapper */}
                <div>
                  {/* chatbot conversation */}
                  <div className="mx-auto flex w-full max-w-lg flex-col py-8">
                    <p className=" relative mb-6 rounded-r-lg p-2">
                      AI: Hello, what can I help you style today?
                    </p>
                    {/* {messages.map((m) => (
                      <div
                        key={m.id}
                        className={
                          m.role === "user"
                            ? "mb-6 rounded-b-lg rounded-tl-lg p-2 text-right text-black"
                            : "mb-6 whitespace-pre-wrap rounded-r-lg p-2 text-black"
                        }
                      >
                        {m.role === "user" ? "User: " : "AI: "}
                        {m.content}
                      </div>
                    ))} */}
                    {/* <form
                      onSubmit={handleSubmit}
                      className="mt-10 flex justify-between"
                    >
                      <input
                        className="mx-auto w-full rounded rounded-r-none border p-2 shadow-lg focus:outline-none lg:max-w-md"
                        value={input}
                        placeholder="Say something..."
                        onChange={handleInputChange}
                      />
                      <button
                        type="submit"
                        className="rounded-md rounded-l-none px-4 text-white shadow-lg hover:opacity-50"
                      >
                        Send
                      </button>
                    </form> */}
                  </div>
                </div>
              </section>
            </DialogDescription>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default Chatbot;
