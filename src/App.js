import './App.css';
import Attributes from './components/Attributes.jsx';
import "@clayui/css/lib/css/atlas.css";
import { useEffect, useState } from 'react';
import Axios from './service/api';

function App() {
  const [selectedAttributes, setSelectedAttributes] = useState([]);
  const getAttributes = async () => {
    return await Axios.get('/attributes');
  };
  let Attr = <div>asdfasdfasdf</div>;
  useEffect(() => {
    getAttributes()
    .then((d) => {
      setSelectedAttributes(d.data);
    }, [])
    .catch((e) =>{
      console.log(e, '............')
    });
  },[]);
  return (
    <div className="App">
      <Attributes
        selectedAttributes={selectedAttributes}
      />
      {Attr}
      { selectedAttributes.map((e, i) => {
        return <div key={i}> asdfasfd</div>
      }) }
    </div>
  );
}

export default App;
