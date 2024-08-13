'use server';
import { connect, prisma } from '@/utils/prisma';
import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';

export const postArticle = async (FormData: FormData) => {
  const title = FormData.get('title') as string;
  const content = FormData.get('content') as string;
  const categoriesId = FormData.getAll('categories') as string[];
  await connect();
  try {
    await prisma.article.create({
      data: {
        title: title,
        content: content,
        categories: {
          connect: categoriesId.map((id) => {
            return { id: id };
          }),
        },
      },
    });
  } catch (error) {
    return Error('Failed to create post');
  } finally {
    await prisma.$disconnect();
    revalidatePath('/article');
    redirect('/article');
  }
};

export const postCategory = async (FormData: FormData) => {
  const name = FormData.get('name') as string;
  await connect();
  try {
    await prisma.category.create({
      data: {
        name: name,
      },
    });
  } catch (error) {
    return Error('Failed to create category');
  } finally {
    await prisma.$disconnect();
    revalidatePath('/category');
    redirect('/category');
  }
};
