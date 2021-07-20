var app = new Vue (
{

	el: '#app',
	data: {
		nbr: 1,
		posts: []
	},
	created() {
		this.getData()
	},
	methods: {

		getData(){

			axios.get('https://jsonplaceholder.typicode.com/todos').then( 
				response => this.posts = response.data
			).catch(
				erreur => console.log( erreur )
			)
		},
		hideWord(itemId){
			document.getElementById(itemId).style.visibility = "hidden"
		}
	}

});
