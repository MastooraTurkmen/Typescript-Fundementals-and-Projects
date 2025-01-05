import { type PropsWithChildren } from "react";

type Props = PropsWithChildren<{ name: string; id: number }>;

function Component({ name, id, children }: Props) {
  return (
    <div>
      <h2>Name: {name}</h2>
      <h2>Id: {id}</h2>
      <h2>{children}</h2>
    </div>
  );
}
export default Component;
