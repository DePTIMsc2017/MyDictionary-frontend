export let wordsMock: Array<Word> = [
  {
    id: 1,
    word: 'alma',
    wordClass: 'Főnév',
    language: {
      id: 1,
      name: 'magyar'
    },
    wordMeaning1: [
      {
        id: 2,
        word: 'apple',
        wordClass: 'Noun',
        language: {
          id: 2,
          name: 'angol'
        }
      }
    ]
  },
  {
    id: 3,
    word: 'barack',
    wordClass: 'Főnév',
    language: {
      id: 1,
      name: 'magyar'
    },
    wordMeaning1: [
      {
        id: 4,
        word: 'peach',
        wordClass: 'Noun',
        language: {
          id: 2,
          name: 'angol'
        }
      }
    ]
  }
];
