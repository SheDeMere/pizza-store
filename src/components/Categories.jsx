import React, {useState} from 'react';

const Categories = ({items, onClickItem}) => {
    const [activeItem, setActiveItem] = useState(null)
    const onSelectItem = index => {
        setActiveItem(index)
    }
    return (
        <div className="categories">
            <ul>
                <li
                    onClick={() => setActiveItem(null)}
                    className={activeItem === null? 'active' : ''}
                >
                    Все</li>
                {items && items.map((name, index) => {
                    return <li
                        className={activeItem === index? 'active' : ''}
                        onClick={() => onSelectItem(index)}
                        key={`${name}_${index}`}>{name}</li>
                })}
            </ul>
        </div>
    );
};

export default Categories;