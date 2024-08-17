import { getCategories } from '@/utils/getCategory';
import { Category } from '@/types/Category';
import LinkButton from '@/components/Button/LinkButton';

export default async function CategoryPage() {
  const categories = await getCategories();
  if (!categories) return <div>カテゴリがありません</div>;
  return (
    <div>
      <h1 className='text-2xl font-semibold'>カテゴリ一覧</h1>
      <ul className='space-y-4 mt-8'>
        {categories.map((category: Category) => (
          <div key={category.id} className='flex items-center justify-between'>
            <h2 className='text-xl font-semibold'>{category.name}</h2>
            <LinkButton
              href={`/category/edit/${category.id}`}
              className='bg-green-400 hover:bg-green-300'
            >
              編集
            </LinkButton>
          </div>
        ))}
      </ul>
    </div>
  );
}
