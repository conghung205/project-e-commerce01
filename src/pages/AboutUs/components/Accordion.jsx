import React, { useState } from "react";
import styles from "../styles.module.scss";
import cls from "classnames";

const Accordion = ({ question, answer }) => {
    const { accordion, title, desc, active } = styles;
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className={accordion}>
            <div className={title} onClick={() => setIsOpen(!isOpen)}>
                <p>{question}</p>
                <span>{isOpen ? "-" : "+"}</span>
            </div>

            <div
                className={cls(desc, {
                    [active]: isOpen,
                })}
            >
                {answer}
            </div>
        </div>
    );
};

export default Accordion;
