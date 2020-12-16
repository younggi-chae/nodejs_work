var SocialPerson = require('./SocialPerson').constructor;
var Community = require('./Community').constructor;

var communities = new Array(0);
var persons = new Array(0);
var adminPerson = new SocialPerson("aa@a.com", "홍길동", "1");


function findPersonByEmail(email){
	for(var i=0;i<persons.length;i++){
		if(persons[i].getEmail() === email){
			return persons[i];
		}
	}
	
	return null;
}


function registPerson(person){
	var exist = findPersonByEmail(person.getEmail());
	
	if(exist !== null){
		return;
	}
	
	persons.push(person);	
}

function registCommunity(name, desc, adminPerson){
	registPerson(adminPerson);
	
	var community = new Community(name, desc, adminPerson);
	communities.push(community);
	
	return community.getId();
}

function findAllCoummunities(){
	return communities;
}


function findCommunity(id){
	for(var i=0;i<communities.length;i++){
		if(communities[i].getId() === id){
			return communities[i];
		}
	}
	
	return null;
}


function countMember(id){
	var community = findCommunity(id);
	
	return community.getMemberCount();
}


function joinAsMember(id, person){
	registPerson(person);
	var community = findCommunity(id);
	community.addMember(person);
}


(function(){
	registCommunity("건강 커뮤니티", "건강을 도모함", adminPerson);
	registCommunity("IT 커뮤니티", "IT을 도모함", adminPerson);
	registCommunity("프로야구 커뮤니티", "삼성을 도모함", adminPerson);
	registCommunity("종교 커뮤니티", "신을 도모함", adminPerson);
})();


function CommunityService(){
	this.registCommunity = registCommunity;
	this.findAllCommunities = findAllCoummunities;
	this.findCommunity = findCommunity;
	this.countMember = countMember;
	this.joinAsMember = joinAsMember;
}


exports.CommunityService = new CommunityService();









