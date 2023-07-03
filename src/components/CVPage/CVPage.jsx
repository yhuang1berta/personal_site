import React from 'react';
import Resume from "../SDE_resume_CA.pdf"
import "./CVPage.css"


function CVPage() {

  return (
    <div>
      {/* <Document file={Resume} onLoadSuccess={onDocumentLoadSuccess}>
      </Document> */}
      <object data={Resume} type="application/pdf" className='CVPage__pdf'>
      <p>Unable to display PDF file. <a href="/uploads/media/default/0001/01/540cb75550adf33f281f29132dddd14fded85bfc.pdf">Download</a> instead.</p>

      </object>
    </div>
  );
}

export default CVPage