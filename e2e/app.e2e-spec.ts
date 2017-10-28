import { BlocChatNg4Page } from './app.po';

describe('bloc-chat-ng4 App', () => {
  let page: BlocChatNg4Page;

  beforeEach(() => {
    page = new BlocChatNg4Page();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
