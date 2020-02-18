module.exports = async (req, res) => {
  console.log(req.user)
  res.json({
    userId: req.user.id,
    username: req.user.username,
    avatarUrl: 'https://cdn.prod.hype.space/da/gold.png',
    created: req.user.created_at,
    broadcasts: {
      data: []
    },
    featured: true,
    voip: false,
    deviceTokens: [],
    hasPhone: true,
    phoneNumber: req.user.phone,
    referralUrl: '',
    lives: req.user.lives,
    referred: false,
    referringUserId: null,
    highScore: 0,
    gamesPlayed: 0,
    winCount: 0,
    blocked: false,
    blocksMe: false,
    preferences: {
      sharingEnabled: false,
      'hq - general': true
    },
    friendIds: [],
    achievementCount: 0,
    leaderboard: {
      wins: 0,
      rank: 101,
      alltime: {
        total: '$0',
        wins: 0,
        rank: 101
      },
      weekly: {
        total: '$0',
        wins: 0,
        rank: 101
      },
      totalCents: 0,
      total: '$0',
      unclaimed: '$0'
    },
    items: {
      lives: req.user.lives,
      superSpins: 0
    },
    coins: req.user.coins,
    stk: 'MQ==',
    erase1s: req.user.erasers
  })
}
