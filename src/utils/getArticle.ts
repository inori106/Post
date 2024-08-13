import { prisma, connect } from '@/utils/prisma';

export const getArticles = async () => {
  await connect();
  try {
    const articles = await prisma.article.findMany();
    return articles;
  } catch (error) {
    console.error(error);
  } finally {
    await prisma.$disconnect();
  }
};

export const getArticleDetail = async (id: string) => {
  await connect();
  try {
    const article = await prisma.article.findUnique({
      where: { id: id },
      include: { categories: true },
    });
    return article;
  } catch (error) {
    console.error(error);
  } finally {
    await prisma.$disconnect();
  }
};
