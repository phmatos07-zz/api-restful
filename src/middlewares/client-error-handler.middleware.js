const clientErrorHandlerMiddleware = (err, req, res, next) => {
  try {

    if (!req.xhr) {
      next(err);
      return;
    }
    throw new Error(err);

  } catch (catchError) {

    console.error(catchError);
    res.status(500);
    res.send({ error: catchError });
  }
};

module.exports = clientErrorHandlerMiddleware;
