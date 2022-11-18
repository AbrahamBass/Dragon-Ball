import {useEffect, useState} from 'react'

// Axios
import  Axios  from 'axios'

// Iconos
import { AiOutlineReload } from 'react-icons/ai';
import { BsHexagon } from 'react-icons/bs';

// Imagenes 
import Esfera from './Img/esferas.png'

// Estilos
import './App.css'

function App() {

  const [data, setData] = useState({})
  const [id, setId] = useState(1)
  const [personajes, setPersonajes] = useState([])

  const [esferaUno, setEsferaUno] = useState(false)
  const [esferaDos, setEsferaDos] = useState(false)
  const [esferaTres, setEsferaTres] = useState(false)
  const [esferaCuatro, setEsferaCuatro] = useState(false)
  const [esferaCinco, setEsferaCinco] = useState(false)
  const [esferaSeis, setEsferaSeis] = useState(false)




  let nombre = personajes[id]

  useEffect(() => {
    Axios.get(`https://dragon-ball-super-api.herokuapp.com/api/characters`)
    .then((res) => {
      setPersonajes(res.data)
    })
  }, [])

  useEffect(() => {
    Axios.get(`https://dragon-ball-super-api.herokuapp.com/api/characters/Zeno`)
      .then((res) => {
        console.log(res.data);
        setData(res.data)
      })
  },[])

 


  const HandleClikPersonaje = () => {
    let id = Math.floor(Math.random() * 128)
    setId(id)
    Axios.get(`https://dragon-ball-super-api.herokuapp.com/api/characters/${nombre.name}`)
      .then((res) => {
        console.log(res.data)
        setData(res.data)
      })
      
  }

  const HandleMouseUno = () => {
    setEsferaUno(!esferaUno)
  }
  const HandleMouseDos = () => {
    setEsferaDos(!esferaDos)
  }
  const HandleMouseTres = () => {
    setEsferaTres(!esferaTres)
  }
  const HandleMouseCuatro = () => {
    setEsferaCuatro(!esferaCuatro)
  }
  const HandleMouseCinco = () => {
    setEsferaCinco(!esferaCinco)
  }
  const HandleMouseSeis = () => {
    setEsferaSeis(!esferaSeis)
  }


  return (
    <div className="App">
      <div>
        <div className="div-hexa">
          <BsHexagon className='hexagonal' onMouseEnter={HandleMouseUno}/>
          { esferaUno && <img src={Esfera} alt="img"  className='esfera'/> }
        </div>
        <div className="div-hexa">
            <BsHexagon className='hexagonal' onMouseEnter={HandleMouseDos}/>
            { esferaDos && <img src={Esfera} alt="img"  className='esfera'/> }
        </div>
        <div className="div-hexa">
          <BsHexagon className='hexagonal' onMouseEnter={HandleMouseTres} />
          { esferaTres && <img src={Esfera} alt="img"  className='esfera'/> }
        </div>
      </div>

      <div className='api-load'>
        <div>
          <h1 className='title'>{data.name}</h1>
        </div>
        <div className='load-img'>
          <img src={data.imageUrl} alt="img" className='img-api'/>
          <AiOutlineReload onClick={HandleClikPersonaje} className='load-btn'/>
        </div>
      </div>

      <div>
        <div className="div-hexa">
         <BsHexagon className='hexagonal' onMouseEnter={HandleMouseCuatro}/>
         { esferaCuatro && <img src={Esfera} alt="img"  className='esfera'/> }
         
        </div>
        
        <div className="div-hexa">
          <BsHexagon className='hexagonal' onMouseEnter={HandleMouseCinco}/>
          { esferaCinco && <img src={Esfera} alt="img"  className='esfera'/> }
          
        </div>
        <div className="div-hexa">
          <BsHexagon className='hexagonal' onMouseEnter={HandleMouseSeis}/>
          { esferaSeis && <img src={Esfera} alt="img"  className='esfera'/> }
        </div>
      </div>
    </div>
  )
}

export default App
