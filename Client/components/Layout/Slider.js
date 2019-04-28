import React from 'react';
import { Slide } from 'react-slideshow-image';
import Typography from '@material-ui/core/Typography';
import download from '../img/download.jpg'
import building from '../img/building.jpg'
import exam from '../img/exam.jpg'
import office from '../img/office.jpg'
 
const properties = {
  duration: 5000,
  transitionDuration: 500,
  infinite: true,
  indicators: true,
  arrows: true
}
 
const Slideshow = () => {
    return (
      <Slide {...properties} >
        <div className="each-slide">
          <div style={{'backgroundImage': `url(${building})`,
            color:"white", backgroundPosition: 'center center', backgroundRepeat: 'no-repeat',
            backgroundSize:'cover', height:'100%',paddingTop:'10%',paddingBottom:'10%'
          }}>
          <Typography variant="display3" size='small' align='center' style={{color:'white'}} >
              AL Husnain Public Secondary School
          </Typography>
          <Typography variant="display1" size='small' align='center' style={{color:'white'}} >
              ENTER TO LEARN, LEAVE TO SERVE
          </Typography>
          </div>
        </div>

        <div className="each-slide">
          <div style={{'backgroundImage': `url(${exam})`,
            color:"white", backgroundPosition: 'center center', backgroundRepeat: 'no-repeat',
            backgroundSize:'cover', height:'100%',paddingTop:'10%',paddingBottom:'10%'
          }}>
          <Typography variant="display3" size='small' align='center' style={{color:'white'}} >
                Be consistent
          </Typography>
          <Typography variant="display1" size='small' align='center' style={{color:'white'}} >
              Education Is Key To Success
          </Typography>
          </div>
        </div>
        

        <div className="each-slide" >
          <div style={{'backgroundImage': `url(${office})`,
          color:"white", backgroundPosition: 'center center', backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover', height:'100%',paddingTop:'15%',paddingBottom:'15%'
          }}>   
          </div>
        </div>
        
        <div className="each-slide">
          <div style={{'backgroundImage': `url(${download})`,
          color:"white", backgroundPosition: 'center center', backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover', height:'100%',paddingTop:'15%',paddingBottom:'15%'
          }}>
          </div>
        </div>

      </Slide>
    )
}
 export default Slideshow






// import React from "react";


// class Slider extends React.Component {
//     constructor(props) {
//       super(props)
  
//       this.state = {
//         images: [
//           "https://s3.us-east-2.amazonaws.com/dzuz14/thumbnails/aurora.jpg",
//           "https://s3.us-east-2.amazonaws.com/dzuz14/thumbnails/canyon.jpg",
//           "https://s3.us-east-2.amazonaws.com/dzuz14/thumbnails/city.jpg",
//           "https://s3.us-east-2.amazonaws.com/dzuz14/thumbnails/desert.jpg",
//           "https://s3.us-east-2.amazonaws.com/dzuz14/thumbnails/mountains.jpg",
//           "https://s3.us-east-2.amazonaws.com/dzuz14/thumbnails/redsky.jpg",
//           "https://s3.us-east-2.amazonaws.com/dzuz14/thumbnails/sandy-shores.jpg",
//           "https://s3.us-east-2.amazonaws.com/dzuz14/thumbnails/tree-of-life.jpg"
//         ],
//         currentIndex: 0,
//         translateValue: 0
//       }
//     }
  
//     goToPrevSlide = () => {
//       if(this.state.currentIndex === 0)
//         return;
      
//       this.setState(prevState => ({
//         currentIndex: prevState.currentIndex - 1,
//         translateValue: prevState.translateValue + this.slideWidth()
//       }))
//     }
  
//     goToNextSlide = () => {
//       // Exiting the method early if we are at the end of the images array.
//       // We also want to reset currentIndex and translateValue, so we return
//       // to the first image in the array.
//       if(this.state.currentIndex === this.state.images.length - 1) {
//         return this.setState({
//           currentIndex: 0,
//           translateValue: 0
//         })
//       }
      
//       // This will not run if we met the if condition above
//       this.setState(prevState => ({
//         currentIndex: prevState.currentIndex + 1,
//         translateValue: prevState.translateValue + -(this.slideWidth())
//       }));
//     }
  
//     slideWidth = () => {
//        return document.querySelector('.slide').clientWidth
//     }
  
//     render() {
//       return (
//         <div className="slider">
  
//           <div className="slider-wrapper"
//             style={{
//               transform: `translateX(${this.state.translateValue}px)`,
//               transition: 'transform ease-out 0.45s'
//             }}>
//               {
//                 this.state.images.map((image, i) => (
//                   <Slide key={i} image={image} />
//                 ))
//               }
//           </div>
  
//           <LeftArrow
//            goToPrevSlide={this.goToPrevSlide}
//           />
  
//           <RightArrow
//            goToNextSlide={this.goToNextSlide}
//           />
//         </div>
//       );
//     }
//   }
  
  
//   const Slide = ({ image }) => {
//     const styles = {
//       backgroundImage: `url(${image})`,
//       backgroundSize: 'cover',
//       backgroundRepeat: 'no-repeat',
//       backgroundPosition: '50% 60%'
//     }
//     return <div className="slide" style={styles}></div>
//   }
  
  
//   const LeftArrow = (props) => {
//     return (
//       <div className="backArrow arrow" onClick={props.goToPrevSlide}>
//         <i className="fa fa-arrow-left fa-2x" aria-hidden="true"></i>
//       </div>
//     );
//   }
  
  
//   const RightArrow = (props) => {
//     return (
//       <div className="nextArrow arrow" onClick={props.goToNextSlide}>
//         <i className="fa fa-arrow-right fa-2x" aria-hidden="true"></i>
//       </div>
//     );
//   }
//   export default Slider