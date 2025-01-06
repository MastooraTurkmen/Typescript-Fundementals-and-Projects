import { useState } from "react";

type Person = {
  name: string;
};

function Component() {
  const [text, setText] = useState<string>("");
  const [email, setEmail] = useState<string>("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.value);
    setEmail(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    // const formData = new FormData(e.target as HTMLFormElement);
    const data = Object.fromEntries(formData);
    console.log(data);

    const text = formData.get("text") as string;

    const person: Person = {
      name: data.text as string
    };
  };

  return (
    <section>
      <h2>events example</h2>
      <form onSubmit={handleSubmit} className="form">
        <input
          type="text"
          className="form-input mb-1"
          value={text}
          name="text"
          onChange={(e) => setText(e.target.value)}
        />
        <input
          type="email"
          className="form-input mb-1"
          onChange={handleChange}
          value={email}
          name="email"
        />
        <button type="submit" className="btn btn-block">
          submit
        </button>
      </form>
    </section>
  );
}
export default Component;
