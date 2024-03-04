<h1 align='center'> React Animated Menu-icon</h1>

A customizable React Menu-icon. You can choose the size, animation and color of the icon.

## Install

``` npm install react-animated-menuicon ```

## Imports

``` import { MenuIcon, useMenuIcon } from 'react-animated-menuicon' ```

- useMenuIcon is a hook that must be bound to MenuIcon
- MenuIcon is the component to be used in JSX. It expects all the methods given my useMenuIcon

## Full example

```
import { MenuIcon, useMenuIcon } from 'react-animted-menuicon';

function Navbar() {
  const methods = useMenuIcon({
    size: 'md',
    color: '#008080',
    type: 'spin'
  });

  return (
    <nav>
      <MenuIcon {...methods} />
    </nav>
  );
}
```

## How to use

Hook -
```
const methods = useMenuIcon({}); // you must pass in an empty {} for all base properties

```
Component -
```
<MenuIcon {...methods} />
```

## Properties

```
  const { open, toggleMenu } = methods;
```

open returns the boolean value state of the menu icon // open === true || false

toggleMenu is a function that lets you manually set the state of open // () => void

<table>
  <tr>
    <th colspan=2>Available Sizes</th>
  </tr>
  <tr>
    <td>sm</td>
    <td>1rem</td>
  </tr>
  <tr>
    <td>md</td>
    <td>2rem</td>
  </tr>
  <tr>
    <td>lg</td>
    <td>2.5rem</td>
  </tr>
  <tr>
    <td>xl</td>
    <td>3rem</td>
  </tr>
  <tr>
    <td>custom</td>
    <td>1em</td>
  </tr>
</table>

```
  const methods = useMenuIcon({
    size: 'sm'
  })
```

Sizes expects a string value to be passed in. If the sm-xl sizes are a bit different than whats needed, use the custom property and wrap the MenuIcon component in a HTML tag with the correct text size property.

### Custom example: 
```
  const methods = useMenuIcon({ size: 'custom' });

  <span style={{ fontSize: '23px' }}>
    <MenuIcon {...methods} /> // will have a width/height of 23px
  </span>
```

<table>
  <tr>
    <th>Available Types</th>
  </tr>
  <tr>
    <td>base</td>
  </tr>
  <tr>
    <td>spin</td>
  </tr>
</table>

```
  const methods = useMenuIcon({
    type: 'spin'
  })
```

Currently, only two animations are available: base and spin. If no value is passed, the component will default to base.

<table>
  <tr>
    <th>Available Colors</th>
  </tr>
  <tr>
    <td>any</td>
  </tr>
</table>

```
  const methods = useMenuIcon({
    color: 'red'
  })
```

Colors expects any valid color, in any form. If you're using hexcode, please make sure to include the #. If no valid color is passed in, it will default to black (#000000).
