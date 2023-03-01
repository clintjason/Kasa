import React from 'react';
import './_collapse.scss';
import open_arrow from '../../assets/img/open_arrow.svg';
import close_arrow from '../../assets/img/close_arrow.svg';

class Collapse extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      toggle: false,
    }
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    e.preventDefault();
    this.setState( state => ({
      toggle: !state.toggle
    }))
  }
  render() {
    const dropdown = this.state.toggle ? <img src={open_arrow} alt="Chevron Pointing Up" className="collapse__icons--open" /> : <img src={close_arrow} alt="Chevron Pointing Down" className="collapse__icons--close" />;
    return (
      <div className='collapse'>
        <div className='collapse__heading' onClick={this.handleClick}>
          <span>{this.props.title}</span>
          <div className='collapse__icons'>
            {dropdown}
          </div>
        </div>
        {this.state.toggle && 
          <div className='collapse__desc show'>
            {Array.isArray(this.props.description) ? 
              this.props.description.map((desc) => <p className='collapse__list' key={desc}>{desc}</p>)
            :
              this.props.description
            }
          </div>
        }
      </div>
    )
  }
}

export default Collapse;