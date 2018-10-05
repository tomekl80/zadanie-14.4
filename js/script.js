'use scrict';

var movies = [
	{
		id: 1,
		title: 'Harry Potter',
		desc: 'Film o czarodzieju',
		image: 'images/harry_potter.jpg'
	},
	{
		id: 2,
		title: 'Król Lew',
		desc: 'Film opowiadający historię króla sawanny',
		image: 'images/lion_king.jpg'
	},
	{
		id: 3,
		title: 'Miasto Aniołów',
		desc: 'Film o zejściu anioła na ziemię',
		image: 'images/city_of_angels.jpg'
	},
	{
		id: 4,
		title: 'Kung fu Panda',
		desc: 'Film o sympatycznej pandzie ćwiczącej kung fu',
		image: '/images/kung_fu_panda.jpg'
	},
	{
		id: 5,
		title: 'Listy do M',
		desc: 'Film ukazujący perypetie kilkoro ludzi',
		image: 'images/listy_do_m.jpg'
	}
];


var Movie = React.createClass({
	propTypes: {
		movies: React.propsTypes.object.isRequired,
	},
	render: function () {
		return (
			React.createElement(Movie, {key: movies.id}, this.props.movies.id)
			)
		
		var MovieTitle = React.createClass({
			propTypes: {
				movies: React.propsTypes.object.isRequired,
			},
			render: function () {
			React.createElement(Movie, {}, this.props.movies.title),	
			}
		})

		var MovieDescription = React.createClass({
			propTypes: {
				movies: React.propsTypes.object.isRequired,
			},
			render: function () {
				React.createElement(Movie, {}, this.props.movies.desc),
			};
		})

		var MoviesList = React.createClass({
			propTypes: {
				movies: React.propsTypes.object.isRequired,
			},
			render: function () {
				React.createElement(Movie, {src: this.props.movies.image}),
			}
		})
	}
})

var element = 
		React.createElement('div', {},
    	React.createElement('h1', {}, 'Lista filmów'),
    	React.createElement('ul', {}, moviesElements)
    );

ReactDOM.render(element, document.getElementById('app'));






















/*var image = {
	name: 'Kotek',
	src: 'http://imgur.com/n8OYCzR.png'
};

var GalleryItem = React.createClass({
	propsTypes: {
		image: React.PropTypes.object.isRequired,
	},
	render: function () {
		return (
			React.createElement('div', {},
			React.createElement('h2', {}, this.props.image.name),
			React.createElement('img', {src: this.props.image.src})
				)
			)
	},
});

var element = React.createElement(GalleryItem, {image: image});
ReactDOM.render(element, document.getElementById('app'));*/

