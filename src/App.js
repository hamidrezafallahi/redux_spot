import React from 'react';
import Counter from "./components/counter/Counter";
import store from "./redux/store";
import {Provider} from "react-redux";

import Changecounter from './components/counter/Changecounter';
import Showcounter from './components/counter/Showcounter';

import Showpost from './components/post/Showpost';
import Searchpost from './components/post/Searchpost';
import Addpost from './components/post/Addpost';

export default function App() {
  return (
      <Provider store={store}>
          <h1> mehdi abbasi</h1>
          <Counter/>
            <hr/>
          <div style={{display:"flex",gap:"20px",justifyContent:"space-around"}}>
              <Changecounter/>
              <Showcounter/>
          </div>
          <hr/>
          <div style={{padding :"15px",border:"1px solid #ccc",borderRadius:"8px"}}>
              <div style={{textAlign:"center"}}>
                  <Showpost/>
              </div>
              <hr/>
              <div style={{display:"flex",justifyContent:"space-around",gap:"20px"}}>
                  <Searchpost/>
                  <Addpost/>
              </div>
          </div>
      </Provider>
  );
}
