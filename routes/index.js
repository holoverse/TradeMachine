
/*
 * GET home page.
 */

 
module.exports = {

	index: function(req, res){
		var asks = {};
  		var bids = {};

		res.render('homepage2', { title: 'TradeMachine', locals: {data: {asks:asks, bids:bids} }});
	}
}
