import getProduct from "@/actions/get-product";
import getProducts from "@/actions/get-products";
import ProductList from "@/components/product-list";
import Container from "@/components/ui/container";
import Gallery from "@/components/gallery/index";
import Info from "@/components/info";
import Image from "next/image";
import React from "react";
import CategoryPage from "../../category/[categoryId]/page";

interface ProductPageProps {
  params: Promise<{
    productId: string;
  }>;
}


 const ProductPage = async ({
  params
}: ProductPageProps) => {
  const { productId } = await params;

  console.log("PRODUCT ID =", productId);

  const product = await getProduct(productId);

  console.log("PRODUCT =", JSON.stringify(product, null, 2));

  if (!product) {
    return <div>Product not found</div>;
  }

  const suggestedProducts = await getProducts({
    categoryId: product.category?.id
  });

  return (
    <div className="bg-white">
      <Container>
        <div className="px-4 py-10 sm:px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-2 lg:items-start lg:gap-x-8">
                 
                <Gallery images={product?.images}/>
            <div className="mt-10 px-4 sm:mt-16 sm:px-0 lg:mt-0">
               <Info data={product} />
            </div>
          </div>

          <br className="my-10" />

          <ProductList
            title="Related Items"
            items={suggestedProducts}
          />
        </div>
      </Container>
    </div>
  );
};

export default ProductPage;