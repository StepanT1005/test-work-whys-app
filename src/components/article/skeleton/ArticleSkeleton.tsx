import './ArticleSkeleton.css';

const ArticleSkeleton = () => {
  return (
    <article className="article">
      <div className="skeleton skeleton-title"></div>
      <div className="skeleton skeleton-text"></div>
      <div className="skeleton skeleton-text"></div>
      <div className="skeleton skeleton-text"></div>
      <div className="skeleton skeleton-time"></div>
    </article>
  );
};

export default ArticleSkeleton;
