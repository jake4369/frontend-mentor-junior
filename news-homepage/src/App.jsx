import Header from "./components/Header";
import MainArticle from "./components/MainArticle";
import NewArticles from "./components/NewArticles";
import TopThreeArticles from "./components/TopThreeArticles";

const App = () => {
  return (
    <div className="main-container">
      <Header />
      <div className="flex-container">
        <MainArticle />
        <NewArticles />
      </div>
      <TopThreeArticles />
    </div>
  );
};

export default App;
