import "./post.css";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { PF } from "../../config";

export default function Post({ post }) {
  return (
    <motion.div whileHover={{ scale: 1.1 }} className="post">
      {post.photo && <img className="postImg" src={PF + post.photo} alt="" />}
      <div className="postInfo">
        <div className="postCats">
          {post.categories.map((c) => (
            <span className="postCat">{c.name}</span>
          ))}
        </div>
        <Link to={`/post/${post._id}`} className="link">
          <span className="postTitle">{post.title}</span>
        </Link>
        <hr />
        <span className="postDate">
          {new Date(post.createdAt).toDateString()}
        </span>
      </div>
      <p className="postDesc">{post.desc}</p>
    </motion.div>
  );
}
