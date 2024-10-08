import { postArticle } from '@/actions/postAction';
import { getCategories } from '@/utils/getCategory';
import SubmitButton from '@/components/Button/SubmitButton';
import { Category } from '@/types/Category';
import Input from '@/components/Form/Input';
import TextArea from '@/components/Form/TextArea';
export default async function ArticleAddPage() {
  const categories = await getCategories();

  return (
    <div>
      <h1 className='text-2xl font-semibold mb-4'>記事の投稿</h1>
      <form
        action={async (formdata: FormData) => {
          'use server';
          await postArticle(formdata);
        }}
      >
        <Input label='タイトル' name='title' type='text' className='mb-3' />
        <TextArea label='本文' name='content' rows={15} />
        <div className='my-3'>
          <label className='text-xl font-semibold'>カテゴリ</label>
          <ul className='md:flex md:space-x-2'>
            {categories?.map((category: Category) => (
              <li key={category.id} className='flex items-center'>
                <input
                  type='checkbox'
                  name='categories'
                  value={category.id}
                  className='mr-3 w-5 h-5'
                />
                {category.name}
              </li>
            ))}
          </ul>
        </div>
        <SubmitButton className='bg-green-400 hover:bg-green-300'>
          投稿
        </SubmitButton>
      </form>
    </div>
  );
}
