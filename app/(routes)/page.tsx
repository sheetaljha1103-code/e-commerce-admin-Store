import getBillboard from "@/actions/get.billboard"
import Container from "@/components/ui/container"
import Billboard from "@/components/ui/billboard"
import getProducts from "@/actions/get-product"
import ProductList from "@/components/ui/product-list"

export const revalidate = 0

const Page = async() => {
  const Product = await getProducts({isFeatured: true})
  const billboard = await getBillboard("317a05c8-0bac-4596-a16e-38624ac3baa9")
  return (
    < Container>
        <div className="Space-y 10 pb-10">
          <Billboard data={billboard}/>
        </div>
        <div className="flex flex-col gap-y-8 px-4 sm:px-6 lg:px-8">
          <ProductList title="Featured Products" items={Product}/>
        </div>
    </ Container>
  ) 
}

export default Page