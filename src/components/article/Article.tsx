import { ArticleData } from '../../App';
import './Article.css';

interface ArticleProps {
  article: ArticleData;
}

const Article = (props: ArticleProps) => {
  const { author, date, text } = props.article;

  return (
    <article className="article">
      <h2 className="article-author">{author}</h2>
      <p className="article-text">{text}</p>
      <p className="article-date">
        <time dateTime={date}>{new Date(date).toLocaleString()}</time>
      </p>
    </article>
  );
};

export default Article;
