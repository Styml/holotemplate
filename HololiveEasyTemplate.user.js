// ==UserScript==
// @name         Hololive Easy Template
// @namespace    http://tampermonkey.net/
// @version      0.3
// @description  Trying
// @author       TellowKrinkle
// @match        https://hot-potato.reddit.com/embed*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=reddit.com
// @grant        none
// ==/UserScript==
if (window.top !== window.self) {
	window.addEventListener('load', () => {
		const opacity = 1;
		const camera = document.querySelector("mona-lisa-embed").shadowRoot.querySelector("mona-lisa-camera");
		const canvas = camera.querySelector("mona-lisa-canvas");
		const container = canvas.shadowRoot.querySelector('.container');
		function addImage(src, posX, posY) {
			let img = document.createElement("img");
			img.onload = () => {
				const width = img.width;
				const height = img.height;
				const canvas = document.createElement("canvas");
				canvas.width = width * 3;
				canvas.height = height * 3;
				canvas.style = `position: absolute; left: ${posX}px; top: ${posY}px; image-rendering: pixelated; width: ${width}px; height: ${height}px;`;
				const ctx = canvas.getContext("2d");
				ctx.globalAlpha = opacity;
				for (let y = 0; y < height; y++) {
					for (let x = 0; x < width; x++) {
						ctx.drawImage(img, x, y, 1, 1, x * 3 + 1, y * 3 + 1, 1, 1);
					}
				}
				container.appendChild(canvas);
			};
			img.src = src;
		}
		addImage("https://github.com/Styml/holotemplate/raw/main/templates/Further%20archives%20to%20our%20stable%20territory.png.1-1.png", 0, 0);
		// addImage("https://cdn.discordapp.com/attachments/960048602540040202/960107554757808188/RightArea.png", 1332, 880);
		addImage("https://github.com/Styml/holotemplate/raw/main/templates/FLARE-1365_%20869.png", 1365, 869);
	}, false);
}
