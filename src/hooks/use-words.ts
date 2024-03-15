import useSWR from "swr";
import fetcher from "../utils/fetcher";

type WordType = {
  spanish: string;
  english: string;
  audioURL?: string;
}

const useWords = (wordType: string) => {
  const { data, error, isLoading } = useSWR<WordType[]>(`/api/${wordType}.json`, fetcher)

  return {
    words: data || [],
    isError: error,
    isLoading
  }
}

export default useWords