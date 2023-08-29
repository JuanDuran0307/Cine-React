import React from "react";
import './App.css'

const TarjetaPelicula = ({movie1}) => {
    return (
        <div class="card">
            <div class="content">
                <div class="back">
                    <div class="back-content">
                        <div><img src = {movie1.Poster !== "N/A"? movie1.Poster : "https://via.placeholder.com/400"} alt= {movie1.Title} /></div>
                    </div>
                </div>
                <div class="front">
                    <div class="img">
                        <div class="circle">
                        </div>
                        <div class="circle" id="right">
                        </div>
                        <div class="circle" id="bottom">
                        </div>
                    </div>

                    <div class="front-content">
                        <p class="badge"><strong>{movie1.Title}</strong></p>
                        
                        <div class="description">
                            <div class="title">
                                <p class="title">
                                    <strong>{movie1.Year}</strong>
                                </p>
                            </div>
                            <p class="card-footer">
                            {movie1.Type} &nbsp; | &nbsp; {movie1.imdbID}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TarjetaPelicula