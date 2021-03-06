import './styles/App.scss'
import { Component } from 'react';
import Contact from './components/Contact';
import Education from './components/Education';
import Personal from './components/Personal';
import Summary from './components/Summary';
import Skills from './components/Skills';
import Work from './components/Work';

export default class App extends Component {
  render() {
    return(
      <div className='App'>
        <header>
          <Personal/>
        </header>
        <nav>
          <Contact/>
          <Education/>
          <Skills/>
        </nav>
        <main>
          <Summary/>
          <Work/>
        </main>
      </div>
    );
  };
};