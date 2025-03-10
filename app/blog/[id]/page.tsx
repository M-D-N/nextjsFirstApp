import { Metadata } from "next";

async function getData(id: string) {
    const response = await fetch(`https://my-json-server.typicode.com/typicode/demo/posts/${id}`, {
        next: {
            revalidate: 60
        }
    });

    return response.json()
}

export const metada: Metadata = {
    title: "Blog - Post | Page",
};

type Props = {
  params: { id: string };
};

export default async function Post({ params }: Props) {
    const post = await getData(params.id);
    return (
      <>
      <div className="container">
        <h1>{post.title}</h1>
        <h2>{post.id}</h2>
      </div>
      </>
    );
  }