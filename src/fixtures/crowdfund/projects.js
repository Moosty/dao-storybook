import {crowdFundStates } from "../../shared/global.crowdfund";

export const projects = [
  {
    id: 1,
    state: crowdFundStates.PREVIEW,
    title: 'The DAO Project',
    category: 2,
    userAddress: '3457743L',
    userName: 'Raphael',
    targetAmount: '89504',
    totalRaised: '20040',
    durationProject: '90',
    projectUrl: '#',
    image: 0,
    closeDate: '5-4',
    closeDateFull: '7-3',
    backers: [
      {
        username: 'TestUsername',
        address: '123l',
        amount: '890',
        message: 'test',
      },
      {
        username: 'TestUsername',
        address: '123l',
        amount: '890',
        message: 'test',
      }

    ],
    donatedAmount: '10009',
    viewer: 'guest',
    maxVoteWeight: '100',
    notVoteWeight: '60',
    voteResult: 'voteresult',
    time: 'in one day',
    percentage: 20,
  },
  {
    id: 2,
    state: crowdFundStates.OPEN,
    title: 'This is a super long project name.',
    category: 0,
    userAddress: '345733333743L',
    userName: 'Sander',
    targetAmount: '203920',
    totalRaised: '20040',

    durationProject: '90',
    projectUrl: 'www.moosty.com',
    image: 1,
    closeDate: '5-4',
    closeDateFull: '7-3',
    backers: [
      {
        username: 'TestUsername',
        address: '123l',
        amount: '890',
        message: 'test',
      }

    ],
    donatedAmount: '10009',
    viewer: 'guest',
    maxVoteWeight: '100',
    notVoteWeight: '60',
    voteResult: 'voteresult',
  },
  {
    id: 3,
    state: crowdFundStates.PENDING,
    title: 'dit is een title',
    category: 0,
    userAddress: '345557743L',
    userName: 'Raphael',
    targetAmount: '200',
    totalRaised: '50',

    durationProject: '90',
    projectUrl: '#',
    image: 2,
    closeDate: '5-4',
    closeDateFull: '7-3',
    backers: [
      {
        username: 'TestUsername',
        address: '123l',
        amount: '890',
        message: 'test',
      }

    ],
    donatedAmount: '10009',
    viewer: 'guest',
    maxVoteWeight: '100',
    notVoteWeight: '60',
    voteResult: 'voteresult',
  },
  {
    id: 3,
    state: crowdFundStates.PENDING,
    title: 'dit is een title',
    category: 0,
    userAddress: '345557743L',
    userName: 'Raphael',
    targetAmount: '200',
    totalRaised: '50',

    durationProject: '90',
    projectUrl: '#',
    image: 2,
    closeDate: '5-4',
    closeDateFull: '7-3',
    backers: [
      {
        username: 'TestUsername',
        address: '123l',
        amount: '890',
        message: 'test',
      }

    ],
    donatedAmount: '10009',
    viewer: 'guest',
    maxVoteWeight: '100',
    notVoteWeight: '60',
    voteResult: 'voteresult',
  },
  {
    id: 4,
    state: crowdFundStates.ACTIVE.PENDING,
    title: 'dit is een title',
    category: 5,
    userAddress: '3455357743L',
    userName: 'Mr.BEAST',
    targetAmount: '200',
    totalRaised: '50',

    durationProject: '12',
    projectUrl: 'www.mrbeast.com',
    image: 6,
    closeDate: '5-4',
    closeDateFull: '7-3',
    backers: [
      {
        username: 'TestUsername',
        address: '123l',
        amount: '890',
        message: 'test',
      }

    ],
    donatedAmount: '10009',
    viewer: 'guest',
    maxVoteWeight: '100',
    notVoteWeight: '60',
    voteResult: 'voteresult',
  },
  {
    id: 5,
    state: crowdFundStates.ACTIVE.ACTIVE,
    title: 'dit is een title',
    category: 2,
    userAddress: '34517743L',
    userName: 'Raphael',
    targetAmount: '1000000',
    totalRaised: '999999',

    durationProject: '90',
    projectUrl: '#',
    image: 3,
    closeDate: '5-4',
    closeDateFull: '7-3',
    backers: [
      {
        username: 'TestUsername',
        address: '123l',
        amount: '890',
        message: 'test',
      }

    ],
    donatedAmount: '10009',
    viewer: 'guest',
    maxVoteWeight: '100',
    notVoteWeight: '60',
    voteResult: 'voteresult',
  },
  {
    id: 6,
    state: crowdFundStates.ACTIVE.VOTING,
    title: 'dit is een title',
    category: 3,
    userAddress: '345799743L',
    userName: 'Raphael',
    targetAmount: '10200',
    durationProject: '90',
    projectUrl: 0,
    image: 4,
    closeDate: '5-4',
    closeDateFull: '7-3',
    backers: [
      {
        username: 'TestUsername',
        address: '123l',
        amount: '890',
        message: 'test',
      }

    ],
    donatedAmount: '10009',
    viewer: 'guest',
    maxVoteWeight: '100',
    notVoteWeight: '60',
    voteResult: 'voteresult',
  },
  {
    id: 7,
    state: crowdFundStates.ACTIVE.CLAIMING,
    title: 'dit is een title',
    category: 4,
    userAddress: '345700743L',
    userName: 'Raphael',
    targetAmount: '1000',
    durationProject: '90',
    projectUrl: 3,
    image: 5,
    closeDate: '5-4',
    closeDateFull: '7-3',
    backers: [
      {
        username: 'TestUsername',
        address: '123l',
        amount: '890',
        message: 'test',
      }

    ],
    donatedAmount: '10009',
    viewer: 'guest',
    maxVoteWeight: '100',
    notVoteWeight: '60',
    voteResult: 'voteresult',
  },
  {
    id: 8,
    state: crowdFundStates.FAILED,
    title: 'dit is een title',
    category: 0,
    userAddress: '3457700000000043L',
    userName: 'Raphael',
    targetAmount: '340',
    durationProject: '90',
    projectUrl: 1,
    image: 6,
    closeDate: '5-4',
    closeDateFull: '7-3',
    backers: [
      {
        username: 'TestUsername',
        address: '123l',
        amount: '890',
        message: 'test',
      }

    ],
    donatedAmount: '10009',
    viewer: 'guest',
    maxVoteWeight: '100',
    notVoteWeight: '60',
    voteResult: 'voteresult',
  },
  {
    id: 9,
    state: crowdFundStates.ENDED,
    title: 'dit is een title',
    category: 0,
    userAddress: '3457446464646743L',
    userName: 'Raphael',
    targetAmount: '200',
    durationProject: '90',
    projectUrl: 2,
    image: 7,
    closeDate: '5-4',
    closeDateFull: '7-3',
    backers: [
      {
        username: 'TestUsername',
        address: '123l',
        amount: '890',
        message: 'test',
      }

    ],
    donatedAmount: '10009',
    viewer: 'guest',
    maxVoteWeight: '100',
    notVoteWeight: '60',
    voteResult: 'voteresult',
  },
  {
    id: 10,
    state: crowdFundStates.CANCELED,
    title: 'dit is een title',
    category: 0,
    userAddress: '345222227743L',
    userName: 'Raphael',
    targetAmount: '894',
    durationProject: '90',
    projectUrl: '#',
    image: 8,
    closeDate: '5-4',
    closeDateFull: '7-3',
    backers: [
      {
        username: 'TestUsername',
        address: '123l',
        amount: '890',
        message: 'test',
      }

    ],
    donatedAmount: '10009',
    viewer: 'guest',
    maxVoteWeight: '100',
    notVoteWeight: '60',
    voteResult: 'voteresult',
  }
]
