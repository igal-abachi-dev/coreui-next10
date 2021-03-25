import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import  CBreadcrumb  from './CBreadcrumb';
import  CBreadcrumbItem  from './CBreadcrumbItem';
import { pathToRegexp } from "path-to-regexp";
import Link from 'next/link';
import { useRouter } from 'next/router';

//component - CoreUI / CBreadcrumbRouter
const getPaths = pathname => {
  const paths = ['/']
  if (pathname === '/') return paths;
  pathname.split('/').reduce((prev, curr) => {
    const currPath = `${prev}/${curr}`
    paths.push(currPath)
    return currPath
  })
  return paths
}


//from react-router-dom: (compilePath, matchPath)
const cache = {};
const cacheLimit = 10000;
let cacheCount = 0;

const compilePath = (path, options) => {
    const cacheKey = `${options.end}${options.strict}${options.sensitive}`;
    const pathCache = cache[cacheKey] || (cache[cacheKey] = {});

    if (pathCache[path]) return pathCache[path];

    const keys = [];
    const regexp = pathToRegexp(path, keys, options);
    const result = { regexp, keys };

    if (cacheCount < cacheLimit) {
        pathCache[path] = result;
        cacheCount++;
    }

    return result;
}

export const matchPath = (pathname, options = {}) => {
    if (typeof options === "string" || Array.isArray(options)) {
        options = { path: options };
    }

    const { path, exact = false, strict = false, sensitive = false } = options;

    const paths = [].concat(path);

    return paths.reduce((matched, path) => {
        if (!path && path !== "") return null;
        if (matched) return matched;

        const { regexp, keys } = compilePath(path, {
            end: exact,
            strict,
            sensitive
        });
        const match = regexp.exec(pathname);

        if (!match) return null;

        const [url, ...values] = match;
        const isExact = pathname === url;

        if (exact && !isExact) return null;

        return {
            path, // the path used to match
            url: path === "/" && url === "" ? "/" : url, // the matched portion of the URL
            isExact, // whether or not we matched exactly
            params: keys.reduce((memo, key, index) => {
                memo[key.name] = values[index];
                return memo;
            }, {})
        };
    }, null);
}


const CBreadcrumbRouteItem = ({name, currPath}, fullCurrPath) => {
  if (currPath === fullCurrPath) {
    return <CBreadcrumbItem key={currPath} active>{name}</CBreadcrumbItem>
  } else {
    return <CBreadcrumbItem key={currPath}>
      <Link href={encodeURIComponent(currPath)}>
        {/*{name}*/}
        <a>{name}</a>
      </Link>
    </CBreadcrumbItem>
  }
}

const CBreadcrumbRouter = props => {

  const {
    className,
    innerRef,
    routes,
    ...attributes
  } = props

  let items = null
  if (routes) {
    const router = useRouter();
    const currPath = router.pathname
    const paths = getPaths(currPath)

    const currRoutes = paths.map(currPath => {
      const route = routes.find(route => matchPath(currPath, {
        path: route.path,
        exact: route.exact
      }))
      return { ...route, currPath }
    }).filter(route => route && route.name)

    items = currRoutes.map(route => {
      return CBreadcrumbRouteItem(route, currPath)
    })
  }


  //render
  const classes = classNames(className)

  return (
    <CBreadcrumb
      className={classes}
      {...attributes}
      ref={innerRef}
    >
      {items}
    </CBreadcrumb>
  )
}

CBreadcrumbRouter.propTypes = {
  className: PropTypes.oneOfType([PropTypes.string, PropTypes.array, PropTypes.object]),
  innerRef: PropTypes.oneOfType([PropTypes.object, PropTypes.func]),
  routes: PropTypes.array
}

export default CBreadcrumbRouter
