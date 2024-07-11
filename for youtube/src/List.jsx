function List (){
    const names = ["name1","name2","name3","name4"]

    const Friut = [{name : "a1", count: 10 },
                    {name : "a1", count: 10 },
                    {name : "a1", count: 10 },
                    {name : "a1", count: 10 }
                ];
    return (
        <ol>
            <li>
            {names}
            {
                Friut
            }
            </li>
        </ol>
    );
}

export default List