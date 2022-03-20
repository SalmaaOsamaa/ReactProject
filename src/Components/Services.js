import {React} from "react";
import headerImg from "../tools.jpg";
import ServicesCard from "./ServicesCard";
import service1Img from "../mounting.jpg";
import service2Img from "../furnitureassembly.jpg";
import service3Img from "../moving.jpg";
import service4Img from "../cleaning.jpg";
import service5Img from "../delivery.jpg";
import service6Img from "../handyman.jpg";


export default function Services(){
    return <>
    <div>
        <h1 className="text-center title">What do you need help with?</h1>
        <img src={headerImg} alt=" " style={{width:"100%"}}/>
        <h2 className="text-center mt-5 mb-3">Let Taskers help tackle your to-do list!</h2>
        <div className="container">
        <div className="d-flex justify-content-around row row-cols-3">
            <ServicesCard ID="1" Title="Mounting & Installation" serviceImg={service1Img} Description="Wall Mounting" Service1="TV Mounting" Service2="Shelf Mounting" Service3="Hanging Curtains & Installing Blinds"/>
            <ServicesCard ID="2" Title="Furniture Assembly" serviceImg={service2Img} Description="Furniture Assembly" Service1="Patio Furniture Assembly" Service2="Desk Assembly" Service3="Couch Assembly"/>
            <ServicesCard ID="3" Title="Moving Services" serviceImg={service3Img} Description="From the heavy lifting to unpacking and organizing make your move with Sahla!" Service1="Packing Services" Service2="Furniture Movers" Service3="One Item Movers"/>
            <ServicesCard ID="4" Title="Cleaning" serviceImg={service4Img} Description="Taskers will make your home sparkle!" Service1="House Cleaning" Service2="Moveing Cleaning" Service3="Garage Cleaning"/>
            <ServicesCard ID="5" Title="Shopping + Delivery" serviceImg={service5Img} Description="Get anything from groceries to furniture" Service1="Deliver Big Piece of Furniture" Service2="Drop Off Donations" Service3="Shipping"/>
            <ServicesCard ID="6" Title="Handyman" serviceImg={service6Img} Description="Hire a Tasker for help around the house" Service1="Home Repairs" Service2="Painting" Service3="Electrical Help"/>
        </div>
        </div>
    </div>
    </>
}