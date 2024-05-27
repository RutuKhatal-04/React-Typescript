type Fullname = {
  name: {
    first: string;
    last: string;
  };
};
export const Intro = (props: Fullname) => {
  return (
    <div>
      <h2>
        Hello {props.name.first} {props.name.last}
      </h2>
    </div>
  );
};
