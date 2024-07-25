import { useState, useEffect } from 'react'
import './App.css'
import { Card } from './Card'
import { Header } from './Header'
import { NewGame } from './NewGame'
import { FindPics } from './FindPics'
import { Loading } from './Loading'

function App() {


  //states
  const [clickedOn, setClickedOn] = useState<number[]>([])
  const [loose, setLoose] = useState<boolean>()
  const [bestGame, setBestGame] = useState(0)
  const [data, setData] = useState({ hits: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13] })
  const [error, setError] = useState<boolean | undefined>()
  const [findPicsState, setFindPicsState] = useState(true)
  const [searchResult, setSearchResult] = useState("mountains")
  const [loading, setLoading] = useState<boolean | undefined>()

  const fetchInfo = async (pics: FormDataEntryValue | undefined) => {
    setLoading(true)
    if (pics == undefined) {
      pics = "mountains"
    }
    try {
      //return fetch(picUrl)
      const res = await fetch("https://pixabay.com/api/?key=40272701-d1f0bb34d10cfd0d1c847f1fd&q=" + pics + "&image_type=photo")

      const picData = await res.json();
      const picArr = picData.hits
      if (picArr.length > 12) {
        setData(picData)
        setError()
        setLoading(false)
      }

      else {
        setError(true)

      }

    }

    catch (error) {
      console.error("There has been a problem with your fetch operation:", error);
      //add error message to dom
      setError(true)
      //setFindPicsState(true)
    }

  }


  useEffect(() => {
    fetchInfo();
  }, [])


  //event handlers
  const handleClick = (e) => {
    const card = e.currentTarget.id
    if (clickedOn.indexOf(card) != -1 && clickedOn.length > 0) {
      setLoose(true)
    }


    if (clickedOn.indexOf(card) == -1 || clickedOn.length == 0) {
      setClickedOn((clickedOn) => ([...clickedOn, card]));
    }

  }


  const handleStart = () => {

    if (clickedOn.length > bestGame) {
      setBestGame(clickedOn.length)
    }
    setClickedOn([])
    setLoose()
    setFindPicsState(true)

  }
  //handle pic search

  const handlePicSubmit = (event) => {
    event.preventDefault();
    const dataSubmit = Object.fromEntries(new FormData(event.target).entries());
    setFindPicsState(false)

    setSearchResult(dataSubmit.pictures)
    fetchInfo(dataSubmit.pictures)

    clearAllInputs()
  }

  function clearAllInputs() {
    const allInputs = document.querySelectorAll('input');

    allInputs.forEach(singleInput => singleInput.value = '');

  }

  if (loading == true) {

    <Loading/>
  }



  if (findPicsState == false && error != true) {

    return (
      <>
        <Header
          clickedOn={clickedOn}
          loose={loose}
          bestGame={bestGame}
          searchResult={searchResult}
        />

        <NewGame
          clickedOn={clickedOn}
          loose={loose}
          handleStart={handleStart}
        />

        <Card
          handleClick={handleClick}
          clickedOn={clickedOn}
          loose={loose}
          data={data}
        />



      </>
    )
  }


  return (
    <>
      <FindPics
        handlePicSubmit={handlePicSubmit}
        data={data}
        error={error}
      />

    </>
  )


}




export default App
