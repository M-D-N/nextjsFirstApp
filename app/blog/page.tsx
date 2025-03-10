import { Metadata } from "next";
import Link from "next/link";

async function getData() {
    const response = await fetch('https://my-json-server.typicode.com/typicode/demo/posts', {
        next: {
            revalidate: 60
        }
    });

    return response.json()
}

export const metada: Metadata = {
    title: "Blog | Page",
};

export default async function Blog() {
    const posts = await getData()
    return (
      <>
      <div className="container">
        <h1> Blog - PAGE </h1>
        <ul>
            {posts.map((el: any) => {
                return (
                    <li key={el.id}>
                        <Link href={`/blog/${el.id}`}> {el.title} </Link>
                    </li>
                )
            })}
        </ul>
      </div>
      </>
    );
  }