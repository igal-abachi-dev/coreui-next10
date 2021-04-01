# CoreUI React components library

[![Tweet](https://img.shields.io/twitter/url/http/shields.io.svg?style=social)](https://twitter.com/intent/tweet?text=CoreUI%20-%20Free%20Vue%20Admin%20Template%20&url=http://coreui.io/react/&hashtags=bootstrap,admin,template,dashboard,panel,free,angular,react,vue)  
[![npm_latest][npm-coreui-react-badge-latest]][npm-coreui-react]
[![npm next][npm-coreui-react-badge-next]][npm-coreui-react]
[![NPM downloads][npm-coreui-react-download]][npm-coreui-react]  
[![Build](https://github.com/coreui/coreui-react/actions/workflows/project-check.yml/badge.svg)](https://github.com/coreui/coreui-react/actions/workflows/project-check.yml)
[![Daily check](https://github.com/coreui/coreui-react/actions/workflows/daily-project-check.yml/badge.svg)](https://github.com/coreui/coreui-react/actions/workflows/daily-project-check.yml)  
[![react](https://img.shields.io/badge/react-^17.0.1-lightgrey.svg?style=flat-square&logo=react)][coreui]

[npm-coreui-react-download]: https://img.shields.io/npm/dm/@coreui/react.svg?style=flat-square
[npm-coreui-react]: https://www.npmjs.com/package/@coreui/react
[npm-coreui-react-badge-latest]: https://img.shields.io/npm/v/@coreui/react/latest?style=flat-square
[npm-coreui-react-badge-next]: https://img.shields.io/npm/v/@coreui/react/next?style=flat-square
[coreui]: https://coreui.io/react

##### @coreui/react v3 for [CoreUI 3 for NEXT.js](https://coreui.io/react/)

### demo:
next project:
https://github.com/igal-abachi-dev/next10-coreui-test

admin template:
https://github.com/coreui/coreui-free-react-admin-template


### Installation

Before installation you need to install [node and npm](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm) on your machine.
```shell

 local:
copy coreui-nextjs-3.4.6.tgz from here to near project files

npm install file:coreui-nextjs-3.4.6.tgz

 from cdn:
npm install http://0.0.0.0/coreui-nextjs-3.4.6
```

coreui-icons-nextjs-1.1.0.tgz , from here:
https://github.com/igal-abachi-dev/coreui-icons-next10



coreui-nextjs-3.4.6.tgz

https://github.com/igal-abachi-dev/coreui-next10


### usage:
inside index.tsx

```
import {
  CBreadcrumbRouter,
  CContainer,
  CHeader,
  CSidebar
} from '@coreui/nextjs';


  <div className={'c-app  c-default-layout'}>

            <CBreadcrumbRouter
                className="border-0 c-subheader-nav m-0 px-0 px-md-3"
                routes={routes}
            />
            {/* <CSidebar/>*/}

            <div className={'c-wrapper c-fixed-components'}>
                <Head>
                    <title>Create Next App</title>
                    <link rel="icon" href="/favicon.ico"/>
                </Head>
                {/*<CHeader withSubheader>*/}

                <div className={'c-body'}>
                    <main className={'c-main'}>
                        <CContainer fluid>
                            <div className={'fade-in'}>
```



also in globals.scss:

```
@import "~@coreui/coreui/dist/css/coreui.min.css";
@import "~@coreui/nextjs/es/styles.css";
```

default styles in globals.scss:
```

html,
body {
	padding: 0;
	margin: 0;
	font-family:
		-apple-system,
		BlinkMacSystemFont,
		"Segoe UI",
		Roboto,
		Oxygen,
		Ubuntu,
		Cantarell,
		"Fira Sans",
		"Droid Sans",
		"Helvetica Neue",
		sans-serif;
}


a {
	text-decoration: none;
	background-color: transparent;
	color: #321fdb
}

@media (hover: hover),(-ms-high-contrast: none) {
	a:hover {
		text-decoration: underline;
		color: #321fdb
	}
}

a:not([href]) {
	color: inherit;
	text-decoration: none
}

@media (hover: hover),(-ms-high-contrast: none) {
	a:not([href]):hover {
		color: inherit;
		text-decoration: none
	}
}

* {
	box-sizing: border-box;
}

html {
	font-family: sans-serif;
	line-height: 1.15;
	-webkit-text-size-adjust: 100%;
	-webkit-tap-highlight-color: rgba(0, 0, 21, 0)
}


body {
	padding: 0;
	margin: 0;
	overflow-x: hidden;
	font-size: .875rem;
	font-weight: 400;
	line-height: 1.5;
	text-align: left;
	color: #3c4b64;
	background-color: #ebedef
}
```
### differences between coreui/nextjs & coreui/react:

1) affected components for compatibility with next:

CDataTable.js 

CScrollbar.js

CToast.js

CTooltip.js

(used css modules inside node_modules , now refs: there is exported styles.css for all needed styles)



2) used react-router-dom , now uses next/router and next/link:

CBreadcrumbRouter.js 

CLink.js

CSidebarNavItem.js

(i used some logic from NavLink component, and react-router-dom matchPath / path-to-regexp)



3) had circular reference with index.js, fixed with local refs:

CProgress.js

CProgressBar.js

CSidebarNavDropdown.js


4) used useLayoutEffect() now uses useEffect() in

CDropdownMenu.js
  





###### Over 90 bootstrap based React components and directives

##### For library guide please visit our [Documentation site »](https://coreui.io/react/docs)

Check out demo of components usage: [CoreUI React Admin Template »](https://coreui.io/react/demo)

![Template](https://coreui.io/images/github/vue-free-template-3.gif)


#### Styling

Components are styled using @coreui/coreui CSS library, but you can use them also with bootstrap CSS library. That is possible because @coreui/coreui library is compatible with bootstrap, it just extends its functionalities. The only exception is custom CoreUI components, which don't exist in the Bootstrap ecosystem (template components, callout, switch).

Styles have to be imported separately! Import [CoreUI](https://github.com/coreui/coreui) CSS library (recommended), or [Bootstrap](https://getbootstrap.com/) library

Installation:
```shell
npm install @coreui/coreui
```

Styles usage:
```scss
@import "~@coreui/coreui/scss/coreui";
```

### Changelog
See the GitHub [release history](https://github.com/coreui/coreui-react/releases).

### Contributing
See [CONTRIBUTING.md](https://github.com/coreui/coreui-react/blob/master/CONTRIBUTING.md).

### Credits
Some design ideas and solutions in this library inspired by [reactstrap library](https://reactstrap.github.io/)


---
- bootstrapped with [nwb](https://github.com/insin/nwb) toolkit

#### `npm run` scripts

`package.json` is configured with `"scripts"` we can use with `npm run` while developing the project.

Command | Description |
--- | ---
`npm test` | run tests
`npm run test:coverage` | run tests and produce a code coverage report in `coverage/`
`npm run test:watch` | start a test server and re-run tests on every change
`npm run build` | prepare for publishing to npm
`npm run clean` | delete built resources

#### see also:
- [Developing React Components and Libraries with nwb](https://github.com/insin/nwb/blob/master/docs/guides/ReactComponents.md#developing-react-components-and-libraries-with-nwb)
