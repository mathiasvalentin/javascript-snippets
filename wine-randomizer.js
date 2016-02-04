// The wine randomizer ------------>
		
		this.countdown = 100;
		
		let wines = [
			'Molly Dookler - The Maitre',
			'Molly Dookler - Two left feet',
			'Poggio Scalett'
		]
		
		TweenLite.to(this, 5, {delay: 2, countdown:0, ease:Quad.easeOut, onUpdate:()=>{
		  $('h1').text(Math.round(this.countdown));
		}, onComplete:()=>{
			let random = Math.floor(Math.random() * 3);
			$('h1').text(wines[random]);
		}})
		TweenLite.to($('h1'), 10, {delay:2, scale:1.5})

	// end --------------------------
