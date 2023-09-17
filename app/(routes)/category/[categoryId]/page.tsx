import getBillboard from "@/actions/get-billboard";
import getCategory from "@/actions/get-category";
import Billboard from "@/components/Billboard";
import Container from "@/components/ui/Container";

export const revalidate = 0

export default async function CategoryPage({ params }: { params: { categoryId: string } }) {

    const Category = await getCategory(params?.categoryId)
    console.log(Category?.billboardId)
    const billboard = await getBillboard(Category?.billboardId)

    console.log(billboard, 'BILLBOARD')

    return (
        <div className="bg-white">
            <Container>
                <div className="w-full h-full">
                    <Billboard billboard={billboard} />
                </div>
            </Container>
        </div>
    )
} 