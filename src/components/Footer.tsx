import "./Footer.scss";

export const Footer = () => {
    return (
        <footer>
        <div className="footer-small">
            <a href="https://mobile.twitter.com/dan_abramov" target="_blank">Twitter</a>
            <div> * </div>
            <a href="https://github.com/gaearon" target="_blank">Github</a>
            <div> * </div>
            <a href="https://stackoverflow.com/users/458193/dan-abramov" target="_blank">stack overflow</a>
        </div>
        <a href="https://overreacted.io/rss.xml">rss</a>
    </footer> 
    )
}