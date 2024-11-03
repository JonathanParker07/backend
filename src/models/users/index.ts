import { prismaClient } from "..";



// THIS IS A DEMO, NOT PRODUCTION LEVEL CODE.
// CHANGE IT IN THE NEAR FUTURE!!!
// ELSE PEOPEL WILL DIIEEE



/****************/
/** Create User */
export async function createUser(fields: any) {
  const { email } = fields;
  const user = await prismaClient.user.create({
    data: {
      email
    }
  });

  return user;
}


/***************/
/** List Users */
export async function listUsers() {
  const users = await prismaClient.user.findMany();

  return users;
}


/*******************/
/** Get User by ID */
export async function getUserById(id: string) {
  const user = await prismaClient.user.findUnique({
    where: {
      id
    }
  });

  return user;
}


/**********************/
/** Get User by Email */
export async function getUserByEmail(email: string) {
  const user = await prismaClient.user.findUnique({
    where: {
      email
    }
  });

  return user;
}


/****************/
/** Update User */
export async function updateUser(id: string, fields: any) {
  const { firstName, lastName } = fields
  const updatedUser = await prismaClient.user.update({
    where: {
      id
    },
    data: {
      // if the firstname has been passed, update it, otherwise do nothing
      ...(firstName ? {
        firstName
      } : {}),
      ...(typeof lastName === "string" ? {
        lastName
      } : {})
    }
  });

  return updatedUser;
}


/********************/
/** Deactivate User */
export async function deactivateUser(id: string) {
  const now = new Date();
  // "now" is the time of the server i.e. where the API is hosted
  const deactivatedUser = await prismaClient.user.update({
    where: {
      id
    },
    data: {
      deactivatedAt: now
    }
  });

  return deactivatedUser;
}


/****************/
/** Delete User */
export async function deleteUser(id: string) {
  await prismaClient.user.delete({
    where: {
      id
    }
  });

  return null;
}