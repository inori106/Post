import { PrismaClient } from '@prisma/client';

export const prisma = new PrismaClient();

export async function connect() {
  try {
    await prisma.$connect();
  } catch (error) {
    throw new Error('データベースへの接続に失敗しました');
  }
}
