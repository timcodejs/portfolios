import React, { useState } from 'react';
import { Document, Page, pdfjs } from 'react-pdf';
import styled from 'styled-components';

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

const Pdf = () => {
  const [numPages, setNumPages] = useState<number | null>(null); // 총 페이지수
  const [pageNumber, setPageNumber] = useState<number>(1); // 현재 페이지
  const [pageScale, setPageScale] = useState<number>(1); // 페이지 스케일

  function onDocumentLoadSuccess({ numPages }: any) {
    console.log(`numPages ${numPages}`);
    setNumPages(numPages);
  }

  return (
    <PdfStyled>
      <div className='page'>
        <p>
          Page {pageNumber} of {numPages}
        </p>
        <button
          onClick={() => {
            setPageNumber(pageNumber === 1 ? pageNumber : pageNumber - 1);
          }}
        >
          {' '}
          -
        </button>
        <button
          onClick={() => {
            setPageNumber(
              numPages === pageNumber ? pageNumber : pageNumber + 1
            );
          }}
        >
          {' '}
          +
        </button>
      </div>
      <div className='pdf'>
        <Document file='./resume.pdf' onLoadSuccess={onDocumentLoadSuccess}>
          <Page
            width={1200}
            height={720}
            scale={pageScale}
            pageNumber={pageNumber}
          />
        </Document>
      </div>
    </PdfStyled>
  );
};

export default Pdf;

const PdfStyled = styled.div`
  .page {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .page p {
    margin-right: 20px;
  }
  .pdf {
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;
