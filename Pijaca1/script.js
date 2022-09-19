let zbir = 0;

function addToCart(element){

	
	let mainEl = element.closest('.single-item');
	let price = mainEl.querySelector('.price').innerText;
	let name = mainEl.querySelector('h3').innerText;
	let quantity = mainEl.querySelector('input').value;
	let cartItems = document.querySelector('.cart-items');


	if(parseInt(quantity) > 0){

		price = price.substring(1);
		price = parseInt(price);
		let total = price * parseInt(quantity);
		
		zbir += total;

		cartItems.innerHTML += `<div class="cart-single-item">
									<h3>${name}</h3>
									<p>$${price} x ${quantity} = $<span>${total}</span></p>
									<button class="main-cta-btn" onclick="praznjenjeKorpe(this)">Ponisti</button>
						       </div>`
	
			document.querySelector('.total').innerText = `Total: $${zbir}`;
			
		
		}else{
			alert('Odaberi kolicinu');
		}
}

function praznjenjeKorpe(element){
   let mainEl = element.closest('.cart-single-item');
   let price = mainEl.querySelector('p span').innerText;
   price = parseInt(price);

   zbir -= price;

   document.querySelector('.total').innerText = `Total: $${zbir}`;

   mainEl.remove();
}