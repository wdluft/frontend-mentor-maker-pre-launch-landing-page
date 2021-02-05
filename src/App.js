import './App.css';
import Button from './components/form-elements/Button';
import Input from './components/form-elements/Input';

function App() {
  return (
    <div className="App">
      <h1>HELLO WORLD</h1>
      <h2>HELLO WORLD</h2>
      <h3>HELLO WORLD</h3>
      <h4>HELLO WORLD</h4>
      <Button text='Get notified' type='button'/>
      <Input type='text' placeholderText='Email address'/>
    </div>
  );
}

export default App;
