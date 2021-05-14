//TODO CONSTANTS IN ALL CAPS

export const PROJECT_LIFECYCLE = {
  PERIOD_BLOCKS: 30, // 100 blocks per period
  VOTE_BLOCKS: 10, // voting time 20 blocks
  VOTE_BEFORE_END_PERIOD: 10, // voting ends 10 blocks before end. --> resultaat voting laten zien
  BLOCK_TIME: 5,
}

export const crowdFundStates = {
  PREVIEW: "PREVIEW", // crowdfund created, waiting to start
  OPEN: "OPEN", // crowdfund started, waiting for total fund (unlimited time)
  PENDING: "PENDING", // crowdfund is filled, waiting to register a start date, by owner
  ACTIVE: {
    PENDING: "ACTIVE PENDING", // crowdfund date is known, waiting until start project
    ACTIVE: "ACTIVE ACTIVE", // crowdfund is active, waiting until other period
    VOTING: "ACTIVE VOTING", // crowdfund is active and voting period is live, until end of voting period
    CLAIMING: "ACTIVE CLAIMING", // crowdfund is active. Claiming is active
  },
  FAILED: "FAILED", // owners canceled project. Everybody gets refund. You need to claim your funds back
  ENDED: "ENDED", // crowdfund is ended, no specifics
  CANCELED: "CANCELED", // crowdfund is canceled by investors. Investors can claim their funds back.
}

export const CROWDFUNDSTATELIST = Object.keys(crowdFundStates).map(key => typeof crowdFundStates[key] === "string" ? crowdFundStates[key] : Object.values(crowdFundStates[key])).flat();

export const categories = [
  "Identity",
  "Gaming",
  "Real Estate",
  "Energy & Sustainability",
  "Government & Public Sector",
  "Healthcare",
  "DeFi",
  "Law",
  "Gambling",
  "Media & Entertainment",
]

export const projectImages = [
  "https://images.unsplash.com/photo-1525130413817-d45c1d127c42?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1920&q=60&&sat=-100",
  "https://images.pexels.com/photos/801863/pexels-photo-801863.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260",
  "https://images.pexels.com/photos/7175448/pexels-photo-7175448.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
  "https://images.pexels.com/photos/7446143/pexels-photo-7446143.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
  "https://images.pexels.com/photos/5340360/pexels-photo-5340360.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
  "https://images.pexels.com/photos/2521470/pexels-photo-2521470.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
  "https://images.pexels.com/photos/3818835/pexels-photo-3818835.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
  "https://images.pexels.com/photos/4021939/pexels-photo-4021939.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
]

export const userRoles = {
  GUEST: "guest",
  OWNER: "owner",
  BACKER: "backer",
}