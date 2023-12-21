import DataProvider from './src/context/DataProvider'
import Routes from './src/routes/Routes'

const App = () => {
  return (
    <DataProvider>
      <Routes/>
    </DataProvider>
  );
};

export default App;
