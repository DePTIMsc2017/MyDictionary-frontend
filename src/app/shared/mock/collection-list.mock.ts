import {collectionList} from "../models/collection-list.model"

export let collectionListMock: Array<collectionList> = [{
  colId: 0,
  words: [{
    id:1,
    meaningIDs:[2,3]
  },
  {
    id:11,
    meaningIDs:[12]
  }]
},
  {
    colId: 1,
    words: [{
      id:3,
      meaningIDs: [4]
    },
    {
      id:5,
      meaningIDs: [6]
    },
      {
        id:7,
        meaningIDs :[8]
      },
      {
        id:9,
        meaningIDs: [10]
      }]
  }
];
