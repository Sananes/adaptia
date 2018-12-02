import React from 'react'
import Reveal from 'react-reveal/Reveal'
import { Link } from 'gatsby'

// Assets
import { ReactComponent as Logo } from '../../images/logo.svg'
import Menu from '../Menu/menu'
import SVG from '../svg'
import './header.scss'

class Header extends React.Component {
  constructor(props) {
    super(props)

    this.menuRef = React.createRef()

    this.state = {
      visible: false
    }
  }

  toggleMenu = () => {
    this.setState({visible: !this.state.visible})
  }

  componentDidMount () {
    this.setState({visible: false})
  }

  render() {
    const {visible} = this.state

    return(
      <header className="header">
        <div className="container">
          <Reveal effect="fadeInUp" delay={500}>
            <h1 style={{ margin: 0 }}>
              <Link
                to="/">
                <Logo />
              </Link>
            </h1>
          </Reveal>
          <Reveal effect="fadeInUp" delay={200}>
            <button onClick={this.toggleMenu} className="header-menu" ref={this.menuRef} href="#">
              <SVG icon="menu" />
            </button>
          </Reveal>
        </div>
        <Menu visible={visible} toggleMenu={this.toggleMenu} />
      </header>
    )
  }

}
export default Header
