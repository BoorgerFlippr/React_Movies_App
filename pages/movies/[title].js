import { useRouter } from 'next/router';
import useSWR from 'swr';
import MovieDetails from '../../components/MovieDetails';
import Error from 'next/error';
import PageHeader from '../../components/PageHeader';

export default function Movie() {
    const router = useRouter();
    const { title } = router.query;
    const {data, error} = useSWR(`https://violet-gosling-hose.cyclic.app/api/movies?page=1&perPage=10&title=${title}`)

    if (data != null) {

        if(data == ""){

            return(
                <Error statusCode={404}/>
            )
        }else {

            return(
                <>
                {data.map((mv) => (
                    <div key={mv?._id}>
                        <PageHeader text={mv?.title}/>
                        <MovieDetails movie={mv}/>
                        <br/>
                    </div>
                ))}
                </>
            )

        }
    }else {
        return (
            <></>
        )
    }
}