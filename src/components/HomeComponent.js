/* eslint-disable no-unused-vars */
import React from 'react'
import { Card, CardBody, CardImg, CardSubtitle, CardText, CardTitle } from 'reactstrap'
import { baseUrl } from '../shared/baseURL';
import Loader from './Loader';
import { FadeTransform } from 'react-animation-components';


function RenderCard({item, isLoading, err}){
    if(isLoading){
        return <Loader/>
    }
    else if(err){
        return <h4>{err}</h4>
    }
    else{
        return (
            <FadeTransform
                in
                transformProps={{
                    exitTransform: 'scale(0.5) translateY(-50%)'
                }}>
             <Card>
                <CardImg src={baseUrl + item.image} alt={item.name}/>
                <CardBody>
                    <CardTitle>
                        {item.name}
                    </CardTitle>
                    {item.designation ? <CardSubtitle>{item.designation}</CardSubtitle> : null}
                    <CardText>{item.description}</CardText>
                </CardBody>
            </Card>
            </FadeTransform>
       
        )
    }
       
}

function HomeComponent(props) {
  return (
    <div className='container'>
     <div className='col-12'>
        <h3>Home</h3>
        <hr/>
      </div>
    <div className='row align-items-start'>
    <div className='col-12 col-md m-1'>
        <RenderCard item={props.dish} isLoading={props.dishesLoading} err={props.dishesErr}/>
    </div>
    <div className='col-12 col-md m-1'>
    <RenderCard item={props.promotion} isLoading={props.promosLoading} err={props.promosErr}/>

    </div>
    <div className='col-12 col-md m-1'>
    <RenderCard item={props.leader} isLoading={props.leadersLoading} err={props.leadersErr}/>

    </div>
    </div>
   </div>
  )
}

export default HomeComponent