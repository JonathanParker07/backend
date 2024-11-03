import { Application } from "express";

import { Default } from "../views/Default";
import {
  CreateUser,
  DeactivateUser,
  DeleteUser,
  GetUserByEmail,
  GetUserById,
  ListUsers,
  UpdateUser
} from "../views/Users";



export const routes = (app: Application) => {
  // Default views for unhandled URLs

  const users = "/users";
  const userId = ":userId";
  app.post(users, CreateUser);
  app.get(users, ListUsers);
  app.get(`${users}/${userId}`, GetUserById);
  app.post(`${users}`, GetUserByEmail);
  app.patch(`${users}/${userId}`, UpdateUser);
  app.patch(`${users}/${userId}`, DeactivateUser);
  app.delete(`${users}/${userId}`, DeleteUser);


  app.get(`/time`, (req, res) => {
    console.log("getting time")
    const serverTime = new Date().toISOString();
    res.json({ details: serverTime });
  });


  app.get("*", Default);
  app.post("*", Default);
  app.put("*", Default);
  app.patch("*", Default);
  app.delete("*", Default);

  return app;
}