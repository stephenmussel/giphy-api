import SearchItem from "../SearchItem/SearchItem";

function Search({ 
    handleSubmit, 
    newSearch, 
    rating, 
    limit, 
    results, 
    setNewSearch,
    setRating,
    setLimit
}) 

{
    return (
        <>
            <form onSubmit={handleSubmit}>
                <input
                    placeholder="search"
                    onChange={(event) => setNewSearch(event.target.value)}
                    value={newSearch}
                    style={{ marginRight: 5 }}
                />
                <input
                    placeholder="rating"
                    onChange={(event) => setRating(event.target.value)}
                    value={rating}
                    style={{ marginRight: 5 }}
                />
                <input
                    placeholder="limit"
                    type="number"
                    onChange={(event) => setLimit(event.target.value)}
                    value={limit}
                    style={{ marginRight: 5 }}
                />
                <input type="submit" value="submit" />
            </form>
            {results.map((gif, i) => (
                <SearchItem
                    gif={gif}
                    key={i}
                />
            ))}
        </>
    )
}

export default Search;