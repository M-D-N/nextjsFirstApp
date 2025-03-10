"use client";

import { useParams } from "next/navigation";
import { useEffect, useState } from "react";

async function getData(id: string) {
  const response = await fetch(`https://my-json-server.typicode.com/typicode/demo/posts/${id}`);
  if (!response.ok) throw new Error("Ошибка загрузки данных");
  return response.json();
}

export default function Post() {
  const params = useParams(); // Теперь params доступен синхронно
  const [post, setPost] = useState(null);

  useEffect(() => {
    if (params?.id) {
      getData(params.id).then(setPost).catch(console.error);
    }
  }, [params?.id]);

  if (!post) return <div>Загрузка...</div>;

  return (
    <div className="container">
      <h1>{post.title}</h1>
      <h2>{post.id}</h2>
      <p>TEST</p>
    </div>
  );
}
