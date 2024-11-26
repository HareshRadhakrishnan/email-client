import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();
await prisma.user.create({
  data: {
    email: "ha3@gmail.com",
    firstName: "Haresh",
    lastName: "Radhakrishnan",
  },
});
console.log("created user");
