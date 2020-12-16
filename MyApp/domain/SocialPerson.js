var MAX_PERSON_ID = 0;

function SocialPerson(email, name, password){
	var _id = ++MAX_PERSON_ID +'';
	var _email = email;
	var _name = name;
	var _password = password;
	
	this.getId = function(){
		return _id;
	};
	
	this.setId = function(id){
		_id = id;
	};
	
	this.getEmail = function(){
		return _email;
	};
	
	this.setEmail = function(email){
		_email = email;
	};
	
	this.getName = function(){
		return _name;
	};
	
	this.setName = function(name){
		_name = name;
	};
	
	this.getPassword = function(){
		return _passowrd;
	};
	
	this.setPassword = function(password){
		_password = password;
	};
	
	this.show = function(){
		console.log(_id + ', ' + _email + ', ' + _name);
	};	
}


exports.constructor = SocialPerson;








