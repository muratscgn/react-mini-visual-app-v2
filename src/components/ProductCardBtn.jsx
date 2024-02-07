const ProductCardBtn = ({ productId, handleProductSelect }) =>
  <button
    className="outline"
    onClick={() => handleProductSelect(productId)}
  >
    Select
  </button>

export default ProductCardBtn