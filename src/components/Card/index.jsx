import React, { useState, useEffect } from "react";
import "./index.css";

const Card = ({ title, weight, count, present, descriptionText, isDisable, disableText }) => {
    const [isClick, setClick] = useState(false);
    const [hoverClassNameBorder, setHoverClassNameBorder] = useState("card__border--hover");
    const [hoverClassNameWeight, setHoverClassNameWeight] = useState("card__weight--hover");
    const [borderColor, setBorderColor] = useState("#1698D9");

    useEffect(() => {
        isClick && setHoverClassNameBorder("");
        isClick && setHoverClassNameWeight("");
        isClick ? setBorderColor("#D91667") : setBorderColor("#1698D9");
    }, [isClick]);

    useEffect(() => {
        isDisable && setBorderColor("#B3B3B3");
        setHoverClassNameBorder("");
    }, [isDisable]);

    const doPresentText = (present) => {
        if (present === 1) {
            return `мышь`;
        } else if (present > 1 && present < 5) {
            return `мыши`;
        } else {
            return `мышей`;
        }
    };

    const doClassWeight = () => {
        if (!isDisable) {
            if (isClick) {
                return `card__weight card__weight--selected ${hoverClassNameWeight}`;
            } else {
                return `card__weight ${hoverClassNameWeight}`;
            }
        } else {
            return `card__weight card__weight--disabled`;
        }
    };

    return (
        <li className="card" onMouseOut={() => {
            isClick && setHoverClassNameBorder("card__border--selected-hover");
            isClick && setHoverClassNameWeight("card__weight--selected-hover");
        }} onClick={() => {
            if (!isDisable) {
                setClick(!isClick);
                setHoverClassNameBorder("card__border--hover");
                setHoverClassNameWeight("card__weight--hover");
            }
        }}>
            <div className={isDisable ? "card__wrapper card__wrapper--disabled" : "card__wrapper"}>
                <p className="card__text">Сказочное заморское яство</p>
                <h2 className="card__title">Нямушка <span>{title}</span></h2>
                <p className="card__description">
                    <span>{count}</span> порций
                </p>
                <p className="card__present">
                    {present !== 1 && <span>{present}</span>} {doPresentText(present)} в подарок
                </p>
                <div className={doClassWeight()}>
                    <span>{weight}</span>кг
                </div>
                <svg className="card__border" width="320" height="480" viewBox="0 0 320 480" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <mask id="path-1-inside-1_59_374" fill="white">
                        <path fillRule="evenodd" clipRule="evenodd" d="M0 42.6762V468C0 474.627 5.37259 480 12 480H308C314.627 480 320 474.627 320 468V12C320 5.37258 314.627 0 308 0H42.6762L0 42.6762Z" />
                    </mask>
                    <path className={hoverClassNameBorder} d="M0 42.6762L-2.82843 39.8478L-4 41.0193V42.6762H0ZM42.6762 0V-4H41.0193L39.8478 -2.82843L42.6762 0ZM4 468V42.6762H-4V468H4ZM12 476C7.58173 476 4 472.418 4 468H-4C-4 476.837 3.16345 484 12 484V476ZM308 476H12V484H308V476ZM316 468C316 472.418 312.418 476 308 476V484C316.837 484 324 476.837 324 468H316ZM316 12V468H324V12H316ZM308 4C312.418 4 316 7.58172 316 12H324C324 3.16344 316.837 -4 308 -4V4ZM42.6762 4H308V-4H42.6762V4ZM39.8478 -2.82843L-2.82843 39.8478L2.82843 45.5046L45.5046 2.82843L39.8478 -2.82843Z" fill={borderColor} mask="url(#path-1-inside-1_59_374)" />
                </svg>
            </div>
            {
                !isDisable ?
                isClick ? (
                    <p className="card__text-offer">{descriptionText}</p>
                ) : (
                    <p className="card__text-offer">
                        Чего сидишь? Порадуй котэ, <button onClick={() => setClick(!isClick)} type="button">купи.</button>
                    </p>
                ) : <p className="card__text-offer card__text-offer--disabled">{disableText}</p>
            }
            
        </li>
    );
};

export default Card;