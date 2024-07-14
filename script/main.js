const modalFunc = () => {
    const modal = document.querySelector('.cart-modal__overlay')
    const cart_btn = document.querySelector('#cart-button')
    // const close_btn = document.querySelector('.cart-modal__header--close')

    // создаем события клика мыши по кнопке карзины и создаем функцию отображения модального окна путем добавления класса open 
    const openModal = () => {
        modal.classList.add('open');
    }
    cart_btn.addEventListener('click', () => {
        openModal()
    })

    // создаем события клика мыши по кнопке крестика и создаем функцию 'удаления модального'окна путем удаления класса open 
    const closeModal = () => {
        modal.classList.remove('open');
    }

    modal.addEventListener('click', () => {
        if (event.target.classList.contains('cart-modal__overlay') ||
            event.target.closest('.cart-modal__header--close')) {
            closeModal()
        }
    })
}

const restsFunc = () => {
    const container = document.querySelector('#rests-container')

    const restArrey = [
        {
            id: 1,
            title: 'Пицца плюс',
            time: 50,
            price: 900,
            raiting: 4.5,
            type: 'Пицца',
            Image: 'image.jpg'
        },
        {
            id: 2,
            title: 'Тануки',
            time: 35,
            price: 450,
            raiting: 4.2,
            type: 'Суши и роллы',
            Image: 'image1.jpg'
        },
        {
            id: 3,
            title: 'FoodBand',
            time: 25,
            price: 599,
            raiting: 3.8,
            type: 'Пицца и роллы',
            Image: 'image2.jpg'
        },
        {
            id: 4,
            title: 'Жадина-пицца',
            time: 40,
            price: 349,
            raiting: 4.7,
            type: 'Пицца и роллы',
            Image: 'image3.jpg'
        },
        {
            id: 5,
            title: 'Точка еды',
            time: 40,
            price: 499,
            raiting: 3.5,
            type: 'Пицца и роллы',
            Image: 'image4.jpg'
        },
        {
            id: 6,
            title: 'PizzaBurger',
            time: 15,
            price: 159,
            raiting: 3.6,
            type: 'Пицца и бургеры',
            Image: 'image5.jpg'
        },
    ]

    const loading = () => {
        container.innerHTML = '<p style="width: 100%; text-align: center;">Загрузка...</p>'
    }

    const renderRest = (array) => {
        container.innerHTML = ''

        array.forEach((card) => {
            container.insertAdjacentHTML("beforeend", `
                <a href="/tanuki.html?id=${card.id}" class="products-card">
                <div class="products-card__img">
                  <img src="assets/${card.Image}" alt="${card.Image}" />
                </div>
                <div class="products-card__description">
                  <div class="products-card__description--row">
                    <h4 class="products-card__description--title">
                      ${card.title}
                    </h4>
                    <div class="products-card__description--badge">${card.time} мин</div>
                  </div>
                  <div class="products-card__description--row">
                    <div class="products-card__description--info">
                      <div class="products-card__description--info--raiting">
                        <img src="assets/star.svg" alt="star" />
                        ${card.raiting} 
                      </div>
                      <div class="products-card__description--info--price">
                        От ${card.price} ₽
                      </div>
                      <div class="products-card__description--info--group">
                        ${card.type}
                      </div>
                    </div>
                  </div>
                </div>
              </a>
                `)
        });
    }

    if (container) {
        loading()

        setTimeout(() => {
            renderRest(restArrey)
        }, 400);
    }

}

const productFunc = () => {
    const container_tanuki = document.querySelector('#products-container')

    const productArrey = [
        {
            name: 'Ролл угорь стандарт',
            text: 'Рис, угорь, соус унаги, кунжут, водоросли нори.',
            price: 250,
            image: 'tanuki1.jpg'
        },
        {
            name: 'Калифорния лосось стандарт',
            text: 'Рис, лосось, авокадо, огурец, майонез, икра масаго, водоросли нори.',
            price: 395,
            image: 'tanuki2.jpg'
        },
        {
            name: 'Окинава стандарт',
            text: ' Рис, креветка отварная, сыр сливочный, лосось, огурец свежий...',
            price: 339,
            image: 'tanuki3.jpg'
        },
        {
            name: 'Цезарь маки хl',
            text: 'Рис, куриная грудка копченая, икра масаго, томат, айсберг, соус цезарь...',
            price: 450,
            image: 'tanuki4.jpg'
        },
        {
            name: 'Ясай маки стандарт 185 г',
            text: 'Рис, помидор свежий, перец болгарский, авокадо, огурец, айсберг',
            price: 359,
            image: 'tanuki5.jpg'
        },
        {
            name: 'Ролл с креветкой стандарт',
            text: 'Рис, водоросли нори, креветки отварные, сыр сливочный, огурцы',
            price: 399,
            image: 'tanuki6.jpg'
        },
    ]

    const loading = () => {
        container_tanuki.innerHTML = '<p style="width: 100%; text-align: center;">Загрузка...</p>'
    }

    const renderProduct = (array) => {
        container_tanuki.innerHTML = ''

        array.forEach((card) => {
            container_tanuki.insertAdjacentHTML("beforeend", `
                <div class="products-card">
                <div class="products-card__img">
                  <img src="assets/${card.image}" alt="${card.image}" />
                </div>
                <div class="products-card__description">
                  <div class="products-card__description--row">
                    <h5 class="products-card__description--name">
                      ${card.name}
                    </h5>
                  </div>
                  <div class="products-card__description--row">
                    <p class="products-card__description--text">
                      ${card.text}
                    </p>
                  </div>
                  <div class="products-card__description--row">
                    <div class="products-card__description-controls">
                      <button class="btn btn-primary">
                        В корзину
                        <img src="assets/shopping-cart-white.svg" alt="user" />
                      </button>
                      <span class="products-card__description-controls--price">
                        ${card.price} ₽
                      </span>
                    </div>
                  </div>
                </div>
              </div>
                `)
        });
    }

    if (container_tanuki) {
        loading()

        setTimeout(() => {
            renderProduct(productArrey)
        }, 400);
    }

}

modalFunc()
restsFunc()
productFunc()