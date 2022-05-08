import { useHistory } from 'react-router-dom';

function Home() {

    const history = useHistory();

    const feel = () => {
        console.log(`clicked feelin' button`);
        history.push('/random');
    }

    return(
        <div className="Home">
            <button onClick={feel} style={{ marginRight: 5 }}>I'm feelin' lucky</button>
            <button>I make my own luck...</button>
        </div>
    )
}

export default Home;