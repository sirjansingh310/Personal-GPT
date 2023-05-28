import logo from './logo.svg';
import './App.scss';
import FileUpload from './components/FileUpload';
import Chat from './components/Chat'

function App() {
  return (
    <div className="app-container">
      <FileUpload /> 
      <Chat />
    </div>
  );
}

export default App;
