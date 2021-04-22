import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import CLink from '../link/CLink'

//component - CoreUI / CHeaderNavLink

const CHeaderNavLink = props => {

  const {
    className,
    //
    innerRef,
      text,
    ...rest
  } = props

  //render

  const classes = classNames(
    className,
    'c-header-nav-link'
  )

  return (
    <CLink className={classes} text={text} {...rest} innerRef={innerRef} />
  )

}

CHeaderNavLink.propTypes = {
  className: PropTypes.oneOfType([PropTypes.string, PropTypes.array, PropTypes.object]),
  //
  innerRef: PropTypes.oneOfType([PropTypes.object, PropTypes.func]),
      text:PropTypes.string
};


export default CHeaderNavLink
