import { Link, useParams } from "react-router-dom";
import Card from "../components/card/card";
import useWords from "../hooks/use-words";

type Params = {
  wordType: string;
}

const Words = () => {
  const { wordType } = useParams() as Params;
  const { words } = useWords(wordType);

  return (
    <div className="p-4">
      <h1>{wordType}</h1>
      <Link to="/" className="hover:underline">Back to home</Link>
      <div className="grid grid-cols-1 md:grid-cols-4 -mx-4">
        {words.map(({ spanish, english, audioURL }) => (
          <Card key={spanish} front={spanish} back={english} audioFile={audioURL} />
        ))}
      </div>
    </div>
  )
}

export default Words;