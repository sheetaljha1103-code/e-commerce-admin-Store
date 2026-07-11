interface CategoryPageProps {
  params: Promise<{
    categoryId: string;
  }>;
}

const CategoryPage = async ({ params }: CategoryPageProps) => {
  const { categoryId } = await params;

  return (
    <div>
      Category: {categoryId}
    </div>
  );
};

export default CategoryPage;