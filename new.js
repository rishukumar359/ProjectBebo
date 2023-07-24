// const http=require('http');
// const hostname='127.0.0.1';
// const port=3000;
// const server=http.createServer((req,res)=>{ 
// res.statusCode=200;
// res.setHeader('Content-Type','text/html');
// res.end('<p>hellllllo</p>');
// }); 



// server.listen(port,hostname,() =>{
// 	console.log(`Server running at http://locallost:${port}/`);
// }); 


	// Simple promise that resolves
	// After a given time
	// Promise.allSettled(
	// 	data.map(e=> {
	// 	  return CALL_API("http://localhost:3020/users" , 'get')
	// 	})
	//   ).then(responseArr => {
	// 	responseArr.forEach(res=>{
	// 	  console.log(res);
	// 	  // res.status & res.value
	// 	})
	//   })


	// async function New(){
	// 	try{
	// 		const result=await Promise.all([
	// 			fetch("http://localhost:3020/users")
    //   .then((response) => {
    //     return response.json(); 
		
    //   }) ,
	//   fetch("https://api.github.com/users")
    //   .then((response) => {
    //     return response.json(); 
		
    //   })
	// 		].map((Promise)=>Promise.catch((error)=>error))
	// 		); 
	// 		console.log(result)

	// 	} catch(error){

	// 	}
	// } 



	// async function example() {  


	// 	const promises = ['https://api.github.com/users'];
	// 	const results = await Promise.allSettled(promises);
	// 	for (const result of results) {
	// 	if (result.status === 'fulfilled') {
	// 	console.log(result.value);
	// 	} else {
	// 	console.error(result.reason);
	// 	}
	// 	}
	// 	} 
	// 	example()




	async function New(){ 
        
			try{
			const result=await Promise.all([
				fetch("http://localhost:3020/users")
      .then((response) => {
        return response.json(); 
		
      }) ,
	  fetch("https://api.github.com/users")
      .then((response) => {
        return response.json(); 
		
      })
			].map((Promise)=>Promise.catch((error)=>error))
			); 
			 console.log(result)

		} catch(error){

		}

		try{
			const result=await Promise.allSettled([
				fetch("http://localhost:3020/users")
      .then((response) => {
        return response.json(); 
		
      }) ,
	  fetch("https://api.github.com/users")
      .then((response) => { 
		console.log(response)
        return response.json(); 

		
      }
	  
	  ) 
	  	]
			); 
			

		} catch(error){

		}
	} 

	New()
