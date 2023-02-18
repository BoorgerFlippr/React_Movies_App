import Link from "next/link";
import Card from "react-bootstrap/Card";
import MovieDetails from "../components/MovieDetails";
import PageHeader from "../components/PageHeader";

export async function getStaticProps() {
    const res = await fetch('https://violet-gosling-hose.cyclic.app/api/movies/573a1399f29313caabceea14');
    const data = await res.json();

    return {props: {movie: data}}
}

export default function About(props) {
    return (
        <>
        <Card>
            <Card.Body>
                <PageHeader text="About the Developer : Glenn Parreno"/> 
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                Morbi enim nunc faucibus a pellentesque sit amet porttitor. Turpis nunc eget lorem dolor sed viverra ipsum nunc aliquet. 
                Eleifend quam adipiscing vitae proin sagittis nisl rhoncus mattis. Quam nulla porttitor massa id neque aliquam vestibulum. 
                Eu sem integer vitae justo eget magna fermentum iaculis. 
                Est velit egestas dui id ornare arcu odio ut sem. Id leo in vitae turpis massa sed. 
                Id cursus metus aliquam eleifend mi in nulla posuere sollicitudin. 
                Purus in massa tempor nec. Pellentesque massa placerat duis ultricies lacus sed turpis. 
                Ac placerat vestibulum lectus mauris ultrices eros in cursus turpis. Sed velit dignissim sodales ut eu sem. 
                Tellus cras adipiscing enim eu turpis egestas pretium aenean. Non arcu risus quis varius. Id donec ultrices tincidunt arcu non. 
                Diam vel quam elementum pulvinar etiam non quam lacus. Urna cursus eget nunc scelerisque viverra mauris in aliquam.
                <br/>
                <br/>
                Quis ipsum suspendisse ultrices gravida dictum fusce ut. Cursus mattis molestie a iaculis at erat pellentesque. 
                Amet tellus cras adipiscing enim eu turpis. Facilisi nullam vehicula ipsum a. Adipiscing enim eu turpis egestas pretium aenean 
                pharetra magna. Metus aliquam eleifend mi in nulla. Risus feugiat in ante metus. Enim ut tellus elementum sagittis vitae. Diam 
                maecenas ultricies mi eget mauris. Nunc id cursus metus aliquam eleifend mi in nulla posuere. Nunc non blandit massa enim.
                <br/>
                <br/>
                Quentin Tarantino is one of my favourite directors of all time. Among his many films, the one I like the most is <Link href="/movies/Pulp Fiction">
                    &quot;Pulp Fiction&quot;</Link>. The style, tone, and dialogue of the film is masterfully done. Not to
                mention the film&apos;s plot. In the beginning it seems to be disjointed and all over the place until it all comes together in
                the end. 
                <br/>
                <br/>
            </Card.Body>
            <MovieDetails movie={props.movie}/>
        </Card>
        </>
    )
}