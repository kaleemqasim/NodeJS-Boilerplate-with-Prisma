const { PrismaClientKnownRequestError } = require("@prisma/client/runtime");

exports.getUsers = async () => {
  const users = await prisma.user.findMany();
  return users;
};

exports.createUser = async (userData) => {
  try {
    const newUser = await prisma.user.create({ data: userData });
    return newUser;
  } catch (e) {
    if (e instanceof PrismaClientKnownRequestError) {
      if (e.code === "P2002") {
        console.log(
          "There is a unique constraint violation, a new user cannot be created with this email."
        );
      }
    }
    throw e;
  }
};

exports.findUserByEmail = async (email) => {
  const user = await prisma.user.findUnique({
    where: {
      email: email,
    },
  });
  //   if we make this method dynamic col, value.
  // const user = await prisma.$queryRaw`SELECT * FROM User WHERE ${column} = ${value} LIMIT 1`

  return user;
};
