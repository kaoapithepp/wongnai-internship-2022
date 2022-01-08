import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

import './SearchBar.css';

const SearchBar = () => {
    // set up searching input's state
    const [keyword, setKeyword] = useState('');
    
    // navigate to search keyword path
    const navigate = useNavigate();
    function handlingSubmit(e) {
        if(keyword == ""){
            alert("จะไม่พิมพ์อะไรซักอย่างจริง ๆ หรอ")
        } else {
            navigate(`/search/${keyword}`);
        }
        e.preventDefault();
    }

    // using params as a search text
    const params = useParams();
    // track pathname from current window whether change happens
    useEffect(() => {
        if(window.location.pathname.includes('search')){
            setKeyword(params.keyword);
        } else if (window.location.pathname.includes('search') && !params.keyword) {
            // navigate to error page
            navigate(`/error`);
        } else {
            setKeyword('');
        }
    }, [window.location.pathname])
    
    return (
        <div className="container">
            <form onSubmit={handlingSubmit} className="container">
                <input className="search-bar"
                    type="text"
                    placeholder="&#x1F50E;&#xFE0E; ประตูไปที่ไหนก็ได้..."
                    value={keyword}
                    onChange={e => setKeyword(e.target.value)}
                    />
                <button type="submit" className="search-button">ไปกันเลย!</button>
            </form>
            
        </div>
    );
}

export default SearchBar;