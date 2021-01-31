export function ProductPreview({ product }) {

    return <section className="product-preview">
        <h3>{product.ProductTitle}</h3>
        <img src={product.ProductImage} />
        <label>{product.PriceLabel}</label>
        <p>{product.Description.substring(0, 98)}...</p>
    </section>
}