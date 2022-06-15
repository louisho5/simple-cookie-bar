/*!
 * Simple JS plugin for generating a basic cookie consent notice easily
 *
 * Copyright (c) 2022 @louisho5
 * Under the MIT license.
 *
 * @version 1.0.0
 */

var cookieBar = function (options) {
	this.options = options;
	if (this.options == undefined) {
		this.options = {}
	}
	// Set options to default value when not set manually
	if (this.options.selector == undefined) {
		this.options.selector = '#cookieBar';
	}
	if (this.options.message == undefined) {
		this.options.message = 'By using our site you agree to our use of cookies to give you the best experience on our website.';
	}
	if (this.options.button == undefined) {
		this.options.button = 'GOT IT';
	}
	if (this.options.theme == undefined) {
		this.options.theme = '#666';
	}
	if (this.options.expire == undefined) {
		this.options.expire = 24;
	}
	var ccExpire = this.options.expire;
	var ccbar = document.querySelector(this.options.selector);
	var ccbarMsgBox = document.createElement('div');
	ccbarMsgBox.classList.add("cc-bar-col");
	ccbarMsgBox.innerHTML = this.options.message;
	ccbar.appendChild(ccbarMsgBox);
	var ccbarBtnBox = document.createElement('div');
	ccbarBtnBox.classList.add("cc-bar-col");
	ccbarBtnBox.innerHTML = '<a class="cc-bar-btn" href="#">' + this.options.button + '</a>';
	ccbar.appendChild(ccbarBtnBox);

	// Check if cookie has been accepted
	window.onload = function () {
		if (getCookie("cc-bar-cookies") != "accepted") {
			ccbar.style.display = "flex";
			ccbar.style.animation =
				"cc-bar-fadeIn 0.5s ease both";
		}
		// Update cookies when clicked button
		ccbarBtnBox.querySelector(".cc-bar-btn").addEventListener('click', function (e) {
			e.preventDefault();
			setCookie("cc-bar-cookies", "accepted", ccExpire);
			ccbar.style.animation =
				"cc-bar-fadeOut 0.5s ease both";
			setTimeout(function () {
				ccbar.style.display = "none";
			}, 500);
		});
	}

	// Cookies Controls
	var setCookie = function (name, value, expireHrs) {
		var d = new Date();
		d.setTime(d.getTime() + expireHrs * 60 * 60 * 1000);
		document.cookie = name + "=" + value + ";" + "expires=" + d.toUTCString() + ";path=/";
	}

	var getCookie = function (name) {
		function escape(s) {
			return s.replace(/([.*+?\^$(){}|\[\]\/\\])/g, "\\$1");
		}
		var match = document.cookie.match(
			RegExp("(?:^|;\\s*)" + escape(name) + "=([^;]*)")
		);
		return match ? match[1] : null;
	}

	document.head.insertAdjacentHTML("beforeend", "<style>"
	+ this.options.selector + " {\
		display: none;\
		position: fixed;\
		left: 0;\
		bottom: 0;\
		z-index: 1;\
		align-items: center;\
		flex-direction: row;\
		justify-content: space-between;\
		color: black;\
		background-color: white;\
		font-family: inherit;\
		font-size: 14px;\
		line-height: 1.5;\
		padding: 15px 15px;\
		margin: 15px;\
		width: calc(100% - 30px);\
		box-shadow: 0 -1px 10px 0 rgba(170, 170, 170, 0.3);\
		box-sizing: border-box;\
		border: 3px solid " + this.options.theme + ";\
		border-radius: 7px;\
	}"
	+ this.options.selector + " .cc-bar-col {\
		width: auto;\
	}"
	+ this.options.selector + " .cc-bar-col .cc-bar-btn {\
		display: block;\
		font-size: 14px;\
		padding: 7px 15px;\
		margin: 0 0 0 10px;\
		color: white;\
		background-color: " + this.options.theme + ";\
		text-decoration: none;\
		white-space: nowrap;\
		text-align: center;\
	}\
	@keyframes cc-bar-fadeIn {\
		from { opacity:0; transform:translateY(50px); }\
		to { opacity:1; transform:translateY(0); }\
	}\
	@keyframes cc-bar-fadeOut {\
		from { opacity:1; transform:translateY(0); }\
		to { opacity:0; transform:translateY(50px); }\
	}\
	@media only screen and (max-width: 991px) {"
		+ this.options.selector + " {\
			font-size: 16px;\
			flex-direction: column;\
			margin: 0;\
			width: 100%;\
			border-radius: 0;\
		}"
		+ this.options.selector + " .cc-bar-col {\
			width: 100%;\
		}"
		+ this.options.selector + " .cc-bar-col .cc-bar-btn {\
			font-size: 16px;\
			margin: 10px 0 0 0;\
		}\
	}\
	</style>")
}
