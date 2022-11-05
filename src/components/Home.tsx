import { useState, useEffect } from "react"
import "./Home.scss";
import axios from "axios";
import { Link } from "react-router-dom";
import { DarkMode } from "./DarkMode";
import { connect } from "react-redux";
import userEvent from "@testing-library/user-event";

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
            <div>
                <h1 className="header">Overreacted</h1>
                <DarkMode />
            </div>
            <div>
                <img />
                <div>
                    <p>Personal blog by <a href="https://mobile.twitter.com/dan_abramov">Dan Abramov</a>.</p>
                    <p>I explain with words and code.</p>
                </div>
            </div>
            {info.map((item: Item) =>
                <div>
                    <Link to={`/post/${item.id}`}>
                        <div key={item.id}>{item.title}</div>
                    </Link>
                    <div>
                        <div>{new Date(dateString - item.id * 1000 * 3600 * 24).toLocaleDateString('default', { month: 'long', day: 'numeric', year: 'numeric' })}</div>
                        <div>{Math.ceil(Math.random() * item.userId)} min read</div>
                    </div>
                    <div>{item.body}</div>
                </div>
            )}
        </div>
    )
}