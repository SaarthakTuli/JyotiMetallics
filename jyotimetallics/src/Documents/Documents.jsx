import React, {useState} from 'react'
import { Page, Document } from 'react-pdf/dist/esm/entry.webpack'
import './Documents.css'

import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from 'react-icons/md'
import PDF from '../assets/CSCI.pdf'

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
			<Header banner={'./Banner/Banner4.jpg'} text={"Documents"} lightText={false} />
			<div className='center'>
				<h1 className='documents__title'>Catalogue</h1>
			</div>
            
			<div className='documents__div'>
				<div className="center">
					<Document
						file={PDF}
						onLoadSuccess={onDocumentLoadSuccess}
						className="documents__viewer"
					>
						<Page pageNumber={pageNumber} />
					</Document>
				</div>
            
				<div>
					<div className='center'>
						Page {pageNumber} of {numPages}
					</div>
					<div className='center'>
						<button className='documents__btn' onClick={goToPrevPage}>{<MdKeyboardArrowLeft />} Prev</button>
						<button className='documents__btn' onClick={goToNextPage}>Next  {<MdKeyboardArrowRight />}</button>
					</div>
					<div className='center'>
						<a href={PDF} download className='documents__download'>Download</a>
					</div>
					
				</div>
          
			</div>
		</>
	);
}

export default Documents