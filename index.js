const express=require("express");
const object=express();
object.use(express.json());
const students=[
	{first_name: 'civil', id: 1},
	{first_name: 'mech', id: 2},
	{first_name: 'ece', id: 3},
	{first_name: 'cse', id: 4},
	{first_name: 'mme', id: 5}
	]
	//object.use(express.json());
object.listen(3000,()=>{
	console.log("please acess on web port:3000");
})
object.get('/',(req,res)=>{
	res.send("IT'S WORKING MAWAAA");
});
object.get('/students',(req,res)=>{
	res.send(students);
});
//post the data
object.post('/students',(req,res)=>{
	if(!req.body.id){
		res.status(400);
		return res.send({error:'id ois required'})
	}
		response = {
     
		id: students.length+1,
		first_name:req.body.first_name
		
		};
		
	students.push(response)
	res.json(response)
	console.log(response);
	
});
//update student list
object.put("/students/:id",(req,res)=>{
	let id=req.params.id
	let first_name=req.body.first_name
	let index=students.findIndex((student)=>{
		return(student.id==Number.parseInt(id))
	})
	if(index >=0){
		let std=students[index]
		std.first_name=first_name
		res.send(std)
	}else{
		res.status(404)
	}
})
//delete student
object.delete("/students/:id",(req,res)=>{
	let id=req.params.id;
	let index=students.findIndex((students)=>{
		return(student.id==Number.parseInt(id))
	})
	if(index >=0){
		let std=students[index]
		students.splice(index,1)
		res.json(std)
		}else{
			res.status(404)
		}
		})

