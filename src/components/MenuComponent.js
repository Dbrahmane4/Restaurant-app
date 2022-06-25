import React from 'react'
import {Link} from 'react-router-dom';
// eslint-disable-next-line no-unused-vars
import { Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle, Media, Breadcrumb, BreadcrumbItem} from 'reactstrap';
import { baseUrl } from '../shared/baseURL';
import Loader from './Loader';




const RenderMenu = ({dish, onClick}) => {
    return (
    <Card>
    <Link to={`/menu/${dish.id}`}>
             <CardImg width="100%" src={baseUrl + dish.image} alt={dish.name}/>        
                <CardImgOverlay body className='ml-5'>
                <CardTitle heading>{dish.name}</CardTitle>
            </CardImgOverlay>
    </Link>
    </Card>
    )

}

const MenuComponent = (props) => {
    const menu = props.dishes.dishes.map((dish) => {
        return (
            <div key={dish.id} className="col-12 col-md-5 m-1">
                <RenderMenu dish={dish} onClick={props.onClick}/>
            </div>
        )
      });
      if(props.dishes.isLoading){
        return (
            <div className='container'>
                <div className='row'>
                    <Loader/>
                </div>
            </div>
        )
    }
    else if(props.dishes.err){
        return (
            <div className='container'>
                <div className='row'>
                    <h4>{props.dishes.err}</h4>
                </div>
            </div>
        )
    }
    else
        return (
        <div className='container'>
        <div className='row'>
        <Breadcrumb>
            <BreadcrumbItem>
                <Link to="/home">Home</Link>
            </BreadcrumbItem>
            <BreadcrumbItem active>Menu</BreadcrumbItem>
        </Breadcrumb>
        <div className='col-12'>
            <h3>Menu</h3>
            <hr/>
        </div>

        </div>
            <div className='row'>
                    {menu}
            </div>
        </div>
        )
    }

export default MenuComponent;
     
  

