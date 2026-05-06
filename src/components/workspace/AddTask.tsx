import type { FormEvent } from "react";

type AddTask = {
  text: string;
  setText: (val: string) => void;
  handleSubmit: (e: FormEvent<HTMLFormElement>) => void;
};

export const AddTask = ({ text, setText, handleSubmit }: AddTask) => {
  return (
    <form className="" onSubmit={handleSubmit}>
      <input
        placeholder="title"
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button type="submit">Add task</button>
    </form>
  );
};
