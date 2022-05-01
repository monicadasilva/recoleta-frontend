import React, { Component } from "react";
import Slider from "react-slick";
import { StyledContainer, SlickSliderContainer } from "./styled";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default class SliderHome extends Component {
  render() {
    const settings = {
      dots: false,
      arrows: false,
      infinite: false,
      speed: 500,
      centerMode: true,
      slidesToShow: 1.2,
      slidesToScroll: 1,
    };
    return (
      <StyledContainer>
        <Slider {...settings}>
          <SlickSliderContainer>
            <div>
              <h2>Descarte de Papelão</h2>
              <p> Aprenda a maneira correta de armazenar e descartar </p>
            </div>
          </SlickSliderContainer>
          <SlickSliderContainer>
            <div>
              <h2>Descarte de Papelão</h2>
              <p> Aprenda a maneira correta de armazenar e descartar </p>
            </div>
          </SlickSliderContainer>
          <SlickSliderContainer>
            <div>
              <h2>Descarte de Papelão</h2>
              <p> Aprenda a maneira correta de armazenar e descartar </p>
            </div>
          </SlickSliderContainer>
          <SlickSliderContainer>
            <div>
              <h2>Descarte de Papelão</h2>
              <p> Aprenda a maneira correta de armazenar e descartar </p>
            </div>
          </SlickSliderContainer>
          <SlickSliderContainer>
            <div>
              <h2>Descarte de Papelão</h2>
              <p> Aprenda a maneira correta de armazenar e descartar </p>
            </div>
          </SlickSliderContainer>
          <SlickSliderContainer>
            <div>
              <h2>Descarte de Papelão</h2>
              <p> Aprenda a maneira correta de armazenar e descartar </p>
            </div>
          </SlickSliderContainer>
        </Slider>
      </StyledContainer>
    );
  }
}
