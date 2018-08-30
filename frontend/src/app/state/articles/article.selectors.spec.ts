import { generateArticles } from './article.interface';
import { getSelectedArticle } from './article.selectors';


describe('Articles selectors', () => {

  const articles = generateArticles(2);

  const entities = {
    [articles[0].id]: articles[0],
    [articles[1].id]: articles[1]
  };

  const selectedArticle = articles[0];

  it('should return null when entities is falsy', () => {
    expect(getSelectedArticle.projector(null, selectedArticle.id)).toBe(null);
  });

  it('should get the selected Article', () => {
    expect(getSelectedArticle.projector( selectedArticle.id, entities )).toBe(
      selectedArticle
    );
  });
});
