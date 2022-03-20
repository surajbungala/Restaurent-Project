import React, {Component} from 'react';
import Home from './HomeComponents';
import About from './AboutusComponents';
import Menu from './MenuComponents';
import Contact from './ContactComponents';
import DishDetail from './DishdetailComponents';
import Header from './HeaderComponents';
import Footer from './FooterComponents';
import { Switch, Route, Redirect, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { addComment, fetchDishes } from '../redux/ActionCreators';
import { actions } from 'react-redux-form';

const mapStateToProps = state =>{
  return{
    dishes : state.dishes,
    comments : state.comments,
    promotions : state.promotions,
    leaders : state.leaders
  };
}

const mapDispatchToProps = dispatch => ({
  addComment: (dishId, rating, author, comment) => 
  dispatch(addComment(dishId, rating, author, comment)),
  fetchDishes: () => { dispatch(fetchDishes())},
  resetFeedbackForm: () => { dispatch(actions.reset('feedback'))} 
});
class Main extends Component{
  
  /*constructor(props){
      super(props);
    }*/

    componentDidMount(){
      this.props.fetchDishes();
    }

    render(){
      const HomePage = () => {
        return(
          <Home 
          dish = {this.props.dishes.dishes.filter((dish) => dish.featured)[0]}
          dishesLoading = {this.props.dishes.isLoading}
          dishErrMess = {this.props.dishes.errMess}
          promotion = {this.props.promotions.filter((promotion) => promotion.featured)[0]}
          leader = {this.props.leaders.filter((leader) => leader.featured)[0]} 
          />
        );
      } 

      const Aboutus = () => {
        return(
            <About 
                leaders={this.props.leaders}
            />
        );
    };

      const DishWithId = ({match}) => {
        return(
          <DishDetail 
            dish = {this.props.dishes.dishes.filter((dish) => dish.id === parseInt(match.params.dishId,10))[0]} 
            isLoading = {this.props.dishes.isLoading}
            errMess = {this.props.dishes.errMess}
            comments = {this.props.comments.filter((comment) => comment.dishId === parseInt(match.params.dishId,0))}
            addComment={this.props.addComment}
          />

        );
      }

    return (
      <div className="App">
        <Header/>
        <Switch>
          <Route path='/home' component = {HomePage} />
          {/**<Route exact path='/aboutus' component={() => <Aboutus leaders={this.props.leaders} />} />*/}
          <Route exact path= '/menu' component = { () => < Menu dishes = {this.props.dishes}/>}/>
          <Route path = '/menu/:dishId' component = {DishWithId} />
          <Route exact path = '/contact' component={() => <Contact resetFeedbackForm = {this.props.resetFeedbackForm}/>} />
          <Route exact path="/aboutus" component={() => <Aboutus leaders={this.props.leaders} />}/>
          <Redirect to = "/home" />
        </Switch>
        <Footer/>
      </div>
    );
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Main));
