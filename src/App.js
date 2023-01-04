import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom"
import Detail from "./routes/Detail";
import Home from "./routes/Home"


function App() {
  return (
    //Routes는 Route(url)를 찾음 + 한 번에 Route하나만 렌더링 하기 위함 
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movie/:id" element={<Detail />}/>
      </Routes>
    </Router>
  )
}

export default App;