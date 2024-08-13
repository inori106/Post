import { postCategory } from '@/actions/postAction';
import SubmitButton from '@/components/SubmitButton';

export default async function CategoryAddPage() {
  return (
    <div>
      <h1 className='text-2xl font-semibold mb-4'>カテゴリ追加</h1>
      <form
        action={async (formdata: FormData) => {
          'use server';
          await postCategory(formdata);
        }}
      >
        <label className='text-xl font-semibold'>カテゴリ名</label>
        <input
          type='text'
          name='name'
          className='py-3 mt-1 px-2 w-full rounded-md border-2 border-gray-700 mb-3'
        />
        <SubmitButton className='bg-green-400 hover:bg-green-300'>
          追加
        </SubmitButton>
      </form>
    </div>
  );
}
