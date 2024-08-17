import { prisma, connect } from '@/utils/prisma';

export const getCategories = async () => {
  try {
    const categories = await prisma.category.findMany();
    return categories;
  } catch (error) {
    throw new Error('カテゴリーの取得に失敗しました');
  }
};

export const getCategoryDetail = async (id: string) => {
  await connect();
  try {
    const category = await prisma.category.findUnique({
      where: { id: id },
    });
    return category;
  } catch (error) {
    throw new Error('カテゴリーの取得に失敗しました');
  }
};
