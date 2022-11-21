import React, { Component } from 'react'
import './container.css';

export default class Container extends Component {
    render() {
        return (
            <div id='corusel'>

                <div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel">
                    <div class="carousel-inner">
                        <div class="carousel-item active">
                            <img src="https://maserati.scene7.com/is/image/maserati/maserati/international/Models/mc20/mc20-hero.jpg?$1920x2000$&fit=constrain" className='d-block w-100' alt="cars" />
                        </div>
                        <div class="carousel-item">
                            <img src="https://maserati.scene7.com/is/image/maserati/maserati/international/Models/my22/quattroporte-my22/my22/16_9/QP_side_3.jpg?$1920x2000$&fit=constrain" className='d-block w-100' alt="cars" />
                        </div>
                        <div class="carousel-item">
                            <img src="https://maserati.scene7.com/is/image/maserati/maserati/international/Models/my22/levante-my22/my22/16_9/LV_side.jpg?$1920x2000$&fit=constrain" className='d-block w-100' alt="cars" />
                        </div>
                        <div class="carousel-item">
                            <img src="https://maserati.scene7.com/is/image/maserati/maserati/international/Models/my22/ghibli-my22/my22/16_9/GH_side.jpg?$1920x2000$&fit=constrain" className='d-block w-100' alt="cars" />
                        </div>
                        <div class="carousel-item">
                            <img src="https://maserati.scene7.com/is/image/maserati/maserati/international/Models/my22/grecale/my22/entry-point/Maserati_Grecale_hero_desktop.jpg?$1920x2000$&fit=constrain" className='d-block w-100' alt="cars" />
                        </div>
                        <div class="carousel-item">
                            <img src="https://maserati.scene7.com/is/image/maserati/maserati/international/Models/my23/mc20-cielo/entry-point/mc20_entry_desktop.jpg?$1920x2000$&fit=constrain" className='d-block w-100' alt="cars" />
                        </div>
                        <div class="carousel-item">
                            <img src="https://maserati.scene7.com/is/image/maserati/maserati/international/News/2022/maserati-project24/01_Maserati_Project24.jpg?$1920x2000$&fit=constrain" className='d-block w-100' alt="cars" />
                        </div>
                        <div class="carousel-item">
                            <img src="https://maserati.scene7.com/is/image/maserati/maserati/international/Models/my23/granturismo/assets/05.jpg?$1920x2000$&fit=constrain" className='d-block w-100' alt="cars" />
                        </div>
                    </div>
                    <button   class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                        <span id='a' class="carousel-control-next-icon " aria-hidden="true"></span>
                        <span class="visually-hidden">Previous</span>
                    </button>
                    <button  class="carousel-control-next mr-50px" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                        <span id='b' class="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span class="visually-hidden">Next</span>
                    </button>
                </div>
            </div>
        )
    }
}
