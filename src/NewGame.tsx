function NewGame(props) {

    const {
        clickedOn,
        loose,
        handleStart,

    } = props;

   if (clickedOn.length == 12 || loose == "true") {
      
        return (
            <div className="newGameContainer">
                <button onClick={handleStart}>Play Another Round</button>
            </div>


        )
        }




}

export { NewGame };