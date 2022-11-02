const GifItem = ({ title, imageUrl }) => {
    return (
        <div className="card">
            <img src={ imageUrl } alt={ title } />
            <p>{ title }</p>
        </div>
    )
};

export { GifItem };