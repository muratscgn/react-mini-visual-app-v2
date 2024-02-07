import { useState } from 'react'
import { products as productsObject } from './data/products'
import ImgContainer from './components/ImgContainer'
import ImgNotSelected from "./components/ImgNotSelected"


function App() {
  const [isActiveProduct, setIsActiveProduct] = useState(productsObject.find(item => item.isActive))
  const [products, setProducts] = useState(productsObject)

  return (
    <>
      <main className='container'>
        {
          isActiveProduct ? <h1>{isActiveProduct.name}</h1> : <ImgNotSelected></ImgNotSelected>
        }
        <ImgContainer products={products}></ImgContainer>
      </main>
    </>
  )
}

export default App
