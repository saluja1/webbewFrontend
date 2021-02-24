import React from 'react';
import { BrowserRouter }  from 'react-router-dom';
import Nav from './components/UI/Nav/Nav';
import Layout from './components/Layout';
import Routes from './Routes';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Layout>

          <Routes />
        </Layout>
      </div>
    </BrowserRouter>
  );
}

export default App;
