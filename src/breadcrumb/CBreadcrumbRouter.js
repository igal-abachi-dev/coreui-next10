import React, {useEffect, useState} from 'react';
import PropTypes from 'prop-types'
import classNames from 'classnames'
import CBreadcrumb from './CBreadcrumb';
import CBreadcrumbItem from './CBreadcrumbItem';
import Link from 'next/link';
import {useRouter} from 'next/router';

//component - CoreUI / CBreadcrumbRouter


const CBreadcrumbRouteItem = ({name, href}, fullCurrPath) => {
    if (href === fullCurrPath) {
        return <CBreadcrumbItem key={href} active>{name}</CBreadcrumbItem>
    } else {
        {/*replace [] with data from query*/
        }
        {/*<Link href={`/blog/${encodeURIComponent(post.slug)}`}/>*/
        }
        {/*{name}*/
        }
        return <CBreadcrumbItem key={href}>
            <Link href={href}>
                <a>{name}</a>
            </Link>
        </CBreadcrumbItem>
    }
}

const CBreadcrumbRouter = props => {


    const {
        className,
        innerRef,
        ...attributes
    } = props

    const [routes, setRoutes] = useState(null);

    const router = useRouter();
//https://github.com/NiklasMencke/nextjs-breadcrumbs/blob/main/src/index.js
    useEffect(() => {
        if (router) {
            const linkPath = router.asPath.split('/');
            if(router.asPath == '/'){
                linkPath.shift();
            }

            const pathArray = linkPath.map((path, i) => {
                if (path == null || path.length === 0) {

                    return {name: 'Home', href: '/'};
                }

                let href = linkPath.slice(0, i + 1).join('/');
                if(href[0] != '/'){
                    href = '/'+href
                }
                return {name: path, href: href};
            });

            setRoutes(pathArray);
        }
    }, [router]);

    let items = null;
    if (routes) {
        items = routes.map(route => {
            let fullPath = router.asPath;
            let path = route.href;

            let id = router.query.id;

            //getInitialProps
            /*
            Pages that are statically optimized by Automatic Static Optimization will be hydrated without their route parameters provided, i.e query will be an empty object ({}).

            After hydration, Next.js will trigger an update to your application to provide the route parameters in the query object.
            */
            return CBreadcrumbRouteItem(route, fullPath)
        })
    }
    else {
//        return null;

        items = [new CBreadcrumbRouteItem({name: 'Home', href: '/'}, router.asPath)];
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
