import React from 'react';
import './App.css';
import TopText from './components/TopText'
import NotifyMe from './components/NotifyMe'
import ExampleImage from './components/ExampleImage'
import ContactLinks from './components/ContactLinks'
function App() {
  return (
    <div className="App">
     <TopText/>
     <NotifyMe/>
     <ExampleImage/>
     <ContactLinks/>
    </div>
  );
}

export default App;
