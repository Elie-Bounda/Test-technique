var app = new Vue (
{

	el: '#app',
	data () {
		return {
			nbr: 1,
			posts: []
		}
	},
	created() {
		this.getData()
	},
	methods: {

		getData(){

			axios.get('https://jsonplaceholder.typicode.com/todos').then(
				response => response.data.forEach(todo => {
					this.posts.push(todo.title.split(' '))
        })
			).catch(
				erreur => console.log( erreur )
			)
		},
		hideWord(index_nbr, index_word){
			this.posts[index_nbr].splice(index_word, 1);
		}
	}

});
