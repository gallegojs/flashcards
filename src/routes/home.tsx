import Option from "../components/option/option"

const options = [
  "verbs",
  "jobs",
]

const Home = () => {
  return (
    <div className="p-4">
      <h1>English Flashcards App!</h1>
      <div className="grid gap-3 grid-cols-1 sm:grid-cols-2 md:grid-cols-4">
        {options.map((option) => <Option key={option} to={`/words/${option}`} text={option} />)}
      </div>
    </div>
  )
}

export default Home

