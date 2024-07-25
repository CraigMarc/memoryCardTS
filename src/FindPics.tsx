function FindPics(props: { handlePicSubmit: any; error: boolean | undefined; }) {

    const {
        handlePicSubmit,
        error,

    } = props;


    const renderError = () => {
        if (error == true) {
            return (
                <h2>Pictures did not load try something else</h2>
            )
        }

    }

    return (

        <div>
            <h1 className="findTitle">Memory Game</h1>
            <div className="findPicContainer">
                <div className="picContainer">

                    <h3>Fill in the form with the type of pictures you want to display on the cards in the game</h3>
                    <h3 className="example">example: mountains, cartoon characters, animals or anything really</h3>
                    <form onSubmit={handlePicSubmit}>
                        <label>
                            {' '}
                            <input
                                id="pictures"
                                type="text"
                                name="pictures"
                                placeholder="search for pictures"
                                required

                            />
                        </label>
                        <div className="submitContainer">
                            <input className="submit" type="submit" />
                        </div>
                    </form>
                    {renderError()}
                </div>
            </div>
        </div>
    )

}

export { FindPics };