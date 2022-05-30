import { useState } from 'react';
import axios from 'axios';
import SearchItem from "../SearchItem/SearchItem";
import { useHistory } from 'react-router-dom';

function Search() {

    const [newSearch, setNewSearch] = useState('');
    const [limit, setLimit] = useState('');
    const [rating, setRating] = useState('');
    const [results, setResults] = useState([]);

    const history = useHistory();

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log('clicked submit');

        axios.post('/search', { search: newSearch, rating: rating, limit: limit })
            .then(response => {
                console.log('response.data:', response.data);
                console.log('response.data...:', response.data[0].images.original.url);
                console.log('search: ', newSearch);
                console.log(`newSearch: ${newSearch}, rating: ${rating}, and limit: ${limit}`);

                setResults(response.data);

                // clears inputs
                setNewSearch('');
                setRating('');
                setLimit('');

            }).catch(err => {
                console.log(err);
            });
    };

    const home = () => {
        console.log('clicked home');
        history.push('/');
    }

    return (
        <>
            <form onSubmit={handleSubmit}>
                <input
                    placeholder="search"
                    onChange={(event) => setNewSearch(event.target.value)}
                    value={newSearch}
                    style={{ marginRight: 5 }}
                />
                {/* <input
                    placeholder="rating"
                    onChange={(event) => setRating(event.target.value)}
                    value={rating}
                    style={{ marginRight: 5 }}
                /> */}
                <select 
                    onChange={(event) => setRating(event.target.value)}
                    style={{ marginRight: 5 }}
                >
                    <option value="g">G</option>
                    <option value="pg">PG</option>
                    <option value="pg-13">PG-13</option>
                    <option value="r">R</option>
                </select>
                <input
                    placeholder="limit"
                    type="number"
                    onChange={(event) => setLimit(event.target.value)}
                    value={limit}
                    style={{ marginRight: 5 }}
                />
                <input type="submit" value="submit" />
            </form>
            <br />
            <button onClick={home}>Home</button>
            <div className="search-results">
            {results.map((gif, i) => (
                <SearchItem
                    gif={gif}
                    key={i}
                />
            ))}
            </div>
        </>
    )
}

export default Search;