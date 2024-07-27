import React, { useEffect } from 'react';
import { useSelector,useDispatch } from 'react-redux';

function App() {
  const products = useSelector(state => state.products.products)  
  const loading = useSelector(state => state.products.loading)
  const error = useSelector(state => state.products.error)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch({type:'fetchProductAsync'})
  },[])

  return (
    <div className="App">
        <ul>
          {loading? <h1>Loading...</h1> : ''}
          {error? <h1>{error}</h1> : ''}
          {products && products.map(e => (
            <li key={e.id}>
              <span>{e.title}</span>
              <span>{e.image}</span>
              <span>{e.stock}</span>
              <span>{e.rate}</span>
              <span>{e.price}</span>
          </li> 
          ))}         
        </ul>
    </div>
  );
}

export default App;
