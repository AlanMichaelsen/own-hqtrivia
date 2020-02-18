const { Show } = require('../../models')

module.exports = async (req, res) => {
  const shows = await Show.findAll()
  res.json({
    shows: shows.map(show => ({
      showId: show.id,
      active: true,
      gameType: 'trivia',
      atCapacity: false,
      vertical: 'general',
      opt: 'hq-general',
      startTime: show.startTime,
      prizeCents: show.prize * 100,
      currency: 'USD',
      display: {
        title: 'HQ Trivia',
        summary: 'Answer trivia for cash prizes',
        accentColor: '#FFFFFF',
        description: 'Are you a sponge of random facts? HQ Trivia is the viral hit live mobile game show where your trivia smarts helps you win real cash. Answer questions that range from easy to hard, and if you get them all right, you win or split the cash prize.',
        image: 'https://cdn.prod.hype.space/static/channel/TRIVIA/Trivia@3x.png?v=3',
        logo: 'https://cdn.prod.hype.space/static/channel/TRIVIA/Trivia@3x.png?v=3',
        bgImage: 'https://cdn.prod.hype.space/static/channel/TRIVIA/Trivia-frame.png',
        bgVideo: 'https://cdn.prod.hype.space/static/channel/TRIVIA/HQ-Trivia-portrait-70percentSpeed-190kbps-HVEC_H265.mp4'
      },
      media: [],
      showType: 'hq',
      broadcastFull: null
    })),
    announcements: [],
    offairTrivia: {
      isGameInProgress: true,
      waitTimeMs: 15,
      powerups: {},
      games: {}
    }
  })
}
