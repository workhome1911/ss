import React from 'react';
//import 'style/index.less';
import { Button } from 'antd';

function App(props) {
  console.log(props)
  return (
   <div className='App'>
     hello 
     <hr/>
     {props.children}

   </div>
  );
}

export default App;
