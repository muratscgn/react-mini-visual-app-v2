import { useState } from 'react'
import { products as productsObject } from './data/products'
import ImgContainer from './components/ImgContainer'
import ImgNotSelected from "./components/ImgNotSelected"


function App() {
  const [activeProduct, setActiveProduct] = useState(productsObject.find(item => item.isActive))
  const [products, setProducts] = useState(productsObject)

  function handleProductSelect(id) {
    console.log(id)
  }

  return (
    <>
      <main className='container'>
        {
          activeProduct ? <h1>{activeProduct.name}</h1> : <ImgNotSelected></ImgNotSelected>
        }
        <ImgContainer products={products} handleProductSelect={handleProductSelect}></ImgContainer>
      </main>
    </>
  )
}

export default App
