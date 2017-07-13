import { CrossfitPage } from './app.po';

describe('crossfit App', () => {
  let page: CrossfitPage;

  beforeEach(() => {
    page = new CrossfitPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
