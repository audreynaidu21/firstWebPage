/*
* Project Route
*
*/

exports.viewProject = function(req, res){
	// controller
	var name = req.params.name;
	console.log("The Project Name is: " + name);
	res.render('project',{
		'projectName': name

	});
};