type BasicProfileType = {
  type: "basic";
  name: string;
};

type AdvancedProfileType = {
  type: "advanced";
  name: string;
  email: string;
};

type ProfileType = BasicProfileType | AdvancedProfileType;

function Component(props: ProfileType) {
  const { type, name } = props;
  if (type === "basic") {
    return (
      <article className="alert alert-success">
        <h2>user: {name}</h2>
      </article>
    );
  }

  return (
    <article className="alert alert-danger">
      <h2>user: {name}</h2>
      <h2>Email: {props.email}</h2>
    </article>
  );
}
export default Component;
