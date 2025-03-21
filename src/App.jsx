import React, { useState, createContext } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Home';
import Nav from './Nav';

import Studentlist from './Studentlist';
import Reg from './Reg';


export let Mydata = createContext();
const App = () => {
  let [submit, setSubmit] = useState(null);
  return (
    <Mydata.Provider value={submit}>
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route index path='/' element={<Home />} />
          <Route path='/studentlist' element={<Studentlist />} />
          <Route path='/reg' element={<Reg setSubmit={setSubmit} />} />
        </Routes>
      </BrowserRouter>
    </Mydata.Provider>
  );
};

export default App;