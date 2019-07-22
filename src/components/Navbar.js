import React, { Component } from 'react'

const pages = ['Home', 'Projects', 'Contact']
class Navbar extends Component {
  constructor(props) {
    super(props)

    this.state = {
      windowPosition: 0,
    }
  }

  componentDidMount() {
    window.addEventListener('scroll', this.listenToScroll)
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.listenToScroll)
  }

  listenToScroll = () => {
    this.setState({windowPosition: Math.floor(window.pageYOffset / window.innerHeight * 1.1)})
  }

  render() {
    const { windowPosition } = this.state
    return (
      <div className="navbar">
        <div className="selector" data-position={windowPosition + 1}>
        </div>
        <ul>
          {pages.map(page => <li key={page}><a href={`#${page.toLowerCase()}`}><p>{page}</p></a></li>)}
        </ul>
      </div>
    )
  }
}

export default Navbar