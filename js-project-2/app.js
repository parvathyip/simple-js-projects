let data=[
    {
        name:'monjo',
        age:30
    },
    {
        name:'tim',
        age:29
    },
    {
        name:'sera',
        age:16
    },
    {
        name:'jobz',
        age:22
    },
    {
        name:'alex',
        age:33
    },
    {
        name:'catherine',
        age:19
    }
];

const info= document.querySelector('#info');
let details= data.map(function(item){
    return '<div>' +item.name+ ' ' +'is '+ item.age+ ' years old'+'</div>';
});
info.innerHTML= details.join('\n');