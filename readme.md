# Super Simple Cookie Bar

Version 1.0.0

## Summary

Simple Javascript plugin for generating a cookie bar easily 

## Author

@louisho5

## Installation

To include the plugin in your code:

	<script src="cookieBar.js"></script>
	
or

	<script src="cookieBar.min.js"></script>


## Requirements/Browsers

Works in IE9+, Chrome 14+, Safari 4+, Firefox 3.0+, Opera 10+.

## Code Example

**index.html**:

	<div id="cookieBar"></div>
	
	<script src="cookieBar.min.js"></script>
	<script>
	new cookieBar();
	</script>

## Parameters

There are totally 4 functions are provided in this plugin:

is used to load external HTML file as html format into your element.

	new cookieBar({
		selector: "#cookieBar",
		message: 'We use cookies to ensure that we give you the best experience on our website. Please find more information <a href="#" target="_blank">here</a>.',
		btnText: 'ACCEPT',
		color: '#666',
	});		

## License

This plugin is under the MIT license.