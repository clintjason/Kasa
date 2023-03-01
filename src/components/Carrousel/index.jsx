import './_carrousel.scss';
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';
import Slider from '../Slider';
class Carrousel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentSlide: 0,
      slide: this.props.pictures[0],
      direction: ''
    };
    this.next = this.next.bind(this);
    this.slideWithkeyboard = this.slideWithkeyboard.bind(this);
  }

  next(e) {
    e.preventDefault()
    if(this.state.currentSlide >= this.props.pictures.length - 1) {
      this.setState({ currentSlide: 0})
    } else {
      this.setState((state) => ({currentSlide: state.currentSlide + 1}))
    }
    //this.setState({direction: 'next-active--' + this.state.currentSlide})
    this.setState({direction: 'next-active'})
    this.selectSlide()
  }

  prev = (e) => {
    e.preventDefault()
    if(this.state.currentSlide <= 0) {
      this.setState((state, props) => ({currentSlide: props.pictures.length - 1}))
    } else {
      this.setState((state) => ({currentSlide: state.currentSlide - 1}))
    }
    //this.setState({direction: 'prev-active--' + this.state.currentSlide})
    this.setState({direction: 'prev-active'})
    this.selectSlide()
  }

  selectSlide = () => {
    // filter image with index
    const pic = this.props.pictures.find((pic, i) => this.state.currentSlide === i)
    if(pic) {
      this.setState({
        slide: pic
      })
    }
  }

  slideWithkeyboard = (event) => {
    event.preventDefault();
    if (event.keyCode === 39) {
      this.next(event);
    } else if (event.keyCode === 37) {
      this.prev(event);
    } else {
      return;
    }
  }

  render() {
    const pictureArrayLength = this.props.pictures.length;
    return (
      <div className='carrousel' onKeyDown={this.slideWithkeyboard} tabIndex="0">
        <Slider slide={this.state.slide} altSlide={this.state.currentSlide} key={this.state.slide} direction={this.state.direction}/>
        <FontAwesomeIcon className='carrousel__navlink next' onClick={this.next} icon={faChevronRight} size="2x" />
        <FontAwesomeIcon className='carrousel__navlink prev' onClick={this.prev} icon={faChevronLeft} size="2x" />
        <p className='carrousel__pagination'>{this.state.currentSlide + 1} / {pictureArrayLength}</p>
      </div>
    )
  }
}
export default Carrousel;