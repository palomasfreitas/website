import React, { useState } from 'react';

import { FaWhatsapp } from 'react-icons/fa';
import type { GetStaticProps, NextPage } from 'next';
import { useRouter } from 'next/router';
import ReactPDF from '@react-pdf/renderer';

import { Image as pdfImage } from '@react-pdf/renderer';
import { Page, Text, View, Document, StyleSheet,PDFViewer } from '@react-pdf/renderer';

// Create styles
const styles = StyleSheet.create({
  page: {
    flexDirection: 'row',
    backgroundColor: '#E4E4E4'
  },
  section: {
    margin: 10,
    padding: 10,
    flexGrow: 1
  }
});

const MyDocument = () => (
  <Document>
    <Page size="A4" style={styles.page}>
      <View style={styles.section}>
        <Text>Section #1</Text>
        
      </View>
    </Page>
  </Document>
);

//pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

//import samplePDF from '/cartinha.pdf';




import {
  
  Box,
  
  Heading,
  
  Stack,
  
  VStack,

  Image,
  
} from '@chakra-ui/react';


export const getStaticProps: GetStaticProps = async () => ({
  props: {
    isPublic: true
  },
});

const Cartinha = (props: any) => {
  const [numPages, setNumPages] = useState(null);
  const [pageNumber] = useState(1);

  const onDocumentLoadSuccess = () => {
    setNumPages(numPages);
  };
    

  return (
      
    <Stack bgColor={'gray.100'}  align={'center'} justify={'center'} >
      <VStack  w={'80%'} direction={{ base: 'column', md: 'row' }}>
        <Heading  as='h3' size='lg' color={'gray.600'} paddingBottom={2}>
          Cartinha Potencialidades
        </Heading>
        <Box   maxW={'90%'} borderRadius={2} boxShadow='2xl'  rounded='xl' bg='white' marginBottom={15}>
          <Image src='/cartinhap1.jpg'/>
          <Image src='/cartinhap2.jpg'/>
        </Box> 
      </VStack>
    </Stack>
  );
};

export default Cartinha;