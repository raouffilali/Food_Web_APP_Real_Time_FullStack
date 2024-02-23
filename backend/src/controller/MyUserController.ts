import { Request, Response } from "express";
import User from "../models/user";

const createCurrentUser = async (req: Request, res: Response) => {
  try {
    //1. check if user exists
    const { auth0Id } = req.body;
    const existingUser = await User.findOne({ auth0Id });

    existingUser ? res.status(200).send : null;
    //2. create the user if it doese not exist
    const newUser = new User(req.body);
    await newUser.save();

    //3. return the user object to the calling client
    res.status(200).json(newUser.toObject());
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Error creating a user!" });
  }
};

export default {
  createCurrentUser,
};
