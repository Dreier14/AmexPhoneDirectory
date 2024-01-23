import { Link } from 'react-router-dom';
import { Card, Col } from 'react-bootstrap';

import { NoData } from '../noData/noData';

import './DirectoryView.css';

export const mapAllDirectoryData = (directoryData) => {

    if (!directoryData) {
        return <NoData />
    }

    const mappedDirectoryData = directoryData.map((e, i) => {
        const { title, first, last } = e.name;

        return (
            <Col key={i}>
                <Card className='card'>
                    <Card.Img src={e.picture.large} className='photo' />
                    <Card.Body className='card-body' >
                        <Card.Title>
                            <b>{title} {first} {last}</b> 
                        </Card.Title>
                        <Card.Text>
                            Age: {e.dob.age}
                            <br />
                            City: {e.location.city}
                        </Card.Text>
                        <Link to={'/detailed-view'} state={{ props: directoryData[i] }}>
                            Contact Info
                        </Link>
                    </Card.Body>
                </Card>
            </Col>
        )
    })

    return (
        <>
            {mappedDirectoryData}
        </>
    );
}