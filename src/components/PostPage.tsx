import { useState, useEffect } from "react";
import axios from "axios";
import { DarkMode } from "./DarkMode";


type Item = {
    userId: number,
    id: number,
    title: string,
    body: string
}

export const PostPage = () => {
    return (
        <div className="bgcolor">
        <div>Hello</div>
        <DarkMode />
        </div>
        // <div>{info.map((item: Item) =>
        //     <div>
        //         <div key={item.id}>{item.title}</div>
        //         <div>{item.body}</div>
        //     </div>
        // )}</div>
    )
}