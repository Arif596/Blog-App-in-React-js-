import React from "react";
import "./Posts.css";
import PostImage from "../header/post.jpg";
export default function Posts() {
  return (
    <div className="posts">
      <img className="postimage" src={PostImage} alt="" />
      <div className="postInfo">
        <div className="postcats">
          <span className="postcats">Music</span>
          <span className="postcats">Life</span>
        </div>
        <span className="postTitle">Lorem, ipsum dolor.</span>
        <hr />
        <span className="postDate">1 hours Before</span>
      </div>
      <p className="postDescription">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptates nam
        consectetur vel quasi recusandae aliquam dolorum distinctio saepe magni
        accusantium.vel quasi recusandae aliquam dolorum distinctio saepe magni
        accusantium.
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptates nam
        consectetur vel quasi recusandae aliquam dolorum distinctio saepe magni
        accusantium.vel quasi recusandae aliquam dolorum distinctio saepe magni
        accusantium.
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptates nam
        consectetur vel quasi recusandae aliquam dolorum distinctio saepe magni
        accusantium.vel quasi recusandae aliquam dolorum distinctio saepe magni
        accusantium.
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptates nam
        consectetur vel quasi recusandae aliquam dolorum distinctio saepe magni
        accusantium.vel quasi recusandae aliquam dolorum distinctio saepe magni
        accusantium.
      </p>
    </div>
  );
}
