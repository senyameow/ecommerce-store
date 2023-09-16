import getBillboard from "@/actions/get-billboard";
import getProducts from "@/actions/get-products";
import Billboard from "@/components/Billboard";
import ProductList from "@/components/ProductList";
import Container from "@/components/ui/Container";

export default async function HomePage() {

  const billboard = await getBillboard('ee0abb7a-3f96-4401-b24d-14ff2bb0a4e4')
  const products = await getProducts({ isFeatured: true })

  console.log(products)

  return (
    <Container>
      <div className="pb-10 space-y-10">
        <Billboard billboard={billboard} />
        <ProductList products={products} />
      </div>
    </Container>
  )
}
