import { ProductPreview } from './ProductPreview.jsx'

export function ProductList({ products }) {

    if (!products.length) return <div></div>
    console.log(products)
    return <div className="product-list grid">
        {products.map((product,idx) => {
            return <ProductPreview key={idx} product={product} />
        })}
    </div>
}