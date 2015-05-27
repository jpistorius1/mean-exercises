var app = angular.module('moreCartoonNostalgia');

app.service('cartoonServices', function(){
	this.allCharacters = [
			{
				title: "Dexter's Laboratory",
				imgDescription: "Best cartoon on Cartoon Network",
				imageURL: "http://static.comicvine.com/uploads/original/6/68345/1872944-dexterslaboratorywallpaper800.jpg"
			},
			{
				title: "Snoopy",
				imgDescription: "Best Sunday comic strip",
				imageURL: "http://static.giantbomb.com/uploads/scale_small/0/6420/521800-snoopy.jpeg"
			}
		]
	
	

});

