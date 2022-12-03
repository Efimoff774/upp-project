import styles from './Card.module.scss'
import React from 'react';
import ContentLoader from 'react-content-loader'
import AppContext from "../../context";


function Card({ id, onFavorite, imageURL, title, price, onPlus, favorited = false, added = false, loading = false }) { //сюда у нас попадает объект

    const { isItemAdded } = React.useContext(AppContext)
    const [isFavorite, setIsFavorite] = React.useState(favorited)

    const onClickPlus = () => {
        onPlus({ id, imageURL, title, price })

    }

    const onClickFavorite = () => {
        onFavorite({ id, imageURL, title, price })
        setIsFavorite(!isFavorite)
    }

    return (
        <div className={styles.card}>
            {
                loading ? (<ContentLoader
                    speed={2}
                    width={155}
                    height={250}
                    viewBox="0 0 155 265"
                    backgroundColor="#f3f3f3"
                    foregroundColor="#ecebeb">
                    <rect x="1" y="0" rx="10" ry="10" width="155" height="155" />
                    <rect x="0" y="167" rx="5" ry="5" width="155" height="15" />
                    <rect x="0" y="187" rx="5" ry="5" width="100" height="15" />
                    <rect x="1" y="234" rx="5" ry="5" width="80" height="25" />
                    <rect x="124" y="230" rx="10" ry="10" width="32" height="32" />
                </ContentLoader>) : (
                    <div>
                        <div className={styles.favorite} onClick={onClickFavorite}>
                            <img src={isFavorite ? "/img/liked-active.svg" : "/img/liked-passive.svg"} alt="liked"></img>
                        </div>
                        <img width={150} height={168} src={imageURL} alt="Фотография чехла"></img>
                        <p>{title}</p>
                        <div className="d-flex justify-between align-center">
                            <div className="d-flex flex-column">
                                <span>Цена</span>
                                <b>{price} ₽</b>
                            </div>
                            {onPlus && <img className={styles.plus} src={isItemAdded(id) ? "/img/btn_active.svg" : "/img/btn_passive.svg"} alt="Plus" onClick={onClickPlus}></img>}
                        </div>
                    </div>
                )

            }


        </div>
    );
}

export default Card;