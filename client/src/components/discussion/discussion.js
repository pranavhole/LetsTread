import React, { useState } from 'react';

const CommentSection = () => {
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState('');
  const [userData, setUserData] = useState({
    name: 'John Doe',
    avatar: 'https://example.com/avatar.jpg',
  });

  const handleInputChange = (e) => {
    setNewComment(e.target.value);
  };

  const addComment = () => {
    if (newComment.trim() !== '') {
      const comment = {
        id: Date.now(),
        text: newComment,
        likes: [],
        replies: [],
        user: {
          name: userData.name,
          avatar: userData.avatar,
        },
      };

      setComments([...comments, comment]);
      setNewComment('');
    }
  };

  const addReply = (commentId, replyText) => {
    const updatedComments = comments.map((comment) => {
      if (comment.id === commentId) {
        const reply = {
          id: Date.now(),
          text: replyText,
          likes: [],
          user: {
            name: userData.name,
            avatar: userData.avatar,
          },
        };

        return {
          ...comment,
          replies: [...comment.replies, reply],
        };
      }

      return comment;
    });

    setComments(updatedComments);
  };

  const toggleLike = (commentId, replyId) => {
    const updatedComments = comments.map((comment) => {
      if (comment.id === commentId) {
        const updatedReplies = comment.replies.map((reply) => {
          if (reply.id === replyId) {
            const isLiked = reply.likes.includes(userData.name);

            if (isLiked) {
              reply.likes = reply.likes.filter((name) => name !== userData.name);
            } else {
              reply.likes.push(userData.name);
            }
          }

          return reply;
        });

        return {
          ...comment,
          replies: updatedReplies,
        };
      }

      return comment;
    });

    setComments(updatedComments);
  };

  const sortCommentsByLikes = () => {
    const sortedComments = [...comments].sort((a, b) => b.likes.length - a.likes.length);
    setComments(sortedComments);
  };

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-2xl font-bold mb-4">Comment Section</h2>
      <div className="flex mb-4">
        <img
          src={userData.avatar}
          alt={userData.name}
          className="w-10 h-10 rounded-full mr-2"
        />
        <textarea
          value={newComment}
          onChange={handleInputChange}
          placeholder="Write a comment..."
          className="w-full p-2 border border-gray-400 rounded"
        ></textarea>
      </div>
      <div className="flex mb-4">
        <button
          onClick={addComment}
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700 mr-2"
        >
          Add Comment
        </button>
        <button
          onClick={sortCommentsByLikes}
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700"
        >
          Sort by Likes
        </button>
      </div>
      <div>
        {comments.map((comment) => (
          <div key={comment.id} className="mb-4">
            <div className="flex items-center mb-2">
              <img
                src={comment.user.avatar}
                alt={comment.user.name}
                className="w-8 h-8 rounded-full mr-2"
              />
              <h4 className="text-lg font-semibold">{comment.user.name}</h4>
            </div>
            <p className="mb-2">{comment.text}</p>
            <p className="mb-2">Likes: {comment.likes.length}</p>
            <button
              onClick={() => toggleLike(comment.id)}
              className={`px-4 py-2 rounded ${comment.likes.includes(userData.name) ? 'bg-blue-500 text-white' : 'bg-gray-300 text-gray-600'} hover:bg-blue-700`}
            >
              {comment.likes.includes(userData.name) ? 'Unlike' : 'Like'}
            </button>
            <button
              onClick={() => addReply(comment.id, `Reply to comment ${comment.id}`)}
              className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700 ml-2"
            >
              Reply
            </button>
            {comment.replies.length > 0 && (
              <div className="ml-8 mt-2">
                {comment.replies.map((reply) => (
                  <div key={reply.id} className="mb-2">
                    <div className="flex items-center">
                      <img
                        src={reply.user.avatar}
                        alt={reply.user.name}
                        className="w-6 h-6 rounded-full mr-2"
                      />
                      <h4 className="text-sm font-semibold">{reply.user.name}</h4>
                    </div>
                    <p className="mb-2">{reply.text}</p>
                    <p className="mb-2">Likes: {reply.likes.length}</p>
                    <button
                      onClick={() => toggleLike(comment.id, reply.id)}
                      className={`px-4 py-2 rounded ${reply.likes.includes(userData.name) ? 'bg-blue-500 text-white' : 'bg-gray-300 text-gray-600'} hover:bg-blue-700`}
                    >
                      {reply.likes.includes(userData.name) ? 'Unlike' : 'Like'}
                    </button>
                  </div>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default CommentSection;
