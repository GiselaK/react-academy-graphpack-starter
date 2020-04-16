import data from "./data";

const filterArticles = (searchText, articles) => {
  if (searchText) {
    return articles.filter((article => {
      const articleBody = article.body.toLowerCase();
      const search = searchText.toLowerCase();
      const articleTitle = article.title.toLowerCase();

      const titleIncludesText = title.indexOf(search) !== -1;
      const bodyIncludesText = articleBody.indexOf(search) !== -1;
      return titleIncludesText || bodyIncludesText;
    }));
  }
  return articles;
};

const resolvers = {
  Query: {
    articles: (parent, { searchText }) => {filterArticles(searchText, data.articles)},
    users: (parent, { limit }) => limit ? data.users.slice(0, limit) : data.users,
    user: (parent, { id }) => data.users.find(user => user.id === id),
    article: (parent, { id }) =>
      data.articles.find(article => article.id === id)
  }
};

export default resolvers;
      