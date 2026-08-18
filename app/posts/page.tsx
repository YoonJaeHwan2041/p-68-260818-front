"use client";
import { useEffect, useState } from "react";

export default function Posts() {

    const [posts, setPosts] = useState([]);

    useEffect(() => {
        fetch("http://localhost:8080/api/v1/posts")
        .then((res) => res.json())
        .then((data) => {
            console.log(data)
            setPosts(data);
        });
    }, []);

    return <ul>
        {
            posts.map((p: any) => <li key={p.id}>{p.title}</li>)
        }
    </ul>;
  }