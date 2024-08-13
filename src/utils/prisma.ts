import { PrismaClient } from '@prisma/client';

export const prisma = new PrismaClient();

export async function connect() {
  try {
    await prisma.$connect();
  } catch (error) {
    return Error('Failed to connect to the database');
  }
}
