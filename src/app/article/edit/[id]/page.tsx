import { getArticleDetail } from '@/utils/getArticle';
import { updateArticle, deleteArticle } from '@/actions/editAction';
import SubmitButton from '@/components/Button/SubmitButton';
import { getCategories } from '@/utils/getCategory';
import { Category } from '@/types/Category';
import Input from '@/components/Form/Input';
import TextArea from '@/components/Form/TextArea';

export default async function ArticleEditPage({
  params,
}: {
  params: { id: string };
}) {
  const post = await getArticleDetail(params.id);
  const categories = await getCategories();
  if (!post) return <div>記事がありません</div>;
  const haveCategories = post.categories?.map(
    (category: Category) => category.id
  );
  return (
    <div>
      <h1 className='text-2xl font-semibold mb-4'>記事の編集</h1>
      <form>
        <Input
          label='タイトル'
          name='title'
          type='text'
          className='mb-3'
          defaultValue={post.title}
        />
        <TextArea
          label='本文'
          name='content'
          rows={15}
          defaultValue={post.content}
        />
        <div className='my-3'>
          <label className='text-xl font-semibold'>カテゴリー</label>
          <ul className='md:flex md:space-x-2'>
            {categories?.map((category: Category) => (
              <li key={category.id} className='flex items-center'>
                <input
                  type='checkbox'
                  name='categories'
                  value={category.id}
                  defaultChecked={haveCategories.includes(category.id)}
                  className='mr-3 w-5 h-5'
                />
                {category.name}
              </li>
            ))}
          </ul>
        </div>
        <div className='flex space-x-3'>
          <SubmitButton
            className='bg-green-400 hover:bg-green-300'
            formAction={async (formData: FormData) => {
              'use server';
              await updateArticle(params.id, formData);
            }}
          >
            更新
          </SubmitButton>
          <SubmitButton
            className='bg-red-400 hover:bg-red-300'
            formAction={async () => {
              'use server';
              await deleteArticle(params.id);
            }}
          >
            削除
          </SubmitButton>
        </div>
      </form>
    </div>
  );
}
