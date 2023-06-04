import React from "react";

class Container extends React.Component {
    renderList = (list) => {
        return list.map(elem => {
            return <ul key={elem.id}>
                <li>Name: {elem.name}</li>
            </ul>
        })
    }
    
    render(){
        const users = [
            { id: 1, name: 'Користувач 1' },
            { id: 2, name: 'Користувач 2' },
            { id: 3, name: 'Користувач 3' }
          ];
        return (
            <div>
                Container
                {this.renderList(users)}
            </div>
        );
    }
}

export default Container