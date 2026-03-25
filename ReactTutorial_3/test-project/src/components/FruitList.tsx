import React from 'react';

function FruitListItem(props) {
  function handleClick(id) {
    console.log(`removed ${id}`);
  }

  //Changed to an arrow function 
  return <li onClick={() => handleClick(props.fruit.id)}>{props.fruit.name} </li>;
}

export function FruitList(props) {
  const fruitListItems = props.fruits.map((fruit) => (
    <FruitListItem key={fruit.id} fruit={fruit} />
  ));
  return <ul>{fruitListItems}</ul>;
}

export class NewFruitListItem extends React.Component<{ fruit: { id: number; name: string } }> {
    props: { fruit: { id: number; name: string } };
    event: React.MouseEvent<HTMLLIElement>;

    constructor(event:React.MouseEvent<HTMLLIElement>, props: { fruit: { id: number; name: string } }) {
        super(props);
        this.props = props;
        this.event = event;
    }

    handleClick = (event: React.MouseEvent<HTMLLIElement>, id: number) => {
        console.log(event);
        console.log(`removed ${id}`);
    };

    render() {
        return <li onClick={(e) => this.handleClick(e,this.props.fruit.id)}>{this.props.fruit.name} </li>;
    }
}

export class NewFruitList extends React.Component<{ fruits: { id: number; name: string }[] }> {
    props: { fruits: { id: number; name: string }[] };
    constructor(props: { fruits: { id: number; name: string }[] }) {
        super(props);
        this.props = props;
    }

    render() {
        const fruitListItems = this.props.fruits.map((fruit) => (
            <NewFruitListItem key={fruit.id} fruit={fruit} />
        ));
        return <ul>{fruitListItems}</ul>;
    }
}