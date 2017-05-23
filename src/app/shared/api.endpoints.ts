const BASE_PATH = '/api';

export default {
  AUTHENTICATE: BASE_PATH + '/authenticate',

  // WORDS
  SEARCH: BASE_PATH + '/words/search',
  ADDWORD: BASE_PATH + '/addword',
  //USER
  USER: BASE_PATH + "/user",
  MODIFY_USER: BASE_PATH + "/modifyuser",
  CHANGEPASSWORD: BASE_PATH + "/changePassword",
  //COLLECTIONS
  COLLECTIONS: BASE_PATH + "/wordgroupbyuser",
  WORDLIST: BASE_PATH + "/wordlistbycollection",
  CREATEGROUP: BASE_PATH + "/creategroup"

}
