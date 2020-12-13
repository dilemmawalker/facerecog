// import {ClarifaiStub} from "clarifai-nodejs-grpc";
// import  grpc  from "@grpc/grpc-js";

import Facerecognition from "./Facerecognition";

// const metadata = new grpc.Metadata();
// metadata.set("authorization", "Key {a7a00e98572c4cb0bf7a7801956393a7}");

// const stub = ClarifaiStub.json();
// // const stub = ClarifaiStub.insecureGrpc();

function move(props){
    return(
<img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQutQFAxeieCO2sG5UdP4mBJ4CqxykTuf9u5w&usqp=CAU" />);   
// stub.PostModelOutputs(
//     {
//         model_id: "{THE_MODEL_ID}",
//         inputs: [
//             {data: {image: {url: "https://samples.clarifai.com/metro-north.jpg"}}}
//         ]
//     },
//     metadata,
//     (err, response) => {
//         console.log("Predicted concepts:");
//         for (const concept of response.outputs[0].data.concepts) {
//             console.log(concept.name + " " + concept.value);
//         }
//     }
// )
}

function move2(prop){
    return(
        console.log(prop.target.value)
   );
}

function Imagelinkform(){
    return(
        <div>
                <input id='aa' type="text" style={{width:"400px"}} class={{}} 
                // onChange={
                //    (i)=> move2(i)
                // }
                /><br></br><br></br>
                <button onClick={
                 ()=>  Facerecognition(document.getElementById('aa').value)
                }>detect</button>
        </div>
    );
}
export default Imagelinkform;