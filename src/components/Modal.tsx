export const Modal = ({ children, prev, next }) => {
  return (
    <div className=" fixed inset-0 size-full bg-[rgba(0,0,0,0.11)] flex justify-center items-center">
      <div className=" absolute w-60  bg-white rounded-2xl">
        <div>{children}</div>
        <div className="flex justify-between">
          <button onClick={next}>Next</button>
          <button onClick={prev}>Prev</button>
        </div>
      </div>
    </div>
  );
};
