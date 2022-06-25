/* eslint-disable no-unused-vars */
import React from 'react'
// eslint-disable-next-line no-unused-vars
import { Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle, Media, Breadcrumb, BreadcrumbItem, Button} from 'reactstrap';
import {Link} from 'react-router-dom';
import CommentFormComponent from './CommentFormComponent'
import Loader from './Loader';
import { baseUrl } from '../shared/baseURL';
import { FadeTransform, Fade, Stagger } from 'react-animation-components'

    

   const RenderDish = ({dish, comments, postComment}) => {
        if(dish!=null){
            // console.log(dish.id);
            return (
                <>
                <Card className='col-12 col-md-5'>
                 <CardImg width="50%" src={baseUrl + dish.image} alt={dish.name}/>
                <CardBody>
                <CardTitle heading>{dish.name}</CardTitle>
                <CardText>{dish.description}</CardText>
                </CardBody>
                </Card>

                <Card className='col-12 col-md-5'>
                <h3>Comments</h3>
                <Stagger in>
                {comments.map((d) => {
                        return (
                            <Fade in>
                            <Media list>{d.comment}</Media>
                            <Media list>-- {d.author}, {new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: '2-digit'}).format(new Date(Date.parse(d.date)))}</Media>
                            </Fade>
                                
                            
                        )
                    })}
                </Stagger>
                 
                    <CommentFormComponent dishId={dish.id} postComment={postComment}/>
                </Card>
                </>
                
            )
        }else{
            return <div></div>
        }
    }

    const DishDetailsComponent = (props) => {
        if(props.isLoading){
            return (
                <div className='container'>
                    <div className='row'>
                        <Loader/>
                    </div>
                </div>
            )
        }
        else if(props.err){
            return (
                <div className='container'>
                    <div className='row'>
                        <h4>{props.err}</h4>
                    </div>
                </div>
            )
        }
        else
            return (
                <div className='container'>
                <div className="row">
                        <Breadcrumb>

                            <BreadcrumbItem><Link to="/menu">Menu</Link></BreadcrumbItem>
                            <BreadcrumbItem active>{props.dish.name}</BreadcrumbItem>
                        </Breadcrumb>
                        <div className="col-12">
                            <h3>{props.dish.name}</h3>
                            <hr />
                        </div>                
                    </div>
                <div className='row'>
                    <RenderDish dish={props.dish} comments={props.comments} postComment={props.postComment}/>
                </div>
                    
                </div>
                )
    }

    export default DishDetailsComponent;
    

