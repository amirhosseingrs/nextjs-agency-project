import React from "react";
import styles from "./post.module.css";
import Image from "next/image";
import Profile from "public/profile.jpg";
import PostImage from "public/post1.jpg";
import Head from "next/head";

async function getPost(id) {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
  const post = await res.json();
  return post;
}

export async function generateMetadata({ params }) {
  const post = await getPost(params.postid);
  return {
    title: post.title,
    description: post.desc,
  };
}

const Post = async ({ params }) => {
  const post = await getPost(params.postid);

  return (
    <div>
      <Head>
        <title>test title</title>
      </Head>
      <div className={styles.container}>
        <div className={styles.header}>
          <div className={styles.headSide}>
            <h1>{post.title}</h1>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptas
              sit pariatur harum nam quos? Illo beatae, veniam corrupti soluta
              voluptatem impedit natus. Qui nobis alias nam delectus nesciunt
              modi, adipisci explicabo cum accusantium provident iste?
            </p>
            <div className={styles.author}>
              <Image width="50" height="50" src={Profile} alt="profile pic" />
              <span>John Doe</span>
            </div>
          </div>
          <div className={styles.headSide}>
            <Image className={styles.image} src={PostImage} alt="post image" />
          </div>
        </div>
        <div className={styles.content}>
          <p>{post.body}</p>
        </div>
      </div>
    </div>
  );
};

export default Post;
