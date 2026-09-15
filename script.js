const CART_KEY='astellarCart';
let cart=JSON.parse(localStorage.getItem(CART_KEY)||'[]');
function save(){localStorage.setItem(CART_KEY,JSON.stringify(cart));updateCount();}
function updateCount(){document.querySelectorAll('#count').forEach(e=>e.textContent=cart.length);}
function add(name,price,colour,size){cart.push({name,price,colour,size});save();toast(name+' added to cart');}
function removeItem(i){cart.splice(i,1);save();renderCart();}
function toast(msg){const t=document.getElementById('toast');if(!t)return;t.textContent=msg;t.classList.add('show');setTimeout(()=>t.classList.remove('show'),1800);}
function renderCart(){
 const box=document.getElementById('cartbox');if(!box)return;
 if(!cart.length){box.innerHTML='<p style="color:#aaa">Your cart is empty.</p>';return;}
 const total=cart.reduce((s,x)=>s+Number(x.price||0),0);
 box.innerHTML=cart.map((x,i)=>`<div class="cart-row"><div><b>${x.name}</b><div style="color:#aaa;margin-top:6px">${x.colour?x.colour+' / '+x.size+' • ':''}$${x.price} AUD</div></div><button class="remove" onclick="removeItem(${i})">REMOVE</button></div>`).join('')+
 `<div class="total">TOTAL: $${total} AUD</div><a class="btn" href="checkout.html">CHECKOUT</a>`;
}
updateCount();renderCart();
