
import React from 'react';

const BlogList = () => {
  const blogs = [
    {
      slug: "2025-04-15-migrating-to-aws",
      title: "Migrating to AWS",
      date: "2025-04-15"
    }
  ];

  return (
    <div className="my-6">
      <h2 className="text-xl font-semibold mb-2">Blog</h2>
      <ul className="list-disc pl-5">
        {blogs.map(blog => (
          <li key={blog.slug}>
            <a href={`/blog/${blog.slug}`} className="text-blue-600">
              {blog.title} - {blog.date}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BlogList;
