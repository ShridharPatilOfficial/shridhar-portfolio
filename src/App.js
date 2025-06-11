import logo from './logo.svg';
import './App.css';

import Portfolio from './Portfolio';

import { AnimatePresence } from "framer-motion";

function App() {
  return (
    <AnimatePresence>
      <Portfolio />
    </AnimatePresence>
  );
}


export default App;
