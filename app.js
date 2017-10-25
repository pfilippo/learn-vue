var vm = new Vue({
	el: app,
  data: {
  	header: "todos",
    newtodo: "",
  	todos: [],
    flag: 0,
    alldone: false
  },
  computed: {
  	filtered: function() {
    	self = this
    	return this.todos.filter(function(f) {
      	if (self.flag == 0) return true
        else if (self.flag == 1) return !f.checked
        else return f.checked
      })
    }
  },
	methods: {
        addToList: function () {
        this.todos.push({id: this.todos.length, checked:false, text:this.newtodo});
        this.newtodo = "";
        },
        filter: function(f) {
        	this.flag = f
        },
        clearCompleted: function(){
        	self = this
          this.todos = this.todos.filter(function(f) {
		         return !f.checked
             })
        },
        markAll: function(){
        	self = this
        	this.todos = this.todos.map(function(c){
          	return {id: c.id, checked: self.alldone, text:c.text}
          })
        },
        selected: function(f) {
          return {selected: this.flag == f}
        },
        del: function(i)  {
          this.todos.splice(i, 1)
        } 

	}
});