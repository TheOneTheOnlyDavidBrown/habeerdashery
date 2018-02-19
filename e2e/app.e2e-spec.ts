import { HabeerdasheryPage } from './app.po';

describe('habeerdashery App', () => {
  let page: HabeerdasheryPage;

  beforeEach(() => {
    page = new HabeerdasheryPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
