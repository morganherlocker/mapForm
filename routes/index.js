
/*
 * GET home page.
 */

exports.index = function(req, res){
  res.render('index', { title: 'Express' });
};

/*
 * GET mobile page
 */

exports.mobile = function(req, res){
  res.render('mobile', { title: 'Express' });
};