module.exports = {
  responseWithData(status, message = null, data, res) {
    return res
      .status(status)
      .json({ status: status, data: data, message: message });
  },

  responseWithoutData(status, message = null, res) {
    return res.status(status).json({ status: status, message: message });
  },
};
