import React from 'react';
import * as I from './ItemStyles.js'


const ItemPage = ({kind, image, title, price, unit, area, date}) => {
    return (
        <I.ItemBack>
            <I.ItemImage src={image}></I.ItemImage>
            <I.Content>
                <I.Title>{title}</I.Title>
                { kind === "product" ?
                    <I.Price>{price}원 / {unit}개</I.Price>
                 :
                    <I.Price>{price}원</I.Price>
                }
                <I.Area>{area}</I.Area>
                { kind == "experience" &&
                    <I.Date>{date}</I.Date>
                }
            </I.Content>
        </I.ItemBack>
    )
}

export default ItemPage;