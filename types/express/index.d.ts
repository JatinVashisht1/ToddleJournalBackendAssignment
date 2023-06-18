import { JwtPayload } from "jsonwebtoken";

declare global {
  namespace Express {
    interface User {
      id: string;
      token: string;
      username: string;
    }
    interface Request {
      jwt: JwtPayload | string;
      token: string;
    }
  }
}
