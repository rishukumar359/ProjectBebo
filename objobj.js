const data={
    student1:{
     name: 'rishu',
     roll:196301084, 
     id:1,
     dob:15/01/01, 
     sport: ['cricket','ball','kabbdi'],
     lib:{
         book:'math',
         sub:['math','zoo','botony'],
         bid:'12',
         bookcondition:{'math':'good',
                   'bio':'bad',
                   'zoo':'modrate'
     }

     }

 } ,
  student2:{
     name:"nitish",
     roll:196301085,
     id:2 ,
     dob:16/01/02,
     sport: ['ball','volly','khokho'],
     lib:{
         book:'phy', 
         sub:['math','zoo','botony'],
         bid:'13',
         bookcon:{'botony':'bad',
                   'bio':'bad',
                   'zoo':'modrate'
     }
     }

  },
  student3:{
     'name':"roshan",
     roll:196301086,
     id:3  ,
     dob:17/01/03,
     sport: ['vollyball','ball','kabbdi'],
     lib:{
         book:'chem',
         sub:['math','zoo','botony'],
         bid:'14',
         bookcon:{'math':'good',
                   'bio':'bad',
                   'zoo':'modrate'
     }
     }
  } ,
  student4:{
     "name":"vikas",
     'roll':196301086,
     "id":4 ,
     "dob":18/01/04,
     sport: ['pubg','tenis','kabbdi'],
     lib:{
         book:'zoology',
         sub:['math','zoo','botony'],
         bid:'19',
         bookcon:{'math':'good',
                   'bio':'bad',
                   'zoo':'modrate'
     }
     }
  },
  student5:{
     "name":"pradeep",
     'roll':196301087,
     "id":5,
     "dob":19/01/05,
     sport: ['cricket','ball','kabbdi'],
     lib:{
         book:'bio',
         sub:['math','zoo','botony'],
         bid:'20',
         bookcon:{'math':'good',
                   'bio':'bad',
                   'zoo':'modrate'
     },
     },
  },
}
///for in 

//for (let a in data){
 //console.log(a) 
//} 
 
///insertion 




////freeze() 
console.log(Object.isFrozen(data));
Object.freeze(data);
console.log(Object.isFrozen(data)); 


////entries

for (const [key] of Object.entries(data)) {
   console.log(`${key}`);
 }