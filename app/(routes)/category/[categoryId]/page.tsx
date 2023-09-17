import getBillboard from "@/actions/get-billboard";
import getCategory from "@/actions/get-category";
import getColors from "@/actions/get-colors";
import getProducts from "@/actions/get-products";
import getSizes from "@/actions/get-sizes";
import Billboard from "@/components/Billboard";
import Container from "@/components/ui/Container";
import Filter from "@/components/Filter";
import NoResults from "@/components/NoResults";
import { cn } from "@/lib/utils";
import ProductCard from "@/components/Product";
import MobileFilters from "@/components/MobileFilters";
export const revalidate = 0

export default async function CategoryPage({ params, searchParams }: { params: { categoryId: string }, searchParams: { colorId: string, sizeId: string } }) {

    const Category = await getCategory(params?.categoryId)
    const billboard = await getBillboard(Category?.billboardId)

    const products = await getProducts({ colorId: searchParams.colorId, sizeId: searchParams.sizeId, categoryId: params.categoryId })

    const colors = await getColors()
    const sizes = await getSizes()

    console.log(products)


    return (
        <div className="bg-white">
            <Container>
                <div className="w-full h-full">
                    <Billboard billboard={billboard} />
                </div>
                <div className="px-4 sm:px-6 lg:px-8 pb-24">
                    <div className="lg:grid lg:grid-cols-5 lg:gap-x-8">
                        <MobileFilters sizes={sizes} colors={colors} />
                        <div className="hidden lg:block">
                            <Filter data={sizes} title="Sizes" valueKey="sizeId" />
                            <Filter data={colors} title="Colors" valueKey="colorId" />
                        </div>

                        <div className={cn(`mt-6 lg:col-span-4 lg:mt-0`)}>
                            {products.length === 0 && <NoResults />}
                            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                                {products.map(product => (
                                    <ProductCard key={product.id} product={product} />
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
        </div>
    )
} 