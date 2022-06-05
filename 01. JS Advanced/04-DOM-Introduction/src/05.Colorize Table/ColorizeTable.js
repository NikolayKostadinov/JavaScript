function colorize() {
    let rows = document.querySelectorAll('tr:nth-of-type(2n)');

    rows.forEach(row => {
        row.style.backgroundColor = 'teal';
    });

    // let rowElements = document.getElementsByTagName('tr');

    // let rows = Array.from(rowElements);

    // rows.forEach((row, ix) =>{
    //     if(ix%2){
    //         row.style.backgroundColor = 'teal';
    //     }
    // });
}