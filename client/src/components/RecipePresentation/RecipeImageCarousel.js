import React, { Component } from 'react';
import {withRouter} from 'react-router-dom';
import Carousel from 'react-bootstrap/Carousel';
import './RecipeImageCarousel.css'

class RecipeImageCarousel extends Component {

    constructor(props){
        super(props)
        this.state={
            imageList: []
        }
        this.renderCarousel = this.renderCarousel.bind(this)
    }

    renderCarousel(){
        if(this.state.imageList[0]==null){
            return(
                <Carousel.Item className="carouselItem">
                    <img
                    className="d-block w-100"
                    src={require("../../Assets/image_placeholder.jpg")}
                    alt="placeholder"
                    />
                    <Carousel.Caption>
                        <h3>We don't have an image</h3>
                        <p>Feel free to cook and submit yours!</p>
                    </Carousel.Caption>
                </Carousel.Item>
            )
        }else{
            return(
                this.state.imageList.map((image,key)=>{
                    return(
                        <Carousel.Item key={key}>
                            <img
                            className="d-block w-100"
                            src={require(`${image.path}`)}
                            alt={image.path}
                            />
                            <Carousel.Caption>
                                <h3>Recipe Name</h3>
                                <p>Recipe Description</p>
                            </Carousel.Caption>
                        </Carousel.Item>
                    )
                })
            )

        }
    }
    

    render() {

        return(
            <div className="recipeImageCarousel">
                <Carousel className="carousel">
                    {this.renderCarousel()}
                </Carousel>
            </div>
            )
        }

}

  export default withRouter(RecipeImageCarousel);