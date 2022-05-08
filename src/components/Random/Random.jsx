import { useSelector } from 'react-redux';

function Random({ fetchRandom }) {

    const random = useSelector(store => store.random)

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