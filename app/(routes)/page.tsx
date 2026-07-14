import getBillboard from "@/actions/get.billboard"
import Container from "@/components/ui/container"
import Billboard from "@/components/billboard"
import getProducts from "@/actions/get-product"
import ProductList from "@/components/product-list"

export const revalidate = 0

const Page = async() => {
  const Product = await getProducts({isFeatured: true})
  const billboard = await getBillboard("a9c4759b-8186-4587-99b0-8cdab42ec203")
  return (
    < Container>
        <div className="Space-y 10 pb-10">
          <Billboard data={billboard}/>
        </div>
        <div className="flex flex-col gap-y-8 px-4 sm:px-6 lg:px-8">
          <ProductList  title="Featured Products" items={Product}/>
        </div>
    </ Container>
  ) 
}

export default Page