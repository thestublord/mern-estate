import jwt from "jsonwebtoken";

export const errorHandler = (status, message) => {
  const error = new Error(message);
  error.status = status;
  return error;
};

export const verifyToken = (req, res, next) => {
  const token = req.cookies.access_token;
  if (!token) return next(errorHandler(401, "Unauthorized"));

  jwt.verify(token, process.env.JWT_SECRET, (error, user) => {
    if (error) return next(errorHandler(403, "Forbidden"));

    req.user = user;
    next();
  });
};
