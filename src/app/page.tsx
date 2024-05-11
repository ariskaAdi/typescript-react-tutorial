import Greeting from "../../components/greeting";
import Person from "../../components/person";
import PersonList from "../../components/personList";

export default function Home() {
  const personList = [
    {
      first: "kung",
      last: "lao",
    },
    {
      first: "liu",
      last: "kang",
    },
    {
      first: "sub",
      last: "zero",
    },
  ];
  return (
    <>
      <Greeting name="jhon" messageCount={10} isLoggedIn={true} />
      <Person name={{ first: "jhon", last: "doe" }} />;
      <PersonList names={personList} />
    </>
  );
}
