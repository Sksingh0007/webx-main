"use server";

import prisma from "@/lib/prisma";
import { revalidatePath } from "next/cache";

export async function updateName(id: string, name: string) {
  await prisma.user.update({
    where: { id },
    data: { name },
  });

  revalidatePath(`/account/${id}`);
}

export async function updateAvatar(id: string, avatarUrl: string) {
  await prisma.user.update({
    where: { id },
    data: { avatarUrl },
  });

  revalidatePath(`/account/${id}`);
}
