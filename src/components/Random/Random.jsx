import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import axios from 'axios';
import { useHistory } from 'react-router-dom';

function Random() {

    const random = useSelector(store => store.random)
    const dispatch = useDispatch();
    const history = useHistory();

    const fetchRandom = () => {
        console.log('in fetchRandom');

        axios.get('/random')
            .then(response => {
                console.log(response.data.data.images.downsized_medium.url);

                const action = { type: 'SET_RANDOM', payload: response.data.data.images.downsized_medium.url };
                dispatch(action);
            })
    };

    useEffect(() => {
        fetchRandom();
    }, [])

    const home = () => {
        console.log('clicked home');
        history.push('/');
    }

    return (
        <>
            <img src={random} alt="random gif" />
            <br />
            <button
                onClick={fetchRandom}
                style={{ marginTop: 5, marginRight: 5, marginBottom: 5 }}
            >
                Refresh
            </button>
            <button onClick={home}>Home</button>
        </>
    )
}

export default Random;