module.exports = (req, res) => {
  res.json({
    verificationId: req.body.phone.replace('+', ''),
    phone: req.body.phone,
    retrySeconds: 0,
    expires: '2022-01-01T01:00:00.001Z',
    callsEnabled: false
  })
}
