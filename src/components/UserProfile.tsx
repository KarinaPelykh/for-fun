import { useState } from "react";

export const UserProfile = () => {
  const [fullName, setFullName] = useState({ first: "", last: "" });

  return (
    <>
      <form>
        <input
          type="text"
          value={fullName.first}
          onChange={(e) =>
            setFullName((prev) => ({ ...prev, first: e.target.value }))
          }
        />
        <input
          type="text"
          value={fullName.last}
          onChange={(e) =>
            setFullName((prev) => ({ ...prev, last: e.target.value }))
          }
        />
        <label>
          Full Name:
          <input
            type="text"
            value={`${fullName.first}${fullName.last}`}
            onChange={(e) => {
              const [name = "", lastName = ""] = e.target.value.split(" ");
              setFullName((prev) => ({ ...prev, first: name, last: lastName }));
            }}
          />
        </label>
      </form>
    </>
  );
};
