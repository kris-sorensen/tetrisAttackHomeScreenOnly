// Create Matricie
const createBoard = () => {
    //* need to replace length with state property rows. and Array(65) with cells. hardcoded for now
    const board = Array.from(
        { length: 31 },
        () => Array(66).fill(0) //fill board with 0s,
    );
    return board;
}

// Create Dom elements for each cell
const inputCells = (row, cells) => {
    const cellArray = [];
    for (let i = 0; i <= cells - 1; i++) {
        const id = row.toString() + i;
        // const id = `${row}${i}`;
        const cellColorClass = `_${row}${i}`;
        const allClasses = `cell ${cellColorClass}`;
        cellArray.push(<div className={allClasses} key={id} />);
    }
    return cellArray;
}

export { createBoard, inputCells }