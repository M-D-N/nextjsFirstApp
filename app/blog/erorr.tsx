'use client';

export default function ErorrPosts({error}: {error: Error}) {
    return <h1> Ooops {error.message} </h1>;
}