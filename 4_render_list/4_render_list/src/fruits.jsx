function fruit() {
    const fruits = [{ name: "apple", cal: 34 }, { name: "banana", cal: 32 }, { name: "orange", cal: 25 }];
    fruits.sort((a, b) => a.cal - b.cal);//sorting
    const lowcal=fruits.filter(fruit=>fruit.cal<30);
    const listitem = fruits.map(as => <li>{as.name} : {as.cal}</li>)
    // const listitem = lowcal.map(lowcal => <li>{lowcal.name} : {lowcal.cal}</li>)

    return (
        <ol>{listitem}</ol>
    );
}
export default fruit