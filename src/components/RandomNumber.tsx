const RandomNumber = () => {
    const id = Math.random().toString()

    return (
        <div id={id}>Just created number with id property</div>
    )
}

export default RandomNumber