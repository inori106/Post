import { connect, prisma } from '@/utils/prisma';
import { redirect } from 'next/navigation';
import { revalidatePath } from 'next/cache';

export const updateArticle = async (id: string, FormData: FormData) => {
  const title = FormData.get('title') as string;
  const content = FormData.get('content') as string;
  const categoriesId = FormData.getAll('categories') as string[];
  await connect();
  try {
    const posts = await prisma.article.update({
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
    return posts;
  } catch (error) {
    console.error(error);
  } finally {
    await prisma.$disconnect();
    revalidatePath(`/article`);
    redirect(`/article`);
  }
};

export const deleteArticle = async (id: string) => {
  await connect();
  try {
    const posts = await prisma.article.delete({
      where: { id: id },
    });
    return posts;
  } catch (error) {
    console.error(error);
  } finally {
    await prisma.$disconnect();
    revalidatePath(`/article`);
    redirect(`/article`);
  }
};

export const updateCategory = async (id: string, FormData: FormData) => {
  const name = FormData.get('name') as string;
  await connect();
  try {
    const categories = await prisma.category.update({
      where: { id: id },
      data: {
        name: name,
      },
    });
    return categories;
  } catch (error) {
    console.error(error);
  } finally {
    await prisma.$disconnect();
    revalidatePath(`/category`);
    redirect(`/category`);
  }
};

export const deleteCategory = async (id: string) => {
  await connect();
  try {
    const categories = await prisma.category.delete({
      where: { id: id },
    });
    return categories;
  } catch (error) {
    console.error(error);
  } finally {
    await prisma.$disconnect();
    revalidatePath(`/category`);
    redirect(`/category`);
  }
};
