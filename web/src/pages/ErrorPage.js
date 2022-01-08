import React from "react";

import Header from '../components/Header';
import SearchBar from '../components/SearchBar';

import '../App.css';

const ErrorPage = () => {
    return (
        <div className="App">
            <Header />
            <SearchBar />
            <img src="/images/404.png" height="300px" style={{margin : "15px"}} />
            <h2 className="err-header">ดูเหมือนที่นี่จะไม่มีสิ่งที่ต้องการน้า~</h2>
            <p>
                <a className="a" href="/">กลับสู่หน้าหลัก</a> หรือค้นหาที่ช่องค้นหา
            </p>
        </div>
    );
}

export default ErrorPage;