import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import axios from 'axios';

function Random() {

    const random = useSelector(store => store.random)
    const dispatch = useDispatch();

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

    return (
        <>
            <img src={random} alt="random gif" />
            <br />
            <button
                onClick={fetchRandom}
                style={{ marginTop: 5, marginBottom: 5 }}
            >
                Refresh
            </button>
        </>
    )
}

export default Random;