let logInToggle = document.querySelector('#logInToggle')
let signUpToggle = document.querySelector('.signUpToggle');
let signInToggle = document.querySelector('.signInToggle');
let logInDiv = document.querySelector('.logInDiv');
let signUpDiv = document.querySelector('.signUpDiv');
let MainLogInDiv = document.getElementById('logIn');

let locationSec = document.getElementById('locationSec');
let landingPage = document.getElementById('landingPage');
let locationSes = document.getElementById('locationSec');
let slider = document.getElementById('slider');
let learn = document.getElementById('learn');
let learnMore = document.getElementById('learnMore');
let productDetails = document.getElementById('productDetails');
let productModal = document.getElementById('productModal');
let closeModal = document.getElementById('closeModal');
let menuPage = document.getElementById('menuPage');
let secondPage = document.getElementById('secondPage');
let headerDiv = document.getElementById('headerDiv');
let formDiv = document.getElementById('formDiv');
let addFoodBtn = document.getElementById('addFoodBtn');
let form = document.querySelector('.productForm');
let closeForm = document.querySelector('.closeForm');
let imageUrlForm = document.getElementById('imageUrl');
let imagePreForm = document.querySelector('.imgPreview');
let menuCart = document.querySelector('.menuCart')
let cartDiv = document.getElementById('cartDiv');
let checkOutBtn = document.getElementById('checkOutBtn')
let menuCheckOut = document.querySelector('.menuCheckOut')
let returnToCart = document.querySelector('.returnToCart')
let closeCart = document.querySelector('.closeCart');
let closeCheckOut = document.getElementById('closeCheckOut')
let checkOutDiv = document.getElementById('checkOutDiv')
let home2 = document.querySelector('.home2');
let menu = document.querySelectorAll('.menu');

//logIn
window.addEventListener('DOMContentLoaded', () => {
    MainLogInDiv.style.visibility = 'visible';
    menuPage.style.filter = 'blur(10px)';
    [menuCart,menuCheckOut,addFoodBtn,menuPage].forEach(loc => {
        loc.style.pointerEvents = 'none'
    })
})

signUpToggle.addEventListener('click', () => {
    signInToggle.style.transform = 'translateX(0%)';
    signUpDiv.style.transform = 'translateX(0%)';
})
signInToggle.addEventListener('click', () => {
    signInToggle.style.transform = 'translateX(100%)';
    signUpDiv.style.transform = 'translateX(100%)';
})

let signUpForm = document.getElementById('signUpForm');
let logInForm = document.getElementById('logInForm');

signUpForm.addEventListener('submit', async (e) => {
    e.preventDefault();

    let formData = new FormData(signUpForm);
    let obj = Object.fromEntries(formData.entries());

    let db = await fetch("http://localhost:3000/people", {
        method: 'POST',
        body: JSON.stringify(obj)
    });
    if(!db.ok){alert('user not update')}
    else{alert('user updated')};
})

logInForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    let user = Object.fromEntries(new FormData(logInForm).entries());

    let db = await fetch("http://localhost:3000/people");
    let users = await db.json();

    let foundUser = users.find(x => x.userName === user.userName);

    if (foundUser) {
        if(foundUser.password === user.password) {
            MainLogInDiv.style.visibility = 'hidden';
            menuPage.style.filter = 'blur(0)';
            [menuCart,menuCheckOut,addFoodBtn,menuPage].forEach(loc => {
                loc.style.pointerEvents = 'auto'
            });

            if(foundUser.userName === 'Morris') {
                addFoodBtn.style.visibility = 'visible';
            }else{
                addFoodBtn.style.visibility = 'hidden';
            }
        }else{
            alert('incorrect credentials');
        }
    }else{
        alert('user not registered');
    }
});


home2.addEventListener('click', () => {
    locationSec.style.transform = 'translateX(0)'
})
window.addEventListener('wheel', () => {
    landingPage.style.transform = 'translateY(50%) scale(0.98)';
    slider.style.transform = 'translateY(0%)';
});
learn.addEventListener('click', () => {
    landingPage.style.transform = 'translateY(0%) scale(1)';
    slider.style.transform = 'translateY(-100%)'
    landingPage.style.zIndex = '2';
    learnMore.style.visibility = 'visible';
    learnMore.style.transform = 'translateY(-50px)';
});
menu.forEach(menu => {
    menu.addEventListener('click', () => {
        locationSec.style.transform = 'translateX(100%)';
    })
})


const modalOpen = (invoker, element) => {
    invoker.addEventListener('click', () => {
        [productModal, formDiv, checkOutDiv, cartDiv].forEach(div => {
            if (div) div.style.visibility = 'hidden';
        })
        element.style.visibility = 'visible'
        menuPage.style.filter = 'blur(10px)';
        menuPage.style.pointerEvents = 'none';
    });
}
modalOpen(productDetails, productModal);
modalOpen(addFoodBtn, formDiv);
modalOpen(checkOutBtn, checkOutDiv);
modalOpen(menuCheckOut, checkOutDiv)

const modalClose = (invoker, element) => {
    invoker.addEventListener('click', () => {
        element.style.visibility = 'hidden'
        menuPage.style.filter = 'blur(0)';
        menuPage.style.pointerEvents = 'auto';
    });
}
modalClose(closeModal, productModal);
modalClose(closeForm, formDiv);
modalClose(closeCart, cartDiv);
modalClose(closeCheckOut, checkOutDiv);

returnToCart.addEventListener('click', () => {
    secondPage.scrollIntoView();
    menuPage.style.filter = 'blur(10px)';
    menuPage.style.pointerEvents = 'none';
    cartDiv.style.visibility = 'visible';
    checkOutDiv.style.visibility = 'hidden';
})

menuCart.addEventListener('click', () => {
    secondPage.scrollIntoView();
    menuPage.style.filter = 'blur(10px)';
    menuPage.style.pointerEvents = 'none';
    cartDiv.style.visibility = 'visible';
})

imageUrlForm.addEventListener('change', (e) => {
    imagePreForm.style.backgroundImage = `url(${e.target.value})`;
    console.log(`url(${e.target.value})`)
})

//product modal variables
let modalPicture = document.getElementById('modalPicture');
let modalHeading = document.getElementById('modalHeading');
let modalCuisine = document.getElementById('modalCuisine');
let modalIngredients = document.getElementById('modalIngredients');
let modalFoodInfo = document.getElementById('modalFoodInfo');
let modalFoodPrice = document.getElementById('modalFoodPrice');
let modalCart = document.getElementById('addToCart');


async function menuP () {
    let db = await fetch('http://localhost:3000/listings');
    let data = await db.json();

    for(let x of data) {
        let productCard = document.createElement('div');
        menuPage.appendChild(productCard);
        productCard.classList.add('productDetails');

        let productPic = document.createElement('div');
        productCard.appendChild(productPic);
        productPic.classList.add('productPic');
        productPic.style.backgroundImage = `url(${x.foodImg})`;

        let promo = document.createElement('div');
        productPic.appendChild(promo);
        promo.classList.add('promo');

        let pin = document.createElement('img');
        productPic.appendChild(pin)
        pin.classList.add('pin');
        pin.setAttribute('src', 'images/pin-angle.svg');

        let promoText = document.createElement('span');
        promo.appendChild(promoText);
        promoText.textContent = 'Under promo in 24hrs'

        let productDesc = document.createElement('div');
        productCard.appendChild(productDesc);
        productDesc.classList.add('productDesc');

        let productDescText = document.createElement('div');
        productDesc.appendChild(productDescText)

        let productdef = document.createElement('p');
        productDescText.appendChild(productdef)
        productdef.textContent = `${x.foodName}` 

        let productPrice = document.createElement('span');
        productDescText.appendChild(productPrice)
        productPrice.textContent = `ksh ${x.foodPrice}`

        let productCart = document.createElement('div');
        productDesc.appendChild(productCart)
        productCart.classList.add('cart')

        let cart = document.createElement('img');
        productCart.appendChild(cart);
        cart.setAttribute('src', 'images/bag.svg');

        productCart.addEventListener('click', async () => {
        let carted = {cart : true};
        let updated =await fetch(`http://localhost:3000/listings/${x.id}`,{
            method: 'PATCH',
            body: JSON.stringify(carted)
        })
        let respose = updated.json();
        if(respose){alert('product add to cart')}
        })

        console.log(`${x.foodNotes}`)
        let currentProduct = null; // Will hold the currently displayed product

        modalCart.addEventListener('click', async () => {
            if (!currentProduct) return;
            let carted = { cart: true };
            let updated = await fetch(`http://localhost:3000/listings/${currentProduct.id}`, {
                method: 'PATCH',
                body: JSON.stringify(carted),
                headers: {'Content-Type': 'application/json'} 
            });
            let response = await updated.json();
            alert('Product added to cart');
        });

        productPic.addEventListener('click', () => {
            productModal.style.visibility = 'visible';
            menuPage.style.filter = 'blur(10px)';
            menuPage.style.pointerEvents = 'none';

            modalPicture.style.backgroundImage = `url(${x.foodImg})`;
            modalHeading.textContent = `${x.foodName}`;
            modalCuisine.textContent = x.foodCuisine;
            modalIngredients.textContent = x.mainIngridient;
            modalFoodPrice.textContent = `${x.foodPrice}`;
            modalFoodInfo.textContent = `${x.foodNotes}`;

            currentProduct = x; 
        });
    }
}
menuP();

//fetch listing from the form 
form.addEventListener('submit', async (e) => {
    e.preventDefault();

    let formData = new FormData(form);
    let obj = Object.fromEntries(formData.entries());

    try{
    let db = await fetch('http://localhost:3000/listings', {
        method : 'POST',
        body : JSON.stringify(obj)
    })
    let respose = await db.json();
    if(!respose.ok){throw new Error('failed to access the db')};
    alert('post was successful')
    }catch{
        console.error(`failed ${error}`)
    }
})

//cart divs
let cartProduct = document.querySelector('.cartProduct');
let cartItems = document.querySelector('.itemCount');
let totalItemPrice = document.getElementById('totalProductPrice');
let select = document.getElementById('shipping');
let totalPrice = document.getElementById('totalPrice');
//checkout
let checkOutList = document.querySelector('.checkOutList');
let ridePrice = document.querySelector('.ridePrice');
let checkPrice = document.querySelector('.checkPrice')
let totalCheckPrice = document.querySelector('.totalCheckPrice')

function updateCartTotal() {
    let total = 0;
    document.querySelectorAll('.cartProductPrice span').forEach(span => {
        total += Number(span.textContent);
    });
    totalItemPrice.textContent = `ksh ${total}`;
    totalPrice.textContent = total;
    select.addEventListener('change', () => {
        totalPrice.textContent = total + Number(select.value);
    });
}

async function cartRender () {
    let db = await fetch('http://localhost:3000/listings');
    let data = await db.json();

    let carted = data.filter(obj => obj.cart === true)
    console.log(carted)

    for(let i = 0; i< carted.length; i++){
        let x = carted[i]

        let savedQuantity = localStorage.getItem(`quantity_${x.id}`);
        let quantity = savedQuantity ? parseInt(savedQuantity, 10) : 1;

        let oneItem = document.createElement('section');
        cartProduct.appendChild(oneItem);
        oneItem.classList.add('oneItem');

        let cartProductImg = document.createElement('div');
        oneItem.appendChild(cartProductImg);
        cartProductImg.classList.add('cartProductImg');
        cartProductImg.style.backgroundImage = `url(${x.foodImg})`

        let cartProductName = document.createElement('div');
        oneItem.appendChild(cartProductName);
        cartProductName.classList.add('cartProductName');

        let cartCuisine = document.createElement('p');
        cartCuisine.textContent = `${x.foodCuisine}`
        let cartFoodName = document.createElement('p');
        cartFoodName.textContent = `${x.foodName}`
        cartProductName.appendChild(cartCuisine);
        cartProductName.appendChild(cartFoodName);

        let cartProductPieces = document.createElement('div');
        oneItem.appendChild(cartProductPieces);
        cartProductPieces.classList.add('cartProductPieces');

        let cartProductMinus = document.createElement('p');
        cartProductMinus.textContent = '-';

        cartProductMinus.addEventListener('click', () => {
            if(quantity >= 2){
                quantity = (quantity - 1);
            }
            cartProductQuantity.textContent = quantity
            priceOutputValue.textContent = `${x.foodPrice * quantity}`;
            localStorage.setItem(`quantity_${x.id}`, quantity);
            updateCartTotal();
            renderCheckOut(carted);
        })
        let cartProductQuantity = document.createElement('button');
        cartProductQuantity.textContent = quantity;
        let cartProductPlus = document.createElement('p');
        cartProductPlus.textContent = '+'
        cartProductPlus.addEventListener('click', () =>  {
            quantity = (quantity + 1)
            cartProductQuantity.textContent = quantity;
            priceOutputValue.textContent = `${x.foodPrice * quantity}`;
            localStorage.setItem(`quantity_${x.id}`, quantity);
            updateCartTotal();
            renderCheckOut(carted);
        });

        x.totalPrice = (x.foodPrice * quantity)

        cartProductPieces.appendChild(cartProductMinus);
        cartProductPieces.appendChild(cartProductQuantity);
        cartProductPieces.appendChild(cartProductPlus);

        let cartProductPrice = document.createElement('div');
        oneItem.appendChild(cartProductPrice);
        cartProductPrice.classList.add('cartProductPrice');

        let cartPriceOutput = document.createElement('output');
        let priceOutputValue = document.createElement('span');
        cartPriceOutput.textContent = 'Ksh:'
        priceOutputValue.textContent = `${x.foodPrice * quantity}`
        cartProductPrice.appendChild(cartPriceOutput);
        cartPriceOutput.appendChild(priceOutputValue);

        let cartDeleter = document.createElement('div');
        let cartDeleterP = document.createElement('p')
        cartDeleter.appendChild(cartDeleterP)
        cartDeleterP.classList.add('cartDeleter');
        cartDeleterP.textContent = 'X';
        oneItem.appendChild(cartDeleter);
        cartDeleter.classList.add('cartDeleter');
        cartDeleterP.addEventListener('click', async () => {
            carted.splice(i, 1);
            oneItem.remove();
            await fetch(`http://localhost:3000/listings/${x.id}`, {
                method: 'PATCH',
                body: JSON.stringify({cart : false})
            })
        })
    }

    cartItems.textContent = `${carted.length}`;
    function renderCheckOut(carted) {
        checkOutList.innerHTML = '';
        let total = 0;
        for(let x of carted){
            let savedQuantity = localStorage.getItem(`quantity_${x.id}`);
            let quantity = savedQuantity ? parseInt(savedQuantity, 10) : 1;

            let li = document.createElement('li');
            checkOutList.appendChild(li);

            let div = document.createElement('div');
            li.appendChild(div);

            let checkItem = document.createElement('span');
            div.appendChild(checkItem);
            checkItem.classList.add('checkItem')
            checkItem.textContent = `${x.foodName} * ${quantity}`;

            let checkPrice = document.createElement('span');
            div.appendChild(checkPrice);
            checkPrice.textContent = `ksh ${x.foodPrice * quantity}`;
            checkPrice.classList.add('checkPrice');

            total += x.foodPrice * quantity;
        }
        totalCheckPrice.textContent = `ksh ${total}`;
        totalCheckPrice.classList.add('checkPrice')
    }
    updateCartTotal()
    renderCheckOut(carted);
}
cartRender()
