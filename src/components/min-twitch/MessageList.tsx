export const MessageList = ({ messages, setUserID }) => {
  return (
    <ul className="flex flex-wrap flex-col gap-2.5">
      {messages.map((message) => (
        <li key={message.id} className=" bg-amber-50 rounded-2xl p-2 ">
          <p
            className=" font-bold cursor-pointer"
            onClick={() => setUserID(message.id)}
          >
            {message.user.username}
          </p>
          {message.message}
          <span className="rounded-2xl bg-fuchsia-50 p-1 ">{message.time}</span>
        </li>
      ))}
    </ul>
  );
};
