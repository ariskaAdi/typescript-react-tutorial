type greetProps = {
  name: string;
  messageCount: number;
  isLoggedIn: boolean;
};
// using the type object greetProps to create a component
// isLoggedIn is a boolean, make it for ternary operator
const Greeting = (props: greetProps) => {
  return <div>{props.isLoggedIn ? `Welcome ${props.name}! You have ${props.messageCount} unread messages` : `Welcome Guest`}</div>;
};

export default Greeting;
