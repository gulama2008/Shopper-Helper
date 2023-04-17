import React from "react";
import ListItem from "./ListItem";

export default function ShoppingList(props) {
    const items = props.items;
    return (
      <div className="aboutme-container">
        <ul>
          {items.map((item, index) => {
              return (
                <li>
                  <ListItem item={item} />
                </li>
              );
          })}
        </ul>
      </div>
    );
}
