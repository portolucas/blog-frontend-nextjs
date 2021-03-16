import Head from "next/head";
import styles from "../styles/Home.module.css";

export default function Home({ posts }) {
  // loop over the posts and show them
  
  return (
    <div>
      {posts && posts.map((post) => <h2 key={post.id}>{post.Title}</h2>)}
    </div>
  );
}

export async function getStaticProps() {
  // get posts from our api

  const res = await fetch("http://localhost:1337/posts");

  const posts = await res.json();

  console.log(posts);

  return {
    props: { posts },
  };
}
