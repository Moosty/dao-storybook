//TODO CONSTANTS IN ALL CAPS

export const crowdFundStates = {
  PREVIEW: "preview",
  OPEN: "open",
  PENDING: "pending",
  ACTIVE: {
    ACTIVE: "active.active",
    PENDING: "active.pending",
    VOTING: "active.voting",
    CLAIMING: "active.claiming",
  },
  FAILED: "failed",
  ENDED: "ended",
  CANCELED: "canceled",
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