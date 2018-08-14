import React from 'react';
import { css } from 'emotion';

const listStyle = css`
    list-style: none;
`;

const itemStyle = css`
    font-family: Arial, Helvetica, sans-serif;
    border: 1px solid #d4d3d3;
    border-radius: 2px;
    box-shadow: 1px 2px 10px -5px rgb(189, 189, 189);
    padding: 10px 5px;
    margin: 10px 0;
    cursor: pointer;

    a {
        text-decoration: none;
        color: #000;
    }

    &:hover {
        background: rgb(215, 217, 219);
        color: #000;
    }
`;

class StoryList extends React.PureComponent {
    render() {
        const { items, selectItem } = this.props;

        return (
            <ul className={listStyle}>
                {items.map((item, index) => {
                    return (
                        <li
                            className={itemStyle}
                            key={index}
                            onClick={selectItem.bind(null, item.id)}
                        >
                            {item.title}
                        </li>
                    );
                })}
            </ul>
        );
    }
}

export default StoryList;
