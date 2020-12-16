var SocialPerson = require('./SocialPerson').constructor;

var MAX_COMM_MANAGER_ID = 0;

function CommunityManager(person){
	var _id = ++MAX_COMM_MANAGER_ID + '';
	var _person = person;
	
	this.getId = function(){
		return _id;
	};
	
	this.setId = function(id){
		_id = id;
	};
	
	this.getPerson = function(){
		return _person;
	}
	
	this.setPerson = function(person){
		_person = person;
	};
	
	this.getEmail = function(){
		return _person.getEmail();
	};
	
	this.getName = function(){
		return _person.getName();
	};
	
	this.getPassword = function(){
		return _person.getPassword();
	};
		
	this.show = function(){
		console.log(_id + ', ' + _person.getName() + ', ' + _person.getEmail());
	};	
}

exports.constructor = CommunityManager;







