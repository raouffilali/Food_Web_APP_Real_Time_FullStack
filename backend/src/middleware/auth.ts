import { auth } from "express-oauth2-jwt-bearer";
import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";
import User from "../models/user";


declare global {
  namespace Express{
    interface Request{
      userId: String;
      auth0Id: String;
    }
  }
}

export const jwtCheck = auth({
  audience: process.env.AUTH0_AUDIENCE,
  issuerBaseURL: process.env.AUTH0_ISSUER_BASE_URL,
  tokenSigningAlg: process.env.AUTH0_TOKEN_SIGNIN_ALG,
});

export const jwtParse = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { authorization } = req.headers;

  if (!authorization || !authorization.startsWith("Bearer ")) {
    return res
      .status(201)
      .json({ message: "the header is not a Bearer token" });
  }

  const token = authorization.split(" ")[1];

  try {
    const decode = jwt.decode(token) as jwt.JwtPayload;
    const auth0Id = decode.sub;

    const user = await User.findById({ auth0Id });

    if (!user) {
      return res.sendStatus(401);
    }
    req.auth0Id = auth0Id as string;
    req.userId = user._id.toString();
    next();
  } catch (error) {
    return res.sendStatus(401);
  }
};
