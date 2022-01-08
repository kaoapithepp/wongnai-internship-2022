import React from "react";
import { useNavigate } from "react-router-dom";

import './SuggestTag.css';

const SuggestTag = () => {
    const tags = ["เกาะ", "คาเฟ่", "จุดถ่ายรูป", "ธรรมชาติ"];

    const navigate = useNavigate();

    const display_tags = tags.map(data => {
        return (
            <button className="tag-button"
            onClick={() => navigate(`/search/${data}`)}>
                {data}
            </button>
        );
    })
    
    return (
        <div className="tag-row">
            { display_tags }
        </div>
    );
}

export default SuggestTag;