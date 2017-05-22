import { Word } from '../models/word.model';

export let wordsMock: Array<Word> = [
  {
    id: 1,
    word: 'vár',
    wordClass: 'Főnév',
    language: {
      id: 1,
      name: 'magyar'
    },
    wordMeaning1: [
      {
        id: 2,
        word: 'wait',
        wordClass: 'verb',
        language: {
          id: 2,
          name: 'angol'
        }
      },
      {
        id: 3,
        word: 'castle',
        wordClass: 'noun',
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
  },
  {
    id: 5,
    word: 'cseresznye',
    wordClass: 'Főnév',
    language: {
      id: 1,
      name: 'magyar'
    },
    wordMeaning1: [
      {
        id: 6,
        word: 'cherry',
        wordClass: 'Noun',
        language: {
          id: 2,
          name: 'angol'
        }
      }
    ]
  },
  {
    id: 7,
    word: 'szőlő',
    wordClass: 'Főnév',
    language: {
      id: 1,
      name: 'magyar'
    },
    wordMeaning1: [
      {
        id: 8,
        word: 'grapes',
        wordClass: 'Noun',
        language: {
          id: 2,
          name: 'angol'
        }
      }
    ]
  },
  {
    id: 9,
    word: 'málna',
    wordClass: 'Főnév',
    language: {
      id: 1,
      name: 'magyar'
    },
    wordMeaning1: [
      {
        id: 10,
        word: 'raspberry',
        wordClass: 'Noun',
        language: {
          id: 2,
          name: 'angol'
        }
      }
    ]
  },
  {
    id: 11,
    word: 'egyedi',
    wordClass: 'Melléknév',
    language: {
      id: 1,
      name: 'magyar'
    },
    wordMeaning1: [
      {
        id: 12,
        word: 'unique',
        wordClass: 'Adjective',
        language: {
          id: 2,
          name: 'angol'
        }
      }
    ]
  }
];

export let suggestedWordsMock: Array<Word> = [
  {
    id: 1,
    word: 'könyv',
    wordClass: 'Főnév',
    language: {
      id: 1,
      name: 'magyar'
    },
    wordMeaning1: [
      {
        id: 2,
        word: 'book',
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
    word: 'tank',
    wordClass: 'Főnév',
    language: {
      id: 1,
      name: 'magyar'
    },
    wordMeaning1: [
      {
        id: 4,
        word: 'tank',
        wordClass: 'Noun',
        language: {
          id: 2,
          name: 'angol'
        }
      }
    ]
  }
];
