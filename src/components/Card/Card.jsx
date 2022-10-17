import styles from './Card.module.scss'
import React from 'react';

function Card({ onFavorite, imageURL, title, price, onPlus }) { //сюда у нас попадает объект

    const [isAdded, setIsAdded] = React.useState(false)

    const onClickPlus = () => {
        onPlus({ imageURL, title, price })
        setIsAdded(!isAdded)

    }

    return (
        <div className={styles.card}>
            <div className={styles.favorite} onClick={onFavorite}>
                <img src="/img/liked-passive.svg" alt="liked"></img>
            </div>
            <img width={150} height={168} src={imageURL} alt="Фотография чехла"></img>
            <p>{title}</p>
            <div className="d-flex justify-between align-center">
                <div className="d-flex flex-column">
                    <span>Цена</span>
                    <b>{price} ₽</b>
                </div>
                <img className={styles.plus} src={isAdded ? "/img/btn_active.svg" : "/img/btn_passive.svg"} alt="Plus" onClick={onClickPlus}></img>
            </div>
        </div>
    );
}

export default Card;