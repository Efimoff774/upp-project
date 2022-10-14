import styles from './Card.module.scss'
console.log(styles);

function Card(props) { //сюда у нас попадает объект
    return (
        <div className={styles.card}>
            <div className={styles.favorite}>
                <img src="/img/liked-passive.svg" alt="liked"></img>
            </div>
            <img width={150} height={168} src={props.imageURL} alt="Фотография чехла"></img>
            <p>{props.title}</p>
            <div className="d-flex justify-between align-center">
                <div className="d-flex flex-column">
                    <span>Цена</span>
                    <b>{props.price} ₽</b>
                </div>
                <div className={styles.button} onClick={() => console.log(props.fck)}>
                    <img src="/img/btn_passive.svg" alt="Plus"></img>
                </div>
            </div>
        </div>
    );
}

export default Card;