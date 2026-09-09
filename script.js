
let cart=JSON.parse(localStorage.getItem('astellar-cart')||'[]');
function save(){localStorage.setItem('astellar-cart',JSON.stringify(cart));updateCount();}
function updateCount(){document.querySelectorAll('#count').forEach(e=>e.textContent=cart.length);}
function add(name,price){cart.push({name,price});save();toast(name+' added to cart');}
function removeItem(i){cart.splice(i,1);save();renderCart();}
function toast(msg){let t=document.getElementById('toast');if(!t)return;t.textContent=msg;t.classList.add('show');setTimeout(()=>t.classList.remove('show'),1800);}
function renderCart(){
 let box=document.getElementById('cartbox');if(!box)return;
 if(!cart.length){box.innerHTML='<p style="color:#aaa">Your cart is empty.</p>';return;}
 let total=cart.reduce((s,x)=>s+x.price,0);
 box.innerHTML=cart.map((x,i)=>`<div class="cart-row"><div><b>${x.name}</b><div style="color:#aaa;margin-top:6px">$${x.price} AUD</div></div><button class="remove" onclick="removeItem(${i})">REMOVE</button></div>`).join('')+
 `<div class="total">TOTAL: $${total} AUD</div><a class="btn" href="checkout.html">CHECKOUT</a>`;
}
updateCount();renderCart();
