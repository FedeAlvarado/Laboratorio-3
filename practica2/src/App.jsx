import './App.css'
import Tabla from './components/table/Tabla';


function App() {

  const netIncomes = [{brand: "McDonalds", income: 1291283}, {brand: "Burger King", income: 1927361}, {brand: "KFC", income: 1098463}];

  return (
    <>
  <Tabla incomes={netIncomes}/>
    </>


  )
}

export default App
