
async function marks(){
    let tenth=new Promise ((resolve,reject) => {
        setTimeout(()=>{
            resolve('82 per') 
    },2000)
        
    })  
    let intermediate =new Promise ((resolve,reject)=>{
        setTimeout(()=>{
            resolve('78 per')
        },8000)
    }) 
    let ten=await tenth
    // tenth.then(alert) 
   let inter= await intermediate
    // intermediate.then(alert) 
    
   
   
     console.log(intermediate)
    
    console.log(intermediate)
    console.log(tenth)
    
} 


let ans=marks() 
ans.then((value)=>{
    console.log(value) 
    return [ten,inter]
    (async function(){
        async function marks(){
            console.log("jvgg");
    
        }     
         await abc();
       })()

    })

// let ten=await tenth
//     // tenth.then(alert) 
//     let inter= await intermediate 
//     let ans=marks()
//     ans.then((value)=>{
//         console.log(value) 
//     })


// try {
//     const text = await marks();
//     console.log(text);
// } catch (e) {
//     // Deal with the fact the chain failed
// }



 
   