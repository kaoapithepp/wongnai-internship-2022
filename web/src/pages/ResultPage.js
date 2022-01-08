import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

import Header from '../components/Header';
import SearchBar from '../components/SearchBar';
import DisplayCard from '../components/DisplayCard';

import '../App.css';

// path for fetching
const PATH_URL = 'http://localhost:5000/api/search/';

function SearchPage() {
  const [mockup, setMockup] = useState([]);

  // extract keyword parameter from pathname
  const { keyword } = useParams();
  
  // extending pathname by keyword
  useEffect(() => {
    axios
    .get(PATH_URL + keyword)
    .then(res => {
      setMockup(res.data);
    })
    .catch(err => console.log(err.message));
  }, [keyword]);

  // display results by mapping the fetched databases
  const display_card = mockup.map((data) => {
    return <DisplayCard detail={data} />
  });
  
  return (
    <div className="App">
      <Header />
      <SearchBar />
      <section>
        <p><a className="a" href="/">หน้าแรก</a> › แสดงผลการค้นหา</p>
      </section>
      <h2 className="sub-header">ผลลัพธ์การค้นหาเกี่ยวกับ '{keyword}' ทั้งหมด {mockup.length} รายการ</h2>
      { display_card }
    </div>
  );
}

export default SearchPage;