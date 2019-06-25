const sendErrorResponse = (res, code, errorMessage) => {
  res.status(code).json({
    status: 'error',
    error: errorMessage,
  });
}

export const sendSuccessResponse = (res, code, token, data) => {
  res.status(code).json({
    status: 'success',
    token,
    data,
  });
}

export default sendErrorResponse;
