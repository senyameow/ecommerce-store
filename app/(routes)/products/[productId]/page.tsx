import getProduct from "@/actions/get-product";
import getProducts from "@/actions/get-products";
import Galery from "@/components/Galery";
import ProductInfo from "@/components/ProductInfo";
import ProductList from "@/components/ProductList";
import Container from "@/components/ui/Container";
import { Product } from "@/types";
import Image from "next/image";

interface ProductPageProps {
    params: {
        productId: string;
    }
}

export default async function ProductPage({ params }: ProductPageProps) {

    console.log(params.productId)

    const product = await getProduct(params.productId)

    const relatedProducts = await getProducts({
        categoryId: product.Category?.id
    })

    console.log(product.Image?.[0].url)

    return (
        <div className="bg-white">
            <Container>
                <div className="px-4 py-10 sm:px-6 lg:px-8">
                    <div className="lg:grid lg:grid-cols-2 lg:items-start gap-6 justify-between">
                        <Galery images={product?.Image} />
                        <ProductInfo product={product} />
                    </div>
                    <hr className="my-10" />
                    <ProductList products={relatedProducts} title="Related Products" />
                </div>
            </Container>
        </div>
    )
}