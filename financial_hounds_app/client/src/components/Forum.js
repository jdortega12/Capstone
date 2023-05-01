import React, { useState, useEffect } from "react";
import axios from "axios";
import "../styles/Forum.css";

const Forum = () => {
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState("");
  const [studentName, setStudentName] = useState("");

  const API_URL = "/userData";

  const fetchData = async () => {
    const response = await axios.get(API_URL);
    setStudentName(response.data.name);
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();
    const now = new Date();
    const timestamp = `${now.toLocaleDateString()} ${now.toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'})}`;
    const commentObj = { text: newComment, timestamp, studentName };
    
    setComments([...comments, commentObj]);
    setNewComment("");
  };

  return (
    <>
      <div className="forum">
        <div>
          <div className="row">
            <a href="/Forum">
              <h4 className="title">Student Forum</h4>
              <div className="bottom">
                <p className="class">Mr. Gillcrist's Finance Class</p>
                <p className="commentCount">{comments.length} Comments</p>
              </div>
            </a>
          </div>
        </div>
        <form onSubmit={handleSubmit}>
          <label htmlFor="comment">Add a comment:</label>
          <input
            type="text"
            id="comment"
            value={newComment}
            onChange={(event) => setNewComment(event.target.value)}
          />
          <button type="submit">Submit</button>
        </form>
        <ul>
          {comments.map((comment, index) => (
            <li key={index}>
              <div className="comment-bubble">
                <p>
                  <strong>{comment.studentName}:</strong> {comment.text}
                </p>
                <p className="timestamp">{comment.timestamp}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default Forum;
