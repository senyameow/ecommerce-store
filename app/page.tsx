import getBillboard from "@/actions/get-billboard";
import Billboard from "@/components/Billboard";
import Container from "@/components/ui/Container";

export default async function HomePage() {

  const billboard = await getBillboard('ee0abb7a-3f96-4401-b24d-14ff2bb0a4e4')

  return (
    <Container>
      <div className="pb-10 space-y-10">
        <Billboard billboard={billboard} />
      </div>
    </Container>
  )
}
