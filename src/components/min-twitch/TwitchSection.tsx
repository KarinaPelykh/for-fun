import { useEffect, useState } from "react";
import { VideoPlayer } from "./VideoPlayer";
import { MessageList } from "./MessageList";
import { AddMessage } from "./AddMessage";
import { nanoid } from "nanoid";
import { Modal } from "./Modal";
export const chatMessages = [
  {
    id: "m1",
    user: {
      id: "u1",
      username: "alex_dev",
      bio: "Frontend developer | React lover",
    },
    message: "Hey everyone 👋",
    time: "12:01",
  },
  {
    id: "m2",
    user: {
      id: "u2",
      username: "kate_ui",
      bio: "UI/UX designer",
    },
    message: "This stream is amazing 🔥",
    time: "12:02",
  },
  {
    id: "m3",
    user: {
      id: "u3",
      username: "john_react",
      bio: "React engineer at startup",
    },
    message: "How do you manage state here?",
    time: "12:03",
  },
  {
    id: "m4",
    user: {
      id: "u4",
      username: "maria_code",
      bio: "Fullstack dev | Node + React",
    },
    message: "Nice explanation on refs 👍",
    time: "12:04",
  },
  {
    id: "m5",
    user: {
      id: "u5",
      username: "guest123",
      bio: "Just watching 👀",
    },
    message: "First time here!",
    time: "12:05",
  },
];

export const TwitchSection = () => {
  const [messages, setMessages] = useState(chatMessages);

  const [text, setText] = useState("");

  const [userID, setUserID] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const time = new Date();
    const minute = time.getMinutes();
    const hour = time.getHours();

    const newMessage = {
      id: nanoid(),
      user: {
        id: nanoid(),
        username: "Karyna",
        bio: "Full stack Dev",
      },
      message: text,
      time: `${hour}:${minute}`,
    };

    setMessages((prev) => [...prev, newMessage]);
    setText("");
  };

  useEffect(() => {
    const hadleClose = (e) => {
      if (e.key === "Escape") {
        setUserID("");
      }
    };

    window.addEventListener("keydown", hadleClose);

    return () => window.removeEventListener("keydown", hadleClose);
  }, []);

  return (
    <section className=" p-10 flex gap-10">
      <VideoPlayer />
      <div className="bg-fuchsia-300 p-5 rounded-2xl">
        <h1 className="text-white mb-5 font-bold">Chat</h1>
        <MessageList messages={messages} setUserID={setUserID} />
        <AddMessage setText={setText} text={text} handleSubmit={handleSubmit} />
      </div>
      {userID && (
        <Modal data={messages.find((message) => message.id === userID) || []} />
      )}
    </section>
  );
};
