import { createContext } from "react";
import { API_URL, API_KEY } from "@dotenv";
import useFetch from "../hooks/useFetch";

export const DataContext = createContext();
const date = new Date();
const day = `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`;
const lastDay = `${date.getFullYear()}-${date.getMonth() + 1}-${
  date.getDate() - 5
}`;

const DataProvider = ({ children }) => {
  const data = useFetch(
    `${API_URL}?api_key=${API_KEY}&start_date=${lastDay}&end_date=${day}`
  );
  const loading = data.loading;
  const today = JSON.stringify(new Date()).slice(1, 11);
  const dataToday = data?.data?.filter((e) => e.date === today);
  const dataLastdays = data?.data?.filter((e) => e.date !== today);

  return (
    <DataContext.Provider value={{loading, dataToday, dataLastdays}}>
      {children}
    </DataContext.Provider>
  );
};

export default DataProvider;
