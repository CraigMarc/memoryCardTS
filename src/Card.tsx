
function Card(props: { handleClick: React.MouseEventHandler; clickedOn: number[]; loose: boolean | void; data: any; }) {

    const {
        handleClick,
        clickedOn,
        loose,
        data,

    } = props;
   
    const picArray = []

    for (let i = 0; i <= 12; i++) {
        picArray.push(data.hits[i].webformatURL)
    }


    //disable click
    let disable = false
    if (clickedOn.length == 12 || loose == true) {
        disable = true
    }
    //create random array

    function shuffle() {
        const array = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]
        let currentIndex = array.length, randomIndex;


        while (currentIndex > 0) {


            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex--;

            [array[currentIndex], array[randomIndex]] = [
                array[randomIndex], array[currentIndex]];
        }

        return array
    }

    const randomArray = shuffle()
   
    return (
        <>
            <div className="cardContainer">
                {randomArray.map((index) => {

                    return (
                        <div key={index} disabled={disable} id={index} className="card" onClick={handleClick}>
                           
                            <img className="img" src={picArray[index]}></img>
                        </div>
                    )
                })}


            </div>

        </>
    )

}


export { Card };