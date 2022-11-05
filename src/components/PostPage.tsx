import { useState, useEffect } from "react";
import axios from "axios";

type Item = {
    userId: number,
    id: number,
    title: string,
    body: string
}

export const PostPage = () => {
    return (
        <div>Hello</div>
        // <div>{info.map((item: Item) =>
        //     <div>
        //         <div key={item.id}>{item.title}</div>
        //         <div>{item.body}</div>
        //     </div>
        // )}</div>
    )
}