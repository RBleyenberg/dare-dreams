import * as faker from 'faker/locale/en_US';

export interface Article {
  id?: number;
  name: string;
  price: number;
}

export const generateArticle = (): Article => {
  return {
    id: faker.random.number(),
    name: faker.name.firstName(),
    price: faker.random.number()
  };
};

export const generateArticles = (
  count = faker.random.number({ min: 1, max: 20 })
): Article[] => {
  return Array.apply(null, Array(count)).map(() => generateArticle());
};
