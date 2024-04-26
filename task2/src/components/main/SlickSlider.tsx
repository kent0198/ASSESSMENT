
import Slider from "react-slick";

interface SliderSettings {
    dots: boolean;
    infinite: boolean;
    speed: number;
    slidesToShow: number;
    slidesToScroll: number;
  }

  

const SlickSlider = () => {
    const settings: SliderSettings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 6,
        slidesToScroll: 3
      };
  return (
    <div className="slider-container">
      <Slider {...settings}>
        <div className="mt-10">
            <img src="https://shub.edu.vn/images/landing/ver3/image-section/carousel1.png" alt="No"/>
        </div>
        <div>
        <img src="https://shub.edu.vn/images/landing/ver3/image-section/carousel2.png" alt="No"/>
        </div>
            <div className="mt-10">
            <img src="https://shub.edu.vn/images/landing/ver3/image-section/carousel3.png" alt="No"/>
            </div>
        <div>
        <img src="https://shub.edu.vn/images/landing/ver3/image-section/carousel4.png" alt="No"/>
        </div>
            <div className="mt-10">
            <img src="https://shub.edu.vn/images/landing/ver3/image-section/carousel5.png" alt="No"/>
            </div>
        <div>
        <img src="https://shub.edu.vn/images/landing/ver3/image-section/carousel6.png"  alt="No"/>
        </div>
            <div className="mt-10">
            <img src="https://shub.edu.vn/images/landing/ver3/image-section/carousel1.png" alt="No"/>
            </div>
        <div>
        <img src="https://shub.edu.vn/images/landing/ver3/image-section/carousel2.png" alt="No"/>
        </div>
            <div className="mt-10">
            <img src="https://shub.edu.vn/images/landing/ver3/image-section/carousel3.png" alt="No"/>
            </div>
      </Slider>
    </div>
  );
}

export default SlickSlider