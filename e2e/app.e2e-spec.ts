import { MyDictionaryFrontendPage } from './app.po';

describe('my-dictionary-frontend App', () => {
  let page: MyDictionaryFrontendPage;

  beforeEach(() => {
    page = new MyDictionaryFrontendPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
