import { useState } from "react";

export default function Posts() {

    const [posts, setPosts] = useState([]);

    return <ul>
        {
            posts.map((p: any) => <li key={p.id}>{p.title}</li>)
        }
    </ul>;
  }