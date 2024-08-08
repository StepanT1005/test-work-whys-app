import { useEffect, useState } from 'react';
import './App.css';
import Article from './components/article/Article';
import Comments from './components/comment/Comments';
import ArticleSkeleton from './components/article/skeleton/ArticleSkeleton';
import CommentsSkeleton from './components/comment/skeleton/CommentsSkeleton';

export interface ArticleData {
  author: string;
  date: string;
  text: string;
}
export interface Comment {
  id: number;
  author: string;
  date: string;
  text: string;
}

const App = () => {
  const [article, setArticle] = useState<ArticleData | null>(null);
  const [comments, setComments] = useState<Comment[]>([]);
  const [loading, setLoading] = useState(true);
  const [loadingMore, setLoadingMore] = useState(false);

  useEffect(() => {
    const fetchInitData = async () => {
      setLoading(true);
      await new Promise((resolve) => setTimeout(resolve, 1500));
      setArticle((window as any).__article);
      setComments((window as any).__comments);
      setLoading(false);
    };

    fetchInitData();
  }, []);

  const loadMoreComments = async () => {
    setLoadingMore(true);
    await new Promise((resolve) => setTimeout(resolve, 800));
    setComments((prevComments) => [
      ...(window as any).__moreComments,
      ...prevComments,
    ]);
    setLoadingMore(false);
  };

  return (
    <div className="App">
      <main className="main">
        {loading ? (
          <ArticleSkeleton />
        ) : (
          article && <Article article={article} />
        )}
        {loading ? (
          <CommentsSkeleton />
        ) : (
          comments && <Comments comments={comments} />
        )}
        {!loading && !loadingMore && (
          <button className="load-more-comments-btn" onClick={loadMoreComments}>
            Load more comments
          </button>
        )}
        {loadingMore && <p>Loading more comments...</p>}
      </main>
    </div>
  );
};

export default App;
