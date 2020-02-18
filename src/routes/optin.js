module.exports = (req, res) => {
  res.json({
    opts: [
      {
        title: 'HQ Trivia',
        opt: 'hq-general',
        in: 'Subscribe',
        out: 'Subscribed',
        onboardingDescription: 'Play trivia to win cash',
        opted: true
      }
    ]
  })
}
