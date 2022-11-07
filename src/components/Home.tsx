import { useState, useEffect } from "react"
import "./Home.scss";
import axios from "axios";
import { Link } from "react-router-dom";
import { DarkMode } from "./DarkMode";
import { Footer } from "./Footer";
import img from "../assets/headshot.jpg";

type Item = {
    userId: number,
    id: number,
    title: string,
    body: string
}

export const Home = () => {
    const [info, setInfo] = useState([] as any);


    useEffect(() => {
        const getData = async () => {
            const response = await axios.get(`https://jsonplaceholder.typicode.com/posts`);
            setInfo(response.data);
        };
        getData();
    }, []);

    let dateString = Date.now();

    return (
        <div className="big-container bgcolor">
            <div className="header-container1">
                <h1 className="header">Overreacted</h1>
                <DarkMode />
            </div>
            <div className="header-container2">
                <img className="headshot" src={img} />
                <div className="header-small">
                    <p>Personal blog by <a href="https://mobile.twitter.com/dan_abramov" className="header-a">Dan Abramov</a>.</p>
                    <p>I explain with words and code.</p>
                </div>
            </div>
            {info.map((item: Item) =>
                <div className="home-post">
                    <Link to={`/post/${item.id}`} className="blog-link">
                        <div className="blog-title" key={item.id}>{item.title}</div>
                    </Link>
                    <div className="home-time">
                        <div>{new Date(dateString - item.id * 1000 * 3600 * 24).toLocaleDateString('default', { month: 'long', day: 'numeric', year: 'numeric' })}</div>
                        <div className="home-read">{Math.ceil(Math.random() * item.userId)} min read</div>
                    </div>
                    <div className="home-body">{item.body}</div>
                </div>
            )}
        <Footer />
        </div>
    )
}