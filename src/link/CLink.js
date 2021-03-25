import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

import Link from 'next/link';
import { useRouter } from 'next/router';
import {matchPath} from '../breadcrumb/CBreadcrumbRouter';


//component - CoreUI / CLink
const CLink = props => {

  const {
    className,
    //
    innerRef,
    active,
    href,
    onClick,
    disabled,
    ...rest
  } = props

  const to = rest ? rest.to : null
  const click = e => {
    if ((!href && !to) || href === '#') {
      e.preventDefault()
    }
    !disabled && onClick && onClick(e)
  }

  // render

  let classes = classNames(
    active && 'active',
    disabled && 'disabled',
    className
  )

    const NavLink = ({ description = "link", activeClassName = "active", ...props }) => {
        const { asPath, pathname } = useRouter();
         let childClassName ='';
        // try {
        //     const child = Children.only(children)
        //     childClassName = child.props.className || ''
        // }catch{
        //
        // }


        // pages/index.js will be matched via props.href
        // pages/about.js will be matched via props.href
        // pages/[slug].js will be matched via props.as

        const isActive = (asPath === props.href || asPath === props.as);
        const className =isActive
                ? `${childClassName} ${activeClassName || 'active'}`.trim()
                : childClassName

        return (
            <Link {...props}>
                {/*{React.cloneElement(child, {*/}
                    {/*className: className || null,*/}
                {/*})}*/}

                <a style={{textDecoration:"none"}} className={className || null}>{description}</a>
            </Link>
        )
    }

    NavLink.propTypes = {
        activeClassName: PropTypes.string,
    }
    const escapedPath = to;
    if(to){
        const router = useRouter();
        const escapedPath =
            to && to.replace(/([.+*?=^!:${}()[\]|/\\])/g, "\\$1");

        //to = encodeURIComponent(to) //for dynamic routes segments

        const match = escapedPath
            ? matchPath(router.pathname, {
                path: escapedPath,
                exact:false,
                sensitive:false,
                strict:false
            })
            : null;

        const isActive = match ||
            (router.pathname === escapedPath || router.pathname === escapedPath);

         classes = classNames(
            isActive && 'active',
            disabled && 'disabled',
            className
        )
    }

  return to ? (
    <NavLink
      href = {escapedPath}
//      as = {escapedPath}
      activeClassName={rest.activeClassName || 'active'}
      description={"link"}
      className={classes}
      onClick={click}
      ref={innerRef}
    />
  ) : (
    <a
      href={href || '#'}
      className={classes}
      rel={rest.target === '_blank' ? 'noopener norefferer' : null}
      {...rest}
      onClick={click}
      ref={innerRef}
    />
  )
}

CLink.propTypes = {
  //
  innerRef: PropTypes.oneOfType([PropTypes.object, PropTypes.func]),
  active: PropTypes.bool,
  href: PropTypes.string,
  onClick: PropTypes.func,
  disabled: PropTypes.bool,
  activeClassName: PropTypes.string, //use like: <CLink to="/faq" activeClassName="selected">
  className: PropTypes.oneOfType([PropTypes.string, PropTypes.array, PropTypes.object]),
  to: PropTypes.oneOfType([PropTypes.object, PropTypes.string, PropTypes.func])
};

// CLink.sortAttributes = (attributesToSort) => {
//   const attributes = {}
//   const linkProps = {}
//   Object.entries(attributesToSort || {}).forEach(([key, value]) => {
//     if (Object.keys(CLink.propTypes).includes(key)) {
//       linkProps[key] = value
//     } else {
//       attributes[key] = value
//     }
//   })
//   return { linkProps, attributes }
// }

export default CLink
