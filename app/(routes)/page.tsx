import getBillboard from "@/actions/get-billboard";
import getProducts from "@/actions/get-products";

import Billboard from "@/components/billboard";
import Container from "@/components/ui/container";
import ProductList from "@/components/product-list";

export const revalidate = 0;

const HomePage = async () => {
  const billboard = await getBillboard("01e7b9ef-f569-4ca0-b8fe-5e3c43ef2a2e");
  const products = await getProducts({ isFeatured: true });

  return (
    <Container>
      <div className='space-y-10 pb-10'>
        <Billboard data={billboard} />

        <div className='flex flex-col gap-y-8 px-4 sm:px-6 lg:px-8'>
          <ProductList title='Featured Products' items={products} />
        </div>
      </div>
    </Container>
  );
};

export default HomePage;
