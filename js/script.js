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

var MovieTitle = React.createClass({
	propTypes: {
		movie: React.PropTypes.string.isRequired,
	},
	render: function() {
		return (
			React.createElement('h2', {}, this.props.movie)
		);
	}
});

var MovieDescription = React.createClass({
	propTypes: {
		desc: React.PropTypes.string.isRequired,
	},
	render: function() {
		return (
			React.createElement('p', {}, this.props.desc)
		);
	}
});

var MovieImage = React.createClass({
	propTypes: {
		image: React.PropTypes.string.isRequired,
	},
	render: function() {
		return (
			React.createElement('img', {src: this.props.image},)
		);
	}
});

var Movie = React.createClass({
	propTypes: {
		movie: React.PropTypes.object.isRequired,
	},
	render: function() {
		return (
			React.createElement('li', {key: this.props.movie.id},
				React.createElement(MovieTitle, {movie: this.props.movie.title}),
				React.createElement(MovieDescription, {desc: this.props.movie.desc}),
				React.createElement(MovieImage, {image: this.props.movie.image})
			)
		);
	}
});

var MoviesList = React.createClass({
	propTypes: {
		list: React.PropTypes.array.isRequired,
	},
	render: function() {
		var moviesElements = this.props.list.map(function (movie) {
			return (
				React.createElement(Movie, {movie: movie, key: movie.id})
			)
		});
			return (
    			React.createElement('ul', {}, moviesElements)
		)
	}
})

var element = 
	React.createElement('div', {},
    	React.createElement('h1', {}, 'Lista filmów'),
    	React.createElement(MoviesList, {list: movies})
    );

ReactDOM.render(element, document.getElementById('app'));