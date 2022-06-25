/* eslint-disable no-useless-constructor */
/* eslint-disable no-unused-vars */
import React, { Component } from 'react'
import DishDetailsComponent from './DishDetailsComponent';
import MenuComponent from './MenuComponent';
import Header from './Header';
import Footer from './Footer';
import {Switch, Route, Redirect, withRouter} from 'react-router-dom';
import HomeComponent from './HomeComponent';
import Contact from './ContactComponent';
import About from './AboutComponent'; 
import { connect } from 'react-redux';
import {postComment, fetchComments, fetchDishes, fetchPromos, fetchLeaders, postFeedback} from '../redux/ActionCreators';
import { actions } from 'react-redux-form';
import {TransitionGroup, CSSTransition} from 'react-transition-group';


const mapStateToProps = state => {
  return {
    dishes: state.dishes,
    comments: state.comments,
    leaders: state.leaders,
    promotions: state.promotions
  }
}

const mapDispatchToProps = (dispatch) => ({
  postComment: (dishId, rating, author, comment) => dispatch(postComment(dishId, rating, author, comment)),
  fetchDishes: () => {dispatch(fetchDishes())} ,
  resetFeedbackForm: () => {dispatch(actions.reset('feedback'))},
  fetchPromos: () => {dispatch(fetchPromos())},
  fetchComments: () => {dispatch(fetchComments())},
  fetchLeaders: () => {dispatch(fetchLeaders())},
  postFeedback: (firstname, lastname, telnum, email, agree, contactType, message) => {dispatch(postFeedback(firstname, lastname, telnum, email, agree, contactType, message))}
})

class MainComponent extends Component {
    constructor(props){
        super(props);
    
      }

      componentDidMount(){
        this.props.fetchDishes();
        this.props.fetchComments();
        this.props.fetchPromos();
        this.props.fetchLeaders();
      }


  render() {  
    const HomePage = () => {
      return <HomeComponent dish={this.props.dishes.dishes.filter((dish)=> dish.featured)[0]}
      dishesLoading={this.props.dishes.isLoading}
      dishesErr={this.props.dishes.err}
        promotion={this.props.promotions.promotions.filter((promo)=> promo.featured)[0]}
        promosLoading={this.props.promotions.isLoading}
      promosErr={this.props.promotions.err}
        leader={this.props.leaders.leaders.filter((lead)=> lead.featured)[0]}
        leadersLoading={this.props.leaders.isLoading}
        leadersErr={this.props.leaders.err}
      />
    }
    const DishWithId = ({match}) => {
      return <DishDetailsComponent dish={this.props.dishes.dishes.filter((dish) => dish.id === parseInt(match.params.dishId,10))[0]} 
      isLoading={this.props.dishes.isLoading}
      err={this.props.dishes.err}
      comments={this.props.comments.comments.filter((comment) => comment.dishId === parseInt(match.params.dishId,10))}
        postComment={this.props.postComment}
      commentsErr={this.props.comments.err}
      />
    }
    const AboutPage = () => {
      return <About leaders={this.props.leaders.leaders}
         leadersLoading={this.props.leaders.isLoading}
        leadersErr={this.props.leaders.err}
      />
    }

    return (
      <div>
         <Header/>
         <TransitionGroup>
         <CSSTransition key={this.props.location.key} classNames="page" timeout={300}>
         <Switch>
              <Route path="/home" component={HomePage}></Route>
              <Route exact path="/menu" component={() => <MenuComponent dishes={this.props.dishes}/>}></Route>
              <Route path="/menu/:dishId" component={DishWithId}></Route>
              <Route exact path="/contact" component={() => <Contact resetFeedbackForm={this.props.resetFeedbackForm} postFeedback={this.props.postFeedback}/>}/>
              <Route exact path="/aboutus" component={AboutPage}></Route>
              <Redirect to="/home"/>
            </Switch>
         </CSSTransition>
         </TransitionGroup>
          
          <Footer/>
      </div>
    )
  }
}
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(MainComponent));
