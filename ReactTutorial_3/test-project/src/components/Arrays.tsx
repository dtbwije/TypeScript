import React, { type JSX } from "react";


function forLoopOption1(): JSX.Element[] {
    const numbers = [1, 2, 3, 4, 5];
    const listItems = [];
    for (let i = 0; i < numbers.length; i++) {
        listItems.push(
            <li key={numbers[i].toString()}>
                {numbers[i]}
            </li>
        );
    }
    console.log(listItems);
    return listItems;
}

function forLoopOption2(): JSX.Element[] {
    const numbers = ['1', '2', '3', '4', '5'];
    const listItems: JSX.Element[] = [];
    numbers.forEach((number) => {
        listItems.push(
            <li key={number.toString()}>
                {number}
            </li>
        );
    });
    console.log(listItems);
    return listItems;
}

function forLoopWithMap(): JSX.Element[] {
    const numbers = ['1', '2', '3', '4', '5'];
    const listItems = numbers.map((number) =>
        <li key={number.toString()}>
            {number}
        </li>
    );
    console.log(listItems);
    return listItems;
}   

export class Arrays extends React.Component {
    render() {
        const option1 = forLoopOption1();
        const option2 = forLoopOption2();
        const option3 = forLoopWithMap();   
        
        return (
        <>
        <table border={1}>
            <thead>
                <tr>
                    <th>basic for</th>
                    <th>forEach</th>
                    <th>map</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>{option1}</td>
                    <td>{option2}</td>
                    <td>{option3}</td>
                </tr>
            </tbody>
        </table>
        </>
        );
    }
}