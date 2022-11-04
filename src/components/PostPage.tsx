import { useState, useEffect } from "react";
import axios from "axios";

type Item = {
    userId: number,
    id: number,
    title: string,
    body: string
  }

export const PostPage = () => {
    const [info, setInfo] = useState([] as any);

    useEffect(() => {
        const getData = async () => {
            const response = await axios.get(`https://jsonplaceholder.typicode.com/posts`);
            setInfo(response.data);
          };
          getData();
        }, []);

    console.log(info)
    return(
        <div>{info.map((item: Item) =>
            <div>
            <div key={item.id}>{item.title}</div>
            <div>{item.body}</div>
            </div>
        )}</div>
    )
}