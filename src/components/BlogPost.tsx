
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const BlogPost = () => {
  const { slug } = useParams();
  const [content, setContent] = useState('');

  useEffect(() => {
    fetch(`/blogs/${slug}.txt`)
      .then(res => res.text())
      .then(setContent);
  }, [slug]);

  return (
    <div className="p-4">
      <pre className="whitespace-pre-wrap">{content}</pre>
    </div>
  );
};

export default BlogPost;
