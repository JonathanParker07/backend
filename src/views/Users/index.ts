import { RequestHandler } from "express";

import {
  createUser,
  deactivateUser,
  deleteUser,
  getUserByEmail,
  getUserById,
  listUsers,
  updateUser
} from "../../models/users";



/****************/
/** Create User */
export const CreateUser: RequestHandler = async (req, res, next) => {
  const response = await createUser(req.body)

  res.status(201).json(response);
}


/***************/
/** List Users */
export const ListUsers: RequestHandler = async (req, res, next) => {
  const response = await listUsers()

  res.status(200).json(response);
}


/*******************/
/** Get User by ID */
export const GetUserById: RequestHandler = async (req, res, next) => {
  const userId = req.params.userId;
  const response = await getUserById(userId);

  res.status(200).json(response);
}


/**********************/
/** Get User by Email */
export const GetUserByEmail: RequestHandler = async (req, res, next) => {
  const { email } = req.body;
  const rawEmail = req.params.email;
  const decodedEmail = decodeURIComponent(rawEmail);
  const response = await getUserByEmail(email || decodedEmail);

  res.status(200).json(response);
}


/****************/
/** Update User */
export const UpdateUser: RequestHandler = async (req, res, next) => {
  const userId = req.params.userId;
  const fields = req.body;
  const response = await updateUser(userId, fields);

  res.status(200).json(response);
}


/********************/
/** Deactivate User */
export const DeactivateUser: RequestHandler = async (req, res, next) => {
  const userId = req.params.userId;
  const response = await deactivateUser(userId);

  res.status(200).json(response);
}


/****************/
/** Delete User */
export const DeleteUser: RequestHandler = async (req, res, next) => {
  const userId = req.params.userId;
  await deleteUser(userId);

  res.status(204).json();
}