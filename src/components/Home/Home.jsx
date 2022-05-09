import { useHistory } from 'react-router-dom';
import './Home.css';

function Home() {

    const history = useHistory();

    const feel = () => {
        console.log(`clicked feelin' button`);
        history.push('/random');
    }

    const luck = () => {
        console.log('clicked luck button');
        history.push('/search');
    }

    return (
        <div className="Home">
            <button onClick={feel} style={{ marginRight: 5 }}>I'm feelin' lucky</button>
            <button onClick={luck}>I make my own luck...</button>
        </div>
    )
}

export default Home;