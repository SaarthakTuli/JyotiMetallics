import React, {useState} from 'react'
import { Page, Document } from 'react-pdf/dist/esm/entry.webpack'
import './Documents.css'

import Header from '../Header/Header'

function Documents() {

    const [numPages, setNumPages] = useState(null);
	const [pageNumber, setPageNumber] = useState(1);

	const onDocumentLoadSuccess = ({ numPages }) => {
		setNumPages(numPages);
	};

	const goToPrevPage = () =>
		setPageNumber(pageNumber - 1 <= 1 ? 1 : pageNumber - 1);

	const goToNextPage = () =>
		setPageNumber(
			pageNumber + 1 >= numPages ? numPages : pageNumber + 1,
        );
    
    return (
        <>
            <Header banner={'./Banner/Banner1.jpg'} text={"Documents"} lightText={false} />
            
        <div className='documents__div'>
			<Document
				file="IO.pdf"
				onLoadSuccess={onDocumentLoadSuccess}>
				<Page pageNumber={pageNumber} />
            </Document>
            
            <nav>
				<button onClick={goToPrevPage}>Prev</button>
				<button onClick={goToNextPage}>Next</button>
				<p>
					Page {pageNumber} of {numPages}
				</p>
			</nav>
          
        </div></>
    );
}

export default Documents