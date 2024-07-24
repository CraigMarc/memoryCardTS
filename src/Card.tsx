import map from './assets/map.png';
import pizza1 from './assets/pizza1.jpeg';
import pizza from './assets/pizza.jpeg';
import pizza2 from './assets/pizza2.jpeg';
import pizza3 from './assets/pizza3.jpeg';
import pizza4 from './assets/pizza4.jpeg';

function Card(props) {

    const {
        handleClick,
        clickedOn,
        loose,
        data,

    } = props;

    //pic array from files if want to stop using api *******

    //let picArray = [map, pizza1, pizza, pizza2, pizza3, pizza4]

    // ********** 

    //console.log(data.hits)


    let picArray = []

    for (let i = 0; i <= 12; i++) {
        picArray.push(data.hits[i].webformatURL)
    }


    //disable click
    let disable = false
    if (clickedOn.length == 12 || loose == "true") {
        disable = true
    }
    //create random array

    function shuffle() {
        let array = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]
        let currentIndex = array.length, randomIndex;


        while (currentIndex > 0) {


            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex--;

            [array[currentIndex], array[randomIndex]] = [
                array[randomIndex], array[currentIndex]];
        }

        return array
    }

    let randomArray = shuffle()
   
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