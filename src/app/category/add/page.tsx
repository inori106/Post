import { postCategory } from '@/actions/postAction';
import SubmitButton from '@/components/Button/SubmitButton';
import Input from '@/components/Form/Input';

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
        <Input label='カテゴリ名' name='name' type='text' className='mb-3' />
        <SubmitButton className='bg-green-400 hover:bg-green-300'>
          追加
        </SubmitButton>
      </form>
    </div>
  );
}
