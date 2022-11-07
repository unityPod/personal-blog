import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { DarkMode } from "./DarkMode";
import axios from "axios";
import "./PostPage.scss";


type Item = {
    userId: number,
    id: number,
    title: string,
    body: string
}

export const PostPage = () => {
    const [select, setSelect] = useState([] as any);

    let { id } = useParams();
    let navigate = useNavigate();
    let dateString = Date.now();

    useEffect(() => {
        const getData = async () => {
            const response = await axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`);
            setSelect(response.data);
        };
        getData();
    }, []);


    return (
        <div className="bgcolor post-big-container">
        <div className="post-container">       
        <DarkMode />
        <div><button className="post-button" onClick={() => navigate(-1)}>Got Back</button></div>
        </div> 
        <div className="post-background">{[select].map((item: Item) =>
                <div className="post-page">
                        <div className="blog-title" key={item.id}>{item.title}</div>
                    <div className="home-time">
                        <div>{new Date(dateString - item.id * 1000 * 3600 * 24).toLocaleDateString('default', { month: 'long', day: 'numeric', year: 'numeric' })}</div>
                    </div>
                    <div className="home-body">{item.body}</div>
                </div>
            )}</div>
        </div>
    )
}