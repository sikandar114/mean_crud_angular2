import { CliSrc1Page } from './app.po';

describe('cli-src1 App', () => {
  let page: CliSrc1Page;

  beforeEach(() => {
    page = new CliSrc1Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
