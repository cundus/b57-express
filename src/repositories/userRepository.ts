import { User } from "@prisma/client";
import prisma from "../libs/prisma";

export const createUser = async (user: User) => {
   return await prisma.user.create({
      data: {
         name: user.name,
         address: user.address,
      },
   });
};

export const findManyUsers = async () => {
   return await prisma.user.findMany();
};
