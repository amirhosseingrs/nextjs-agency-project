import Link from "next/link";
import styles from "./blog.module.css";
import Image from "next/image";

async function getData() {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  const data = await res.json();
  console.log(data);
  return data;
}

const Blog = async () => {
  const posts = await getData();
  return (
    <div className={styles.container}>
      <div className={styles.posts}>
        {posts.map((post) => (
          <Link key={post.id} href={`/blog/${post.id}`}>
            <div className={styles.post}>
              <Image width={300} height={300} src="/post2.jpg" alt="post" />
              <div className={styles.infoPost}>
                <h1>{post.title}</h1>
                <p>{post.desc}</p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Blog;
