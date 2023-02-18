import useSWR from 'swr';
import {useState, useEffect} from 'react';
import { Pagination, Accordion } from 'react-bootstrap';
import MovieDetails from '../components/MovieDetails';
import PageHeader from '../components/PageHeader'

export default function Home() {
  const [page,setPage] = useState(1);
  const [pageData, setPageData] = useState([]);

  const {data, error} = useSWR(`https://violet-gosling-hose.cyclic.app/api/movies?page=${page}&perPage=10`);

  useEffect(()=>{
    if (data) {
      setPageData(data);
    }
  }, [data]);

  function previous(e){
    if(page > 1){
      setPage(page-1);
    }
  }

  function next(e){
    setPage(page+1);
  }

  return (
    <>
    <PageHeader text="Film Collection : Sorted by Date"/>
    <Accordion defaultActiveKey="0">
      <Accordion.Item eventKey={pageData[0]?._id} key = {pageData[0]?._id}>
        <Accordion.Header><strong>{pageData[0]?.title}</strong> ({pageData[0]?.year}: {pageData[0]?.directors.join(', ')})</Accordion.Header>
        <Accordion.Body>
        <MovieDetails movie={pageData[0]}/>
        </Accordion.Body>
      </Accordion.Item>

      <Accordion.Item eventKey={pageData[1]?._id} key = {pageData[1]?._id}>
        <Accordion.Header><strong>{pageData[1]?.title}</strong> ({pageData[1]?.year}: {pageData[1]?.directors.join(', ')})</Accordion.Header>
        <Accordion.Body>
        <MovieDetails movie={pageData[1]}/>
        </Accordion.Body>
      </Accordion.Item>

      <Accordion.Item eventKey={pageData[2]?._id} key = {pageData[2]?._id}>
        <Accordion.Header><strong>{pageData[2]?.title}</strong> ({pageData[2]?.year}: {pageData[2]?.directors.join(', ')})</Accordion.Header>
        <Accordion.Body>
        <MovieDetails movie={pageData[2]}/>
        </Accordion.Body>
      </Accordion.Item>

      <Accordion.Item eventKey={pageData[3]?._id} key = {pageData[3]?._id}>
        <Accordion.Header><strong>{pageData[3]?.title}</strong> ({pageData[3]?.year}: {pageData[3]?.directors.join(', ')})</Accordion.Header>
        <Accordion.Body>
        <MovieDetails movie={pageData[3]}/>
        </Accordion.Body>
      </Accordion.Item>

      <Accordion.Item eventKey={pageData[4]?._id} key = {pageData[4]?._id}>
        <Accordion.Header><strong>{pageData[4]?.title}</strong> ({pageData[4]?.year}: {pageData[4]?.directors.join(', ')})</Accordion.Header>
        <Accordion.Body>
        <MovieDetails movie={pageData[4]}/>
        </Accordion.Body>
      </Accordion.Item>

      <Accordion.Item eventKey={pageData[5]?._id} key = {pageData[5]?._id}>
        <Accordion.Header><strong>{pageData[5]?.title}</strong> ({pageData[5]?.year}: {pageData[5]?.directors.join(', ')})</Accordion.Header>
        <Accordion.Body>
        <MovieDetails movie={pageData[5]}/>
        </Accordion.Body>
      </Accordion.Item>

      <Accordion.Item eventKey={pageData[6]?._id} key = {pageData[6]?._id}>
        <Accordion.Header><strong>{pageData[6]?.title}</strong> ({pageData[6]?.year}: {pageData[6]?.directors.join(', ')})</Accordion.Header>
        <Accordion.Body>
        <MovieDetails movie={pageData[6]}/>
        </Accordion.Body>
      </Accordion.Item>

      <Accordion.Item eventKey={pageData[7]?._id} key = {pageData[7]?._id}>
        <Accordion.Header><strong>{pageData[7]?.title}</strong> ({pageData[7]?.year}: {pageData[7]?.directors.join(', ')})</Accordion.Header>
        <Accordion.Body>
        <MovieDetails movie={pageData[7]}/>
        </Accordion.Body>
      </Accordion.Item>

      <Accordion.Item eventKey={pageData[8]?._id} key = {pageData[8]?._id}>
        <Accordion.Header><strong>{pageData[8]?.title}</strong> ({pageData[8]?.year}: {pageData[8]?.directors.join(', ')})</Accordion.Header>
        <Accordion.Body>
        <MovieDetails movie={pageData[8]}/>
        </Accordion.Body>
      </Accordion.Item>

      <Accordion.Item eventKey={pageData[9]?._id} key = {pageData[9]?._id}>
        <Accordion.Header><strong>{pageData[9]?.title}</strong> ({pageData[9]?.year}: {pageData[9]?.directors.join(', ')})</Accordion.Header>
        <Accordion.Body>
        <MovieDetails movie={pageData[9]}/>
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>

    <br/>
    <br/>

    <Pagination>
      <Pagination.Prev onClick={previous}/>
      <Pagination.Item>{page}</Pagination.Item>
      <Pagination.Next onClick={next}/>
    </Pagination>
    </>
  )
}
