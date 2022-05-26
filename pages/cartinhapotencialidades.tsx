import React, { useState } from 'react';
import { Document, Page, pdfjs } from 'react-pdf';
import { FaWhatsapp } from 'react-icons/fa';
import type { GetStaticProps, NextPage } from 'next';
import { useRouter } from 'next/router';



pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

//import samplePDF from '/cartinha.pdf';




import {
  
  Box,
  
  Heading,
  
  Stack,
  
  VStack,
  
} from '@chakra-ui/react';


export const getStaticProps: GetStaticProps = async () => ({
  props: {
    isPublic: true
  },
});

const Cartinha = (props: any) => {
  const [numPages, setNumPages] = useState(null);
  const [pageNumber] = useState(1);

  const onDocumentLoadSuccess = ({ }) => {
    setNumPages(numPages);
  };
    

  return (
      
    <Stack bgColor={'purple.200'}  align={'center'} justify={'center'} >
      <VStack  w={'80%'} direction={{ base: 'column', md: 'row' }}>
        <Heading  as='h3' size='lg' color={'purple.700'} paddingBottom={2}>
          Cartinha Potencialidades
        </Heading>
        <Box   maxW={'99%'} borderRadius={2} boxShadow='lg'  rounded='xl' bg='white'>
          <Document
            file="/cartinha.pdf"
            onLoadSuccess={onDocumentLoadSuccess}
          >
            <Page pageNumber={pageNumber} />
          </Document>
        </Box> 
      </VStack>
    </Stack>
  );
};

export default Cartinha;