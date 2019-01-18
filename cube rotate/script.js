

var Myobj ={
	name:'rock',
	email:'rockcriz',
	class1:'bca',
	display:function (){
		 return (this.name+'  '+this.email+'  '+this.class1)
		}
	};	
var obj1 = Object.create(Myobj);
console.log(obj1.name);