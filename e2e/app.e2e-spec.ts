import { AngularCliTodoPage } from './app.po';

describe('angular-cli-todo App', function() {
  let page: AngularCliTodoPage;

  beforeEach(() => {
    page = new AngularCliTodoPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
