import './CommentsSkeleton.css';

const CommentsSkeleton = () => {
  return (
    <section className="comments">
      <h2>Comments:</h2>
      {[1, 2, 3].map((id) => (
        <article key={id} className="comment">
          <div className="skeleton skeleton-title"></div>
          <div className="skeleton skeleton-comment"></div>
          <div className="skeleton skeleton-comment"></div>
          <div className="skeleton skeleton-time"></div>
        </article>
      ))}
    </section>
  );
};

export default CommentsSkeleton;
