type greetProps = {
  name: string;
};
// using the type object greetProps to create a component
const Greeting = (props: greetProps) => {
  return <div>HASLO MY NAME IS {props.name}</div>;
};

export default Greeting;
