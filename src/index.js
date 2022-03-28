import React, { useState } from 'react';
import ReactDom from 'react-dom'

function Example() {
  const [count, setCount] = useState(0)
  
  return(
    <div>
      <h1>{count}</h1>
      <button onClick={()=>setCount(count+1)}>add</button>

    </div>
  )
}


ReactDom.render(<Example/>, document.getElementById('root'))