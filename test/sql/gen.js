function gen(){

    const URL = 'https://1234.riddles.dev/5678-step0';



    let create = `create table solution (
        sorting int(1),
        c char(1),
        enabled int(1)
    );    
    `;


    let lines = URL.split('');


    lines = lines.map((l, idx) => {
        return [idx, `'${l}'`, 1];
    });

    for(let r=0;r<=100;r++){
        lines.push([getRandom(0, 100), `'${String.fromCharCode(getRandom(65, 65+25))}'`, 0]);
    }

    lines = lines.sort((a, b) => 0.5 - Math.random());


    let insert = `insert into solution values
        ${lines.map(l => {
            return `(${l.join(', ')})`;
        }).join(',\n')}
    ;`;



    console.log([create, insert].join('\n\n'));


}

gen();

function getRandom(min, max) {
    return parseInt(Math.random() * (max - min) + min);
  }


  //select GROUP_CONCAT(c ORDER BY sorting asc SEPARATOR '') from solution where enabled = 1 order by sorting asc