import ProductCard from "./ProductCard"

function ImgContainer({ products, handleProductSelect }) {
  return (
    <div className="grid">
      {products.filter(
        product => product.isAvailable
      ).map(
        product => <ProductCard product={product} key={product.id} handleProductSelect={handleProductSelect}></ProductCard>
      )
      }
    </div>
  )
}

export default ImgContainer

