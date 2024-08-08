import { Comment } from '../../App';
import './Comments.css';

interface CommentsProps {
  comments: Comment[];
}

const Comments = (props: CommentsProps) => {
  const { comments } = props;
  const sortedComments = comments.sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime(),
  );

  return (
    <section className="comments">
      <h2>Comments:</h2>
      {sortedComments.map((comment) => (
        <article className="comment" key={comment.id}>
          <h3 className="comment-author">{comment.author}</h3>
          <p className="comment-text">{comment.text}</p>
          <p className="comment-time">
            <time dateTime={comment.date}>
              {new Date(comment.date).toLocaleString()}
            </time>
          </p>
        </article>
      ))}
    </section>
  );
};

export default Comments;
