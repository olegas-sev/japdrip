import { CategoriesBar, Container, Filters, Title } from '@/components/shared';
import { ProductCard } from '@/components/shared/product-card';
import { ProductsGroupList } from '@/components/shared/products-group-list';

export default function Home() {
  return (
    <>
      <Container className="mt-10">
        <Title text="All drip" size="lg" className="font-extrabold" />
      </Container>
      <CategoriesBar />
      <Container className="mt-10 pb-14">
        <div className="flex gap-16">
          {/* Filter */}
          <div className="w-64">
            <Filters />
          </div>
          {/* Products */}
          <div className="flex-1">
            <div className="flex flex-col gap-16">
              <ProductsGroupList
                title="Kimono"
                items={[
                  {
                    id: 1,
                    name: 'Blue Kimono',
                    imageUrl:
                      'https://i.ibb.co/TMvCrxgT/kimono-removebg-preview.png',
                    price: 5520,
                    items: [{ price: 550 }],
                  },
                  {
                    id: 1,
                    name: 'Blue Kimono',
                    imageUrl:
                      'https://i.ibb.co/Kcwj2cGT/Untitled-design-removebg-preview.png',
                    price: 5520,
                    items: [{ price: 550 }],
                  },
                  {
                    id: 1,
                    name: 'Blue Kimono',
                    imageUrl:
                      'https://i.ibb.co/TMvCrxgT/kimono-removebg-preview.png',
                    price: 5520,
                    items: [{ price: 550 }],
                  },
                  {
                    id: 1,
                    name: 'Blue Kimono',
                    imageUrl:
                      'https://i.ibb.co/Kcwj2cGT/Untitled-design-removebg-preview.png',
                    price: 5520,
                    items: [{ price: 550 }],
                  },
                  {
                    id: 1,
                    name: 'Blue Kimono',
                    imageUrl:
                      'https://i.ibb.co/TMvCrxgT/kimono-removebg-preview.png',
                    price: 5520,
                    items: [{ price: 550 }],
                  },
                  {
                    id: 1,
                    name: 'Blue Kimono',
                    imageUrl:
                      'https://i.ibb.co/Kcwj2cGT/Untitled-design-removebg-preview.png',
                    price: 5520,
                    items: [{ price: 550 }],
                  },
                ]}
                categoryId={1}
              />
              <ProductsGroupList
                title="Yukata"
                categoryId={2}
                items={[
                  {
                    id: 1,
                    name: 'Blue Kimono',
                    imageUrl:
                      'https://i.ibb.co/TMvCrxgT/kimono-removebg-preview.png',
                    price: 5520,
                    items: [{ price: 550 }],
                  },
                  {
                    id: 1,
                    name: 'Blue Kimono',
                    imageUrl:
                      'https://i.ibb.co/Kcwj2cGT/Untitled-design-removebg-preview.png',
                    price: 5520,
                    items: [{ price: 550 }],
                  },
                  {
                    id: 1,
                    name: 'Blue Kimono',
                    imageUrl:
                      'https://i.ibb.co/TMvCrxgT/kimono-removebg-preview.png',
                    price: 5520,
                    items: [{ price: 550 }],
                  },
                  {
                    id: 1,
                    name: 'Blue Kimono',
                    imageUrl:
                      'https://i.ibb.co/Kcwj2cGT/Untitled-design-removebg-preview.png',
                    price: 5520,
                    items: [{ price: 550 }],
                  },
                  {
                    id: 1,
                    name: 'Blue Kimono',
                    imageUrl:
                      'https://i.ibb.co/TMvCrxgT/kimono-removebg-preview.png',
                    price: 5520,
                    items: [{ price: 550 }],
                  },
                  {
                    id: 1,
                    name: 'Blue Kimono',
                    imageUrl:
                      'https://i.ibb.co/Kcwj2cGT/Untitled-design-removebg-preview.png',
                    price: 5520,
                    items: [{ price: 550 }],
                  },
                ]}
              />
            </div>
          </div>
        </div>
      </Container>
    </>
  );
}
