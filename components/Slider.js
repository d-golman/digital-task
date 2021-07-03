import React, { useRef } from 'react';
import styled from 'styled-components';

const SliderBlock = styled.div`
max-width: 800px;
margin: 20px auto;
overflow: hidden;
position: relative;
.images{
  scroll-snap-type: x mandatory;  
  overflow-x: hidden;
  display: flex;
  position: relative;
  transition: all 0.3s;
  .image{
    scroll-snap-align: start;
    width: 100%;
    flex-shrink: 0;
    img{
      width: 100%;
    }
    
  }
  }
.fa{
  color: #FFD369;
  background-color: black;
  position: absolute;
  height: 32px;
  width: 32px;
  line-height: 32px;
  border-radius:50%;
  text-align: center;
  bottom: 2%;
  font-size: 31px;
  cursor: pointer;
}
.fa-arrow-circle-right{
  right: 2%;
}
.fa-arrow-circle-left{
  left: 2%;
}
@media screen and (max-width: 768px){
  .fa{
    display: none;
  }
  .images{    
    overflow-x: auto;
  }
}
`;

const Slider = ({ images }) => {

  const ref = useRef(null);

  const slideHandler = (direction) => {
    if (direction === 'right' && ref.current.scrollLeft < ref.current.clientWidth * images.length - ref.current.clientWidth) {
      ref.current.scrollTo(parseInt(ref.current.scrollLeft) + 800, 0);
    } else if (direction === 'left' && parseInt(ref.current.scrollLeft) > 0) {
      ref.current.scrollTo(parseInt(ref.current.scrollLeft) - 800, 0);

    }
  };

  return (
    <SliderBlock >
      <div style={{ right: '0px' }} ref={ref} className="images">
        {images.map((screenshot, index) => {
          return (
            <div key={index} className="image">
              <img key={screenshot.id} src={screenshot.image} />
            </div>
          );
        })
        }
      </div>
      {
        images.length > 1 &&
        <>
          <i onClick={() => slideHandler('left')} aria-hidden className="fa fa-arrow-circle-left"></i>
          <i onClick={() => slideHandler('right')} aria-hidden className="fa fa-arrow-circle-right"></i>
        </>
      }
    </SliderBlock>
  );
};

export default Slider;
