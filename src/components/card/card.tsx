import { useState } from "react"
import { playSound } from "../../utils/sounds"
import classNames from "classnames";
import "./card.css"
import SpeakerWave from "../icons/speaker-wave";

interface CardProps {
  front: string;
  back: string;
  audioFile?: string;
}

const Card = ({ front, back, audioFile }: CardProps) => {
  const [selected, setSelected] = useState(false)

  const handleClickCard = () => {
    if (!selected && audioFile) {
      playSound(audioFile)
    }
    setSelected((selected) => !selected)
  }

  return (
    <div className="card" onClick={handleClickCard}>
      <div className={classNames("card-inner", { "[transform:rotateY(180deg)]": selected })}>
        <div className="card-content bg-gray-800">
          {front}
          {audioFile && <SpeakerWave />}
        </div>
        <div className="card-content bg-gray-950 [transform:rotateY(180deg)]">
          {back}
        </div>
      </div>
    </div>
  )
}

export default Card