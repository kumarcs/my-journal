import React from 'react';

const ResumeViewer = () => (
  <div className="my-6">
    <h2 className="text-xl font-semibold mb-2">Resume</h2>
    {/* <iframe src="/resume.pdf" width="100%" height="500px" title="Resume" /> */}
    <div className="mt-2">
      <a href="/resume.pdf" download className="text-blue-600">Download Resume</a>
    </div>
  </div>
);

export default ResumeViewer;
