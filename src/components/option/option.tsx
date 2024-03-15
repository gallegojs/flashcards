import { Link } from "react-router-dom";

type OptionProps = {
  to: string;
  text: string;
}

const Option = ({ to, text }: OptionProps) => {
  return (
    <Link to={to}>
      <div className="p-8 text-xl text-center bg-gray-800 hover:bg-gray-950 rounded">
        {text}
      </div>
    </Link>
  )
};

export default Option;