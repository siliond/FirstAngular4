import { FirstAngular4Page } from './app.po';

describe('first-angular4 App', () => {
  let page: FirstAngular4Page;

  beforeEach(() => {
    page = new FirstAngular4Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
