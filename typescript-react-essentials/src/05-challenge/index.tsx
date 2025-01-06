type ProfileType = {
  type: "basic" | "advanced";
  name: string;
  email?: string;
};

function Component(props: ProfileType) {
  const { type, email, name } = props;
  const alertType = type === "basic" ? "success" : "danger";
  const className = `alert alert-${alertType}`;
  return (
    <article className={className}>
      <h2>user: {name}</h2>
      {email && <h2>Email: {email}</h2>}
    </article>
  );
}
export default Component;
