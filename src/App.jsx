import { BrowserRouter as Router,
  Route,
  Redirect,
  Routes, } from "react-router-dom";
import Start from "./pages/start";
import Location from "./pages/location";
import Question1 from "./pages/question1";
import Question2 from "./pages/question2";
import Question3 from "./pages/question3";
import Question4 from "./pages/question4";
import Question5 from "./pages/question5";
import End from "./pages/end";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Start/>}>
          
        </Route>
        {/* <Route path="/location" element={<Location/>}/> */}
        <Route path="/question1" element={<Question1/>}/>
        <Route path="/question2" element={<Question2/>}/>
        <Route path="/question3" element={<Question3/>}/>
        <Route path="/question4" element={<Question4/>}/>
        <Route path="/question5" element={<Question5/>}/>
        <Route path="/end" element={<End/>}/>
        </Routes>
    </Router>
  );
};

export default App;
