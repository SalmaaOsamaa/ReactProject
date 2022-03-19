import {React} from "react";
import {Link} from "react-router-dom";

export default function ServicesCard(props){
    return <>
    
    <div className="card" style={{width:"400px"}}>
        <img className="card-img-top" src={props.serviceImg} alt=" "/>
        <div className="card-body">
            <h5 className="card-title text">{props.Title}</h5>
            <p className="card-text">{props.Description}</p>
            <hr/>
            <p className="card-text text"><Link className="link" to={{pathname:"/taskDetails", state:{taskID:parseInt(props.ID)}}}>{props.Service1}</Link></p>
            <p className="card-text text"><Link className="link" to={{pathname:"/taskDetails", state:{taskID:parseInt(props.ID)}}}>{props.Service2}</Link></p>
            <p className="card-text text"><Link className="link" to={{pathname:"/taskDetails", state:{taskID:parseInt(props.ID)}}}>{props.Service3}</Link></p>
        </div>
    </div>
    </>
}