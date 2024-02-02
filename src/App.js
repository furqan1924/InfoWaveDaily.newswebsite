import React, { useState } from 'react';
import Nav from './Componenets/Nav';
import News from './Componenets/News';
import './App.css';
import {
  BrowserRouter as Router, Routes, Route,
} from "react-router-dom";
import LoadingBar from 'react-top-loading-bar'


const App = () => {
  const [progress, setProgress] = useState(0)

  return (
    <>

      <LoadingBar
        color='#f11946'
        progress={progress}
        onLoaderFinished={() => setProgress(progress)}
      />

      <Router>
        <Nav />
        <Routes>

          <Route exact path="/" element={<News setProgress={setProgress} key={"general"} country="in" category={"general"} />} />
          <Route exact path="/science" element={<News setProgress={setProgress} key={"science"} country="in" category={"science"} />} />
          <Route exact path="/sports" element={<News setProgress={setProgress} key={"sports"} country="in" category={"sports"} />} />
          <Route exact path="/business" element={<News setProgress={setProgress} key={"business"} country="in" category={"business"} />} />
          <Route exact path="/entertainment" element={<News setProgress={setProgress} key={"entertainment"} country="in" category={"entertainmen"} />} />
          <Route exact path="/health" element={<News setProgress={setProgress} key={"health"} country="in" category={"health"} />} />
          <Route exact path="/technology" element={<News setProgress={setProgress} key={"technology"} country="in" category={"technology"} />} />
        
        </Routes>
      </Router>

    </>
  );
}
export default App;
