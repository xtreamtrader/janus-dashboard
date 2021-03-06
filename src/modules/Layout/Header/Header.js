import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

import block from '../../../helpers/bem-cn'
import Nav from '../Nav/Nav'
import Icon from '../../../components/Icon/Icon'
import Tooltip from '../../../components/Tooltip/Tooltip'

import './Header.css'

const config = window.MAIN_CONFIG

const b = block('j-header')

const propTypes = {
  logout: PropTypes.func.isRequired,
  user: PropTypes.string.isRequired
}

const Header = ({ logout, user }) => {
  if (user) {
    return (
      <header className={b()}>
        <div className={b('col', { left: true })()}>
          <Link to='/'>
            <span className={b('logo')()} />
          </Link>
        </div>
        <div className={b('col', { middle: true })()}>
          <Nav />
        </div>
        <div className={b('col', { right: true })()}>
          <React.Fragment>
            {
              config.gateway.admin_url && (window.localStorage.admin_url !== config.gateway.admin_url) &&
                <div className={b('warning')()}>
                  <Tooltip label={<Icon type='warning' />}>
                    Currently connected to non-default Janus backend.
                  </Tooltip>
                </div>
            }
            {
              user &&
              <div className={b('user')()}>
                <div className={b('user-name')()}>
                  {user}
                  <div className={b('user-menu')()} onClick={logout}>Logout</div>
                </div>
              </div>
            }
          </React.Fragment>
        </div>
      </header>
    )
  }

  return (
    <header className={b()} />
  )
}

Header.propTypes = propTypes

export default Header
