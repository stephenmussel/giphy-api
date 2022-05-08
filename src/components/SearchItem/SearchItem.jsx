function SearchItem({ gif, i }) {
    return (
        <div>
            <img key={i} src={gif.images.original.url} />
        </div>
    )
}

export default SearchItem;