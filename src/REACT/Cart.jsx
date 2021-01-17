import React from 'react';
import ReactDOM from 'react-dom';
import index from '../index.html';


function Cart(props) {

    return (
        <>
            <div className="checkout-product-list-item-row">
                <div className="checkout-product-list-item-row__column checkout-product-list-item-row__column--number">
                    1.
                </div>
                <div className="checkout-product-list-item-row__column checkout-product-list-item-row__column--image">
                    <div className="checkout-product-list-item__image">
                        <a href="#"
                        <img src={props.image}/>
                        </>
                    </div>
                </div>
                <div className="checkout-product-list-item-row__column checkout-product-list-item-row__column--name">
                    <div className="checkout-product-list-item__name">
                        <div className="product__variant-name"><a
                            href="#"
                            title="Adaptor VK 50 (TW 1501) z GW 2&quot; BSP, AISI 316">Adaptor VK 50 (TW 1501) z GW
                            2"
                            BSP, AISI 316</a></div>
                        <div className="product__variant-index">Index: TW-VK-050-SS</div>
                    </div>
                </div>
                <div
                    className="checkout-product-list-item-row__column checkout-product-list-item-row__column--availability">
                    <div className="checkout-product-list-item__availability-desktop">
                        <div className="product-availability">
                            <div className="availability availability--vertical">
                                <div className="availability__description">
                                    <div>334 <span>шт.</span></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div
                    className="checkout-product-list-item-row__column checkout-product-list-item-row__column--quantity">
                    <div className="checkout-product-list-item__quantity">
                        <div className="quantity-input quantity-input--with-controls">
                            <button type="button" id="buttonMinus" className="quantity-input__control">-</button>
                            <input type="text" id="count" name="" className="no-radius" value="1" disabled>
                                <button type="button" className="quantity-input__control">+</button>
                            </input>
                        </div>
                        <span>шт.</span>
                    </div>
                </div>
                <div
                    className="checkout-product-list-item-row__column checkout-product-list-item-row__column--your-price">
                    <div className="checkout-product-list-item__price">
                        <div className="checkout-product-list-item__price-value">
                            <div id="oneProduct">45.84</div>
                        </div>
                    </div>
                </div>
                <div className="checkout-product-list-item-row__column checkout-product-list-item-row__column--price">
                    <div className="checkout-product-list-item__price">
                        <div className="checkout-product-list-item__price-value">
                            <div className="checkout-summary__value">45.84</div>
                        </div>
                    </div>
                </div>
                <div className="checkout-product-list-item-row__column checkout-product-list-item-row__column--actions">
                    <div className="checkout-product-list-item__actions">
                        <button type="button" className="link"><i className="fas fa-trash-alt"/></button>
                    </div>
                </div>
            </div>
        </>
    )
};

const Product = () => {
    let cart = [
        {
            id: "TW-VK-050-SS",
            image: "https://sklep.tubes-international.pl/public/files/publicfiles/59/17/59717b5a3a1f695237c236f69e3ff644.jpg",
            name: "Adaptor VK 50 (TW 1501) z GW 2\" BSP, AISI 316",
            count_sklad: 334,
            count: 1,
            price_one: 55.00,
            price_many: 55.00

        },
        {
            id: "TW-VK-075",
            image: "https://sklep.tubes-international.pl/public/files/publicfiles/59/17/59717b5a3a1f695237c236f69e3ff644.jpg",
            name: "Adaptor VK 75 (TW 1501) z GW 2\" BSP, AISI 316",
            count_sklad: "4",
            count: "1",
            price_one: "55.00",
            price_many: "55.00"
        }
    ]

    return (
        <div>
            {
                cart.map((item, i) => {
                    const {id, image, name, count_sklad, count, price_one, price_many} = item;
                    return (
                        <li key={`${id}`${name}}>

                            <Cart> id = {id} image = {image} name = {name}</Cart>
                        </li>
                    )
                })
            }
        </div>
    )
}

ReactDOM.render(<Product/>, document.getElementById('product'))
