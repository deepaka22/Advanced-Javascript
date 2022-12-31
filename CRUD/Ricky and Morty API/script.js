

const url = 'https://rickandmortyapi.com/api/character';

const getallRecords = async (pages)=>{

    var request = await fetch(`${url}/?page=${pages}`);

    var response = await request.json();

    var result = await response.results;

    imageContainer(result);

    console.log(response.results);


}

getallRecords();

const imageContainer = (imageResult)=>{

    imageResult.map((ele)=>{
          
         
         accessImage (ele); 

    })


}

const accessImage= (Records)=>{

    var ele = document.getElementById('poke-container');

    var div = document.createElement('div');
    div.classList.add('ui', 'card');
    div.setAttribute('id', 'darkimg');

    var div1 = document.createElement('div');
    div1.classList.add('image');

    var createImg = document.createElement('img');
    createImg.classList.add('img', 'img');
    createImg.setAttribute('id', 'imagesize')
    createImg.srcset = Records.image;
    div1.append(createImg);

    var para = document.createElement('h4');
     para.innerText = `Name : ${Records.name}`;
     para.classList.add('border-bottom')
     para.setAttribute('id', 'headcontrol1');

     var para1 = document.createElement('h4');
    para1.innerText = `Gender : ${Records.gender}`;
    para1.classList.add('text-center', 'border-bottom' )
    para1.setAttribute('id', 'headcontrol');


    var para2 = document.createElement('h4');
    para2.innerText = `Species : ${Records.species}`;
    para2.classList.add('text-center','border-bottom' )
    para2.setAttribute('id', 'headcontrol');


    var para3 = document.createElement('h4');
    para3.innerText = `Status : ${Records.status}`;
    para3.classList.add('text-center' )
    para3.setAttribute('id', 'headcontrol');


   


    div.append(div1,para, para1, para2, para3);
    ele.append(div);

}

// const pagination  = ()=>{



// }
 




