type GreetProps = {
  name: string;
  messageCount: number;
  isLoggedIn: boolean;
};

export const Greet = (props: GreetProps) => {
  return (
    <div>
      <h2>
        {props.isLoggedIn
          ? `Welcome ${props.name} You have ${props.messageCount} unread message`
          : "Welcome Guest"}
      </h2>
    </div>
  );
};

// we have to pass type to of props which we have passed
