import React, { useState, useEffect } from 'react';
import axios from 'axios';

import Header from '../components/Header';
import SearchBar from '../components/SearchBar';
import SuggestTag from '../components/SuggestTag';
import DisplayCard from '../components/DisplayCard';

import '../App.css';

// path for fetching
// this API route is from api-gateway
const PATH_URL = 'http://localhost:5000/api/reviews/';

function SearchPage() {
  const [mockup, setMockup] = useState([]);

  // fetch ALL data
  useEffect(() => {
    axios
    .get(PATH_URL)
    .then(res => {
      console.log(res);
      setMockup(res.data);
    })
    .catch(err => console.log(err.message));
  }, [])

  // display ALL results by mapping the fetched databases
  const display_card = mockup.map((data) => {
    return <DisplayCard detail={data} />
  });
  
  return (
    <div className="App">
      <Header />
      <SearchBar />
      <h2 className="sub-header">ไปเที่ยวทันใจ จาก tag ยอดนิยม</h2>
      <SuggestTag />
      <h2 className="sub-header">หรือเลือกดู "รีวิวสุดปัง" ทั้งหมดได้ที่นี่</h2>
      { display_card }
    </div>
  );
}

export default SearchPage;