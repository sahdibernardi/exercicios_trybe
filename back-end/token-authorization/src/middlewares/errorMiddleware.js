module.exports = async function errorMiddleware(error, req, res, _next) {
  console.error(error.stack);
  return res.status(404).json({ message: 'Error! page not found' });
  // there's no next() because the error is final.
};
