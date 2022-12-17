
const url = 'https://638ceab6d2fc4a058a637822.mockapi.io/articles';


const getallRecords = async ()=>{

    const request = await fetch (`${url}`, { method: "GET",  headers : { 'content-type': 'application/json'}})

    const response = await request.json();
    
    console.log(response);

     diplayReords(response);

}

const diplayReords = (records)=>{

        let tableContent = " ";

     records.map((ele)=>{

     tableContent += `<tr>
        
        <th scope="row" id = 'texts'>${ele.id}</th>
        <td id = 'texts'>${ele.name}</td>
        <td> <img src = "${ele.avatar}" class='imagess'> </img></td>
        <td id = 'texts'>${new Date(ele.createdAt).toLocaleDateString()}</td>
        <td> <button type="button" class="btn btn-danger" 
        onclick = "deleteHandler('${ele.id}','${ele.name}')" id = "deletebtn"> Delete </button> 
        <button type="button" class="btn btn-warning" 
        onclick = "editHandler(${ele.id}, '${ele.name}')" id = "deletebtn" >Edit</button>
          <td>
        </tr>`

    })

    document.getElementById('tbody').innerHTML = tableContent;

}


const deleteHandler = (id, name)=>{

    const suretoDelete =  confirm (`are you sure you want to delete this ${name}`)

    if (suretoDelete == true){

        deletRecords (id);
    }

}


const deletRecords = async (deleteRecord) => {

    try{

     await fetch (`${url}/${deleteRecord}`, {method: 'DELETE', headers : {'content-type' : 'application/json'}})

    alert (`${deleteRecord} deleted Succesully.`)

    getallRecords ();
    }
    catch (er){

        console.error(`error ! ${er}`);

    }


}

const editHandler = (id, editedName )=>{

let name =  prompt (`Kindly update Your Name ${editedName}` )

if (name == null){
    
    alert ('Name is Mandatory')

    return
}

if (name == editedName ) {

    alert ('You have mentioned the Same Name')

    return

}

editinghandler (id, {name})

}   

 const editinghandler = async (editId, inputname )=>{
 
    try {

    await fetch (`${url}/${editId}`, {method:'PUT', headers : {'content-type' : 'application/JSON'}, body : JSON.stringify(inputname) } );

    alert (`Name updated Successfully`);

     getallRecords ();

} catch (er){
    console.error (er);
}

}

const newRecords = ()=>{

let name =  prompt (`Kindly type Your Name ` )

if (name == null){
    
    alert ('Name is Mandatory')

    return
}

updateNewRecords({name})



}

const updateNewRecords = async (recName)=>{

 await fetch (url , {method: 'POST' , headers:{'content-type': 'application/json'}, body: JSON.stringify(recName)})

 getallRecords ();

}

getallRecords ();



