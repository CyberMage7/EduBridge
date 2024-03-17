import React, { useState } from 'react';
import './Yts.css'
import img from "./videoresource.jpeg";
import { IoSearch } from "react-icons/io5";
import Navbar from "../navbar/Navbar";
import Footer from "../footer/Footer";


const apiKey = 'AIzaSyCc_sJxkrdB7l3-cd2RiWYOLx-UncJcwlk'; 

function YouTubeSearch() {
    const [query, setQuery] = useState('');
    const [videos, setVideos] = useState([]);
    const [showImage, setShowImage] = useState(true);

    const handleSearch = async (event) => {
        event.preventDefault();
        try {
            const response = await fetch(`https://www.googleapis.com/youtube/v3/search?key=${apiKey}&part=snippet&type=video&q=${encodeURIComponent(query)}`);
            if (!response.ok) {
                throw new Error('Failed to fetch videos');
            }
            const data = await response.json();
            setVideos(data.items);
            setShowImage(false);
        } catch (error) {
            console.error('Error:', error);
        }
    };

    return (
        <div>
            <Navbar/>
            <h1 className="yt-head flex h1-yt">Video Resources</h1>
            <div className="wrapper-yt flex">
                <div className="container">
                    <div className="height flex">
                            <form onSubmit={handleSearch}>
                                <div className="form">
                                    <input
                                        type="text"
                                        value={query}
                                        onChange={(e) => setQuery(e.target.value)}
                                        className="form-control form-input"
                                        placeholder="Search anything..."
                                    />
                                    <span className="left-pan"><IoSearch style={{ fontSize: '24px',paddingLeft :'10px'}}/></span>
                                </div>
                            </form>
                    </div>
                </div>
                {showImage && (
                    <img src={img} alt="Student Studying from YouTube" className="search-image" />
                )}
            </div>
            <div id="results">
                {videos.map(video => (
                    <div key={video.id.videoId} className="video-container">
                        <iframe
                            width="400"
                            height="800"
                            src={`https://www.youtube.com/embed/${video.id.videoId}`}
                            frameBorder="0"
                            allowFullScreen
                        ></iframe>
                        <div className="video-description">
                            <h2>{video.snippet.title}</h2>
                        </div>
                    </div>
                ))}
            </div>
            <Footer/>
        </div>
    );
}

export default YouTubeSearch;
