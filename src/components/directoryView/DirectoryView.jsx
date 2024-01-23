import { useEffect, useMemo, useState } from 'react';
import { Container, Row, Spinner }from 'react-bootstrap';

import { getPhoneDirectoryData } from './DirectoryViewData';
import { mapAllDirectoryData } from './DirectoryViewHelpers';

import './DirectoryView.css';

export const DirectoryView = () => {
        // Magic Numbers
        const PAGE_NUMBER = 1;
        const TEN_USERS = 10;

        const [isLoading, setIsLoading] = useState(false);
        const [pageNumber, setPageNumber] = useState(PAGE_NUMBER);
        const [paginationAmount, setPaginationAmount] = useState(TEN_USERS);
        const [paginatedDirectoryData, setPaginatedDirectoryData] = useState(undefined);

        useMemo(() => {
            setIsLoading(true)
            getPhoneDirectoryData(pageNumber, paginationAmount).then(e => {
                setPaginatedDirectoryData(e.data.results);
                setIsLoading(false);
            });
        }, [paginationAmount, pageNumber]);

        return (
            <>
                <Container fluid>
                    {
                        !isLoading ? 
                            <Row xs={1} md={2} lg={3} xl={4} className='g-4 all-directory-data'>
                                {mapAllDirectoryData(paginatedDirectoryData)}
                            </Row> :
                            <Spinner/> 
                    }
                </Container>
            </>
        );
};