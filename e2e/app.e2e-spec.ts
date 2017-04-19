import { MultiRoutePage } from './app.po';

describe('multi-route App', () => {
  let page: MultiRoutePage;

  beforeEach(() => {
    page = new MultiRoutePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
