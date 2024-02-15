export const errorHandler = (err, req, res, next) => {
  console.log("error handler working");
  console.error(err);
  const statusCode = err.statusCode || 500;
  const message = err.message || "Internal Server Error";

  res.status(statusCode).json({ status:false, error: message });
};


