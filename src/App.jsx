import React from "react";
import './App.css'
import buscadorIcono from './buscador.svg'
import TarjetaPelicula from "./TarjetaPelicula";
import { useState ,useEffect } from "react";

// TODO Llave del Api de Peliculas (c4ad62bc)

const API_URL = 'http://www.omdbapi.com?apikey=c4ad62bc';
const App = () => {
const [movies, setMovies] = useState([])
const [busquedaParam, setBusquedaParam] = useState('')
const buscadorCine = async (titulo) =>{
    const response = await fetch(`${API_URL}&s=${titulo}`);
    const data = await response.json();
    setMovies(data.Search);
}
    useEffect(() =>{
        buscadorCine('')
    }, [])
    return (
        <div className = "app">
            <h1>Cine Artemis</h1>
            <div className = "busqueda">
                <input 
                    type = "text" 
                    placeholder = 'Buscador de Peliculas' 
                    value = {busquedaParam} 
                    onChange = {(e) => setBusquedaParam(e.target.value)}
                />
                <img 
                    src = {buscadorIcono} 
                    alt = 'Buscar' 
                    onClick = {() => buscadorCine(busquedaParam)}
                />
            </div>

            {movies?.length >0 ? (
                <div className = 'contenedor'>
                    {
                        movies.map((movie) => (
                            <TarjetaPelicula movie1 = {movie}/>
                        ))
                    }
                </div>
            ): (
                <div className = 'empty'>
                    <h2>No se encontraron peliculas</h2>
                </div>
            )}
        </div>
    )
}

export default App