
/*
 * GET home page.
 */

exports.view = function(req, res){
  res.render('index', {
  	'projects': [
      { 'name': 'Home',
        'url': 'file:///C:/Users/Audrey/Documents/Websites/GOW-tips-website/bestGOWtips.html?search=p',
        'id': 'project0'
      },
      { 'name': 'Core Recipes',
        'url': 'file:///C:/Users/Audrey/Documents/Websites/GOW-tips-website/bestGOWtips-CoreRecipes.html',
        'id': 'project1'
      },
      { 'name': 'Gear Choices',
        'url': 'lorempixel.city.1.jpeg',
        'id': 'project2'
      },
      { 'name': 'Starter Tips',
        'url': 'lorempixel.technics.1.jpeg',
        'id': 'project3'
      },
      { 'name': 'Chatrooms',
        'url': 'lorempixel.abstract.1.jpeg',
        'id': 'project4'
      },
      { 'name': 'Traps',
        'url': 'lorempixel.abstract.8.jpeg',
        'id': 'project5'
      },
      { 'name': 'Social design',
        'image': 'lorempixel.people.2.jpeg',
        'id': 'project6'
      },
      { 'name': 'Gestural interaction',
        'image': 'lorempixel.technics.2.jpeg',
        'id': 'project7'
      },
      { 'name': 'Design tools',
        'image': 'lorempixel.city.2.jpeg',
        'id': 'project8'
      }
    ]  
  });
};