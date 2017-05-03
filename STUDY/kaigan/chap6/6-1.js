// thisの単純なサンプル
var cody = {
	living: true,
	age: 33,
	gender: 'male',
	getGender: function(){ return this.gender; }  // thisはcodyを指す
};
console.log(cody.getGender());
