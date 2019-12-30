import React,{Component} from 'react';
import Card from '../components/Card';





class List extends Component{


  constructor(props){
       super(props)

       this.state={
        data:[],
        loading:true
       }
  }


  async componentDidMount () {

    const movies = await fetch('../../assets/db.json')

    const moviesJson = await movies.json();

    console.log('hey')

     console.log(movies,"movies");
    if(moviesJson){

      this.setState({
        data:moviesJson,
        loading:false
      })
    }
 }


  render(){

    const {data,loading} = this.state;


    if(loading){

      <h1>Page is Loading</h1>
    }


    return( 

      <div class="row">
      {
      data.map((movie) =>
      <div class="col-sm-2">
          <Card key={movie.id} movie={movie}/>
      </div>
    )}

    </div>
    )
  }
}



export default List;