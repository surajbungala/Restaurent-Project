import React, {Component} from 'react';
import Home from './HomeComponents';
import About from './AboutusComponents';
import Menu from './MenuComponents';
import Contact from './ContactComponents';
import DishDetail from './DishdetailComponents';
import Header from './HeaderComponents';
import Footer from './FooterComponents';
import { DISHES } from '../shared/dishes';
import { COMMENTS } from '../shared/comments';
import { PROMOTIONS } from '../shared/promotions';
import { LEADERS } from '../shared/leaders';
import { Switch, Route, Redirect } from 'react-router-dom';


class Main extends Component{
  constructor(props){
    super(props);

    this.state = {
      dishes : DISHES,
      comments : COMMENTS,
      promotions : PROMOTIONS, 
      leaders : LEADERS, 
    };
  }
  

    render(){

      const HomePage = () => {
        return(
          <Home 
          dish = {this.state.dishes.filter((dish) => dish.featured)[0]}
          promotion = {this.state.promotions.filter((promotion) => promotion.featured)[0]}
          leader = {this.state.leaders.filter((leader) => leader.featured)[0]} 
          />
        );
      } 

      const Aboutus = () => {
        return(
            <About 
                leaders={this.state.leaders}
            />
        );
    };

      const DishWithId = ({match}) => {
        return(
          <DishDetail 
            dish = {this.state.dishes.filter((dish) => dish.id === parseInt(match.params.dishId,10))[0]} 
            comments = {this.state.comments.filter((comment) => comment.dishId === parseInt(match.params.dishId,0))}
          />

        );
      }

    return (
      <div className="App">
        <Header/>
        <Switch>
          <Route path='/home' component = {HomePage} />
          <Route exact path= '/menu' component = { () => < Menu dishes = {this.state.dishes}/>}/>
          <Route path = '/menu/:dishId' component = {DishWithId} />
          <Route exact path = '/contact' component={Contact} />
          <Route exact path="/aboutus" component={ Aboutus} />
          <Redirect to = "/home"  />
        </Switch>
        <Footer/>
      </div>
    );
  }
}

export default Main;
