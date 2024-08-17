import { connect, prisma } from '@/utils/prisma';
import { redirect } from 'next/navigation';
import { revalidatePath } from 'next/cache';

export const updateArticle = async (id: string, FormData: FormData) => {
  const title = FormData.get('title') as string;
  const content = FormData.get('content') as string;
  const categoriesId = FormData.getAll('categories') as string[];
  await connect();
  try {
    await prisma.article.update({
      where: { id: id },
      data: {
        title: title,
        content: content,
        categories: {
          set: categoriesId.map((id) => {
            return { id: id };
          }),
        },
      },
    });
  } catch (error) {
    throw new Error('記事の更新に失敗しました');
  } finally {
    await prisma.$disconnect();
  }
  revalidatePath(`/article`);
  redirect(`/article`);
};

export const deleteArticle = async (id: string) => {
  await connect();
  try {
    await prisma.article.delete({
      where: { id: id },
    });
  } catch (error) {
    throw new Error('記事の削除に失敗しました');
  } finally {
    await prisma.$disconnect();
  }
  revalidatePath(`/article`);
  redirect(`/article`);
};

export const updateCategory = async (id: string, FormData: FormData) => {
  const name = FormData.get('name') as string;
  await connect();
  try {
    await prisma.category.update({
      where: { id: id },
      data: {
        name: name,
      },
    });
  } catch (error) {
    throw new Error('カテゴリーの更新に失敗しました');
  } finally {
    await prisma.$disconnect();
    revalidatePath(`/category`);
    redirect(`/category`);
  }
};

export const deleteCategory = async (id: string) => {
  await connect();
  try {
    await prisma.category.delete({
      where: { id: id },
    });
  } catch (error) {
    throw new Error('カテゴリーの削除に失敗しました');
  } finally {
    await prisma.$disconnect();
  }
  revalidatePath(`/category`);
  redirect(`/category`);
};
