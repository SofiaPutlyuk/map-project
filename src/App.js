import './App.css';
import Map from './components/Map';
import Form from './components/Form';
import Footer from './components/Footer';
import { Fragment } from 'react';
function App() {
  return (
<Fragment>
      <div className='container'>
        <Form />
        <Map />
      </div>
      <Footer />
      </Fragment>
  
  );
}

export default App;
