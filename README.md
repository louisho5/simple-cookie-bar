# Super Simple Cookie Bar

Version 1.0.0

## Summary

Generate a simple cookie bar in single line of code. 

<strong>Super lightweight, only 3KB</strong><br>
<strong>Responsive design</strong><br>
<strong>Minimal and ease to use</strong><br>

## Author

@louisho5

## Installation

To include the plugin in your code:

	<script src="cookieBar.js"></script>
	
or

	<script src="cookieBar.min.js"></script>


## Requirements/Browsers

Works in IE11+, Edge 12+, Chrome 29+, Safari 9+, Firefox 28+.

## Code Example

**index.html**:

```html

<div id="cookieBar"></div>

<script src="cookieBar.min.js"></script>
<script>
    new cookieBar();
</script>

```

## Parameters

There are 4 optional parameters in this plugin:

```js script

new cookieBar({
    selector: "#cookieBar",
    message: 'We use cookies to ensure that we give you the best experience on our website. Please find more information <a href="#" target="_blank">here</a>.',
    button: 'ACCEPT',
    theme: '#666',
    expire: 24	//By default it will expire in 24 hours, you can set your own duration e.g. 24*7 for 7 days
});		

```

## License

This plugin is under the MIT license.
