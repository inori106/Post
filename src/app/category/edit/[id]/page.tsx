import { getCategoryDetail } from '@/utils/getCategory';
import { updateCategory, deleteCategory } from '@/actions/editAction';
import SubmitButton from '@/components/SubmitButton';

export default async function EditPage({ params }: { params: { id: string } }) {
  const category = await getCategoryDetail(params.id);
  if (!category) return <div>カテゴリーがありません</div>;

  return (
    <div>
      <h1 className='text-2xl font-semibold mb-4'>カテゴリーの編集</h1>
      <form>
        <div className='mb-3'>
          <label className='text-xl font-semibold'>カテゴリー名</label>
          <input
            type='text'
            name='title'
            defaultValue={category.name}
            className='py-3 mt-1 px-2 w-full rounded-md border-2 border-gray-700'
          />
        </div>
        <div className='flex space-x-3 '>
          <SubmitButton
            formAction={async (formData: FormData) => {
              'use server';
              await updateCategory(params.id, formData);
            }}
            className='bg-green-400 hover:bg-green-300'
          >
            更新
          </SubmitButton>
          <SubmitButton
            formAction={async () => {
              'use server';
              await deleteCategory(params.id);
            }}
            className='bg-red-400 hover:bg-red-300'
          >
            削除
          </SubmitButton>
        </div>
      </form>
    </div>
  );
}
