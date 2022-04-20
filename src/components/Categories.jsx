import React, {memo, useState} from 'react';
import PropTypes from "prop-types";
import Index from "./pizzaBlock";

const Categories = memo(({items, onClickCategory, activeCategory}) => {

    return (
        <div className="categories">
            <ul>
                <li
                    onClick={() => onClickCategory(null)}
                    className={activeCategory === null? 'active' : ''}
                >
                    Все</li>
                {items && items.map((name, index) => {
                    return <li
                        className={activeCategory === index? 'active' : ''}
                        onClick={() => onClickCategory(index)}
                        key={`${name}_${index}`}>{name}</li>
                })}
            </ul>
        </div>
    );
});

Categories.propTypes = {
    items: PropTypes.arrayOf(PropTypes.string).isRequired ,
    // activeCategory: PropTypes.oneOf([PropTypes.number, PropTypes.object]),
    onClickCategory: PropTypes.func
};

Categories.defaultProps = {
    items: [],
    activeCategory: null
}

export default Categories;