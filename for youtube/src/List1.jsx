function List1 (){
    
    const fruits = ["1","2","3","4","5"];

    const listitams = fruits.map (fruit => <li>{fruit}</li>)
    
    return(<ol>{listitams}</ol>);
}

export default List1