import React from 'react';
import './index.scss';
import blog from '../../assets/images/blog.jpg';

function Blog() {
    return (
        <div className="blog">
            <div className="blog-img" style={{ backgroundImage: `url(${blog})` }}>&nbsp;</div>
            <span className="badge bg-secondary mt-3 mb-4">Content Improver</span>
            <p>Introducing the AI-Powered Content Improver</p>
            <div className="d-flex justify-content-between align-items-center">
                <span>jermy</span>
                <span>May 11, 2022</span>
            </div>
        </div>
    );
}

export default Blog;
