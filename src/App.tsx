import React from 'react';
import './App.scss';
import Header from "./components/header";
import Banner from "./components/banner";
import Breadcrumbs from "./components/breadcrumbs";
import BrowseTool from "./components/browse-tool";
import Blogs from "./components/blogs";

function App() {
    return (
        <div className="App">
            <Header/>
            <Banner/>
            <Breadcrumbs/>
            <BrowseTool/>
            <Blogs/>
        </div>

    );
}

export default App;
