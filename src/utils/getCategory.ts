import { prisma, connect } from '@/utils/prisma';

export const getCategories = async () => {
  await connect();
  try {
    const categories = await prisma.category.findMany();
    return categories;
  } catch (error) {
    console.error(error);
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
    console.error(error);
  }
};
