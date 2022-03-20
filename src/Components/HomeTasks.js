import React from "react";
import { Link } from "react-router-dom";

export default function HomeTasks(){

    return <>
    <div className="container text-center m-5">
        <Link to={{pathname:"/taskDetails", state:{taskID:1}}} className="btn btn-primary px-4 py-2 m-1">Mounting</Link>
        <Link to={{pathname:"/taskDetails", state:{taskID:2}}} className="btn btn-primary px-4 py-2 m-1">Furniture Assembly</Link>
        <Link to={{pathname:"/taskDetails", state:{taskID:3}}} className="btn btn-primary px-4 py-2 m-1">Help Moving</Link>
        <Link to={{pathname:"/taskDetails", state:{taskID:4}}} className="btn btn-primary px-4 py-2 m-1">Cleaning</Link>
        <Link to={{pathname:"/taskDetails", state:{taskID:5}}} className="btn btn-primary px-4 py-2 m-1">Delivery</Link>
        <Link to={{pathname:"/taskDetails", state:{taskID:6}}} className="btn btn-primary px-4 py-2 m-1">Home Repairs</Link>
        <br/>
        <Link to={"/services"} className="btn btn-primary px-4 py-2 m-1">Services</Link>
    </div>
    </>
}