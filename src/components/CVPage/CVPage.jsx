import React from 'react';
import Resume from "../SDE_resume_CA.pdf"
import "./CVPage.css"


function CVPage() {

  return (
    <div>
      {/* <Document file={Resume} onLoadSuccess={onDocumentLoadSuccess}>
      </Document> */}
      <object data={Resume} type="application/pdf" className='CVPage__pdf'></object>
    </div>
  );
}

export default CVPage