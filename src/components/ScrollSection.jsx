import React from 'react';
import AOS from 'aos';
import '../../node_modules/aos/dist/aos.css'
import World from './World';
import ReactHtmlParser from 'react-html-parser'

export default function Pillers(prop) {

    AOS.init({
        easing: 'ease-out-back',
        duration: 1000
    });
    // console.log(prop)
    return (
       <>
    <section>
    <div className="site__content">
        <div className="container">
            <section id="Section-OurMission" className="grid grid--01-our-mission">
                <div>
                    <h2 className="h1">{prop.mission.ourMissionSectionTitle}</h2>
                    {prop.mission.ourMissionSubTitle != "" ? 
                    <h3 className="h2">{prop.mission.ourMissionSubTitle}</h3>
                    : "" }
                    {ReactHtmlParser(prop.mission.ourMissionSectionDesc)}
                </div>
            </section>
            <section id="Section-HowWeDidThisYear" className="grid grid--01-how-we-did">
                <h2 className="h1">{prop.commerce.commerceSectionTitle}</h2>
                {prop.commerce.commerceData.map((value,key)=>{return(
                <div key={key} className="stat">
                    <header className="stat__header">
                        <div className="stat__bubble aos-init" data-aos={"zoom-in"}></div>
                        <h4 className="stat__heading">
                            <span className="stat__stat"><span className="stat__number">{value.commerceIconText}</span>
                                {/* <span className="stat__unit">M
                                     <span className="stat__difference"><img src="../images/arrow-down.svg"
                                            width="18" height="25" alt="down" /><span className="u-visually-hidden">
                                            down</span></span> </span> */}
                                            </span> </h4>
                    </header>
                    <div className="stat__body">
                        {ReactHtmlParser(value.commerceDesc)} 
                    </div>
                </div>
                ) })}
            </section>
            <section id="Section-Education" className="grid grid--01-education">
                <h2 className="h1">{prop.education.educationSectionTitle}</h2>
                <blockquote className="quote">
                    <div className="quote__bubble aos-init" data-aos={"zoom-in"}>
                    </div>
                    {ReactHtmlParser(prop.education.educationQuote)}
                </blockquote>

             {/*   {prop.education.educationData.map((value1,key1)=>{return(
                <div key={key1} className="stat">
                    <header className="stat__header">
                        <div className="stat__bubble aos-init" data-aos={"zoom-in"}></div>
                        <h4 className="stat__heading">
                            <span className="stat__stat"><span className="stat__number">{value1.statNo}</span></span> <span
                                className="stat__title">{value1.statTitle}</span>
                        </h4>
                    </header>
                    <div className="stat__body">
                        {ReactHtmlParser(value1.statDesc)}
                    </div>
                </div> 
                ) })} */}
            </section>
            <section id="Section-Education-Climate" className="grid grid--02-education-climate">
                <div>
                    <h3>{prop.globe.globeSectionTitle}</h3>
                    <h2 className="h1">{prop.globe.globeSubTitle}</h2>
                </div>
                <div className="world" style={{marginTop: "-95px",marginLeft: "-135px"}}>
                    {/* <div className="world-bg"></div>
                    <div className="world-globe">
                        <div className="world-globe-pole"></div>
                        <div className="world-globe-doms-container"></div>
                        <div className="world-globe-halo"></div>
                    </div> */}
                    <World/>
                 </div>
                <blockquote className="quote">
                    <div className="quote__bubble aos-init" data-aos={"zoom-in"}>
                    </div>
                    {ReactHtmlParser(prop.globe.globeDesc)}
                    <footer>
                    </footer>
                </blockquote>
                <div className="update update--right">
                    <div className="update__inner aos-init" data-aos="fade-up" data-aos-anchor-placement="top-bottom">
                        {ReactHtmlParser(prop.globe.globeMessage)}
                    </div>
                </div>
            </section>
            <section id="Section-Education-Inequality" className="grid grid--03-education-inequality">
                <header>
                    <h2 className="h1">{prop.inequility.inEquilitySectionTitle}</h2>
                </header>
                <div>
                    <h3 className="h2">{prop.inequility.inEquilitySubTitle}</h3>
                    {/* {ReactHtmlParser(prop.inequility.inEquilityDesc)} */}
                </div>
                <div>
                <section id="read" className="shelf shelf--intro">
                        <div className="shelf__shelves-wrapper">
                            <ul className="d-flex shelf__shelf shelf__shelf--top">
                                <li className="align-items-end book d-flex">
                <div className="book__block book__block--0 cursor-pointer" data-toggle="modal" data-target="#bigfriendship"><span>{prop.inequility.bookData[0].bookname}</span></div>
                                </li>
                                <li className="align-items-end book d-flex">
                                        <div className="book__block book__block--1 cursor-pointer" data-toggle="modal" data-target="#reallife"><span>{prop.inequility.bookData[1].bookname}</span></div>
                                </li>
                                <li className="align-items-end book d-flex">
                                    <div className="book__block book__block--2 cursor-pointer" data-toggle="modal" data-target="#minorfeelings"><span>{prop.inequility.bookData[2].bookname}</span></div>
                                    <img className="book__plant" src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzkxIiBoZWlnaHQ9IjY5NSIgdmlld0JveD0iMCAwIDM5MSA2OTUiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxnIGNsaXAtcGF0aD0idXJsKCNjbGlwMCkiPgo8cGF0aCBkPSJNMTI5LjY4NyA1MDkuODQyQzExOS41OCA1NzMuNzIzIDIyNC4zNzkgNjkxIDIyNC4zNzkgNjkxSDMwNS4zNzJDMzA1LjM3MiA2OTEgMzg5LjE5MyA1NjcuNzYxIDM4Ny45ODcgNTA1Ljg3NUMzODcuMzE1IDQ3MS4zMzcgMzYyLjcyIDQ0MS41MyAyODcuNTIzIDQyMi4zNzFDMjY5Ljg1OSA0MTcuMjIxIDI1Mi41OSA0MTMuMzI0IDI1Ny4yNzIgNDAzLjUxM0MyNjIuODU5IDM5MS45MTUgMzIxLjk0NiAzOTQuNDIgMzIxLjk0NiAzOTQuNDJMMzIzLjEyOCAzODZIMTc2LjE2NEwxNzYuNjA0IDM5NC4yODFDMTc2LjYwNCAzOTQuMjgxIDI0OS43MTUgMzk1LjAyMyAyNDcuODg0IDQxMy4yMDhDMjQ1LjkzNyA0MzIuMzQ1IDE0Mi4wNDIgNDMxLjkyNyAxMjkuNjg3IDUwOS44NDJaIiBzdHJva2U9IiMyMDdEN0EiIHN0cm9rZS13aWR0aD0iMS41IiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiLz4KPHBhdGggZD0iTTI0OC41NDUgMzQ1Ljk3MkMyMzQuMTUyIDM0NS4xMzIgMTM0LjMwOCAzMDMuMjk4IDE0OS4wMzIgMjEzLjM3N0MxNTIuNDggMTkyLjQ0MiAxNTAuNDU5IDE2NS4yNSAxNDYuMzE4IDE0NC40MzVDMTQxLjk0MSAxMjIuMDU5IDEyNi4wMDMgOTguMjYgMTMwLjM1NyA3NS44ODk1QzEzMi41OTIgNjQuNDU1MSAxMzguNzY4IDU0LjQxMjEgMTQyLjk0MiA0My42MTYyQzE0Ny42NjQgMzEuMzEyNiAxNDkuNzc2IDE4LjE2MDcgMTQ5LjE0NCA1QzE3MC43MzQgMTIuNzk3NSAxOTYuNTEgMzguMjM4MyAyMDMuMDc5IDQ1LjM4MDhDMjIzLjU3IDY3LjYwNzQgMjI3Ljg5NSAxMDMuNTk2IDI1MS40MTcgMTI2LjQyOEMyNTUuNDUxIDEzMC4zMyAyNTkuMjk1IDEzNC4zOTUgMjYzLjMgMTM4LjMxM0MzMDIuMTI1IDE3Ni41NDMgMzEwLjk5NyAyMjAuOTY2IDMwMy44MTIgMjU5LjU3M0MyOTcuODIzIDI5MS44MzMgMjc2LjYxOCAzMzAuNDk5IDI0OC41NDUgMzQ1Ljk3MloiIHN0cm9rZT0iIzIwN0Q3QSIgc3Ryb2tlLXdpZHRoPSIxLjUiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIvPgo8cGF0aCBkPSJNMTQ5LjE0NCA1QzE0OS4xNDQgNSAzMjAuMTg3IDMwOS45ODcgMjI0LjcyOSA2NjYuNzk4IiBzdHJva2U9IiMyMDdEN0EiIHN0cm9rZS13aWR0aD0iMS41IiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiLz4KPHBhdGggZD0iTTE3Ny43ODIgMzAzLjY0OUMxOTkuNjg2IDMxMy4zNDggMjIyLjY3MiAzMjAuMzY5IDI0Ni4yNTQgMzI0LjU2NEMyNDYuMjU0IDMyNC41NjQgMjY0LjYxMyAzMTguNzM2IDI4OS40MjEgMzAxLjczNCIgc3Ryb2tlPSIjMjA3RDdBIiBzdHJva2Utd2lkdGg9IjEuNSIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIi8+CjxwYXRoIGQ9Ik0xNTcuMDg0IDI3My42OTJDMjA3LjYzNSAyOTYuNzU1IDI0My4xMDIgMzAzLjk3NiAyNDMuMTAyIDMwMy45NzZDMjQzLjEwMiAzMDMuOTc2IDI2OS43MTQgMjk2LjQyNCAzMDAuOTI4IDI3MS43MjQiIHN0cm9rZT0iIzIwN0Q3QSIgc3Ryb2tlLXdpZHRoPSIxLjUiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIvPgo8cGF0aCBkPSJNMTQ4LjY5IDI0OC4wMTFDMjAyLjMzIDI3My4wNjIgMjQwLjEyIDI4My43OTYgMjQwLjEyIDI4My43OTZDMjQwLjEyIDI4My43OTYgMjg3LjI2NiAyNjEuMTU4IDMwNi4xMTcgMjQyLjAyNCIgc3Ryb2tlPSIjMjA3RDdBIiBzdHJva2Utd2lkdGg9IjEuNSIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIi8+CjxwYXRoIGQ9Ik0xNDguMDA1IDIyOC4xNzdDMTc2Ljc1MSAyNDIuNTg4IDIwNi40NiAyNTQuOTc1IDIzNi45MjEgMjY1LjI0OUMyMzYuOTIxIDI2NS4yNDkgMjc4LjU3OSAyNDYuODU4IDMwNi40MTggMjIyLjM4IiBzdHJva2U9IiMyMDdEN0EiIHN0cm9rZS13aWR0aD0iMS41IiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiLz4KPHBhdGggZD0iTTE0OS41MjIgMjA3Ljg5NkMxOTguMDE0IDIzMi44NTggMjMyLjc0MiAyNDQuMzUyIDIzMi43NDIgMjQ0LjM1MkMyMzIuNzQyIDI0NC4zNTIgMjgwLjYxNiAyMjQuNDQyIDMwMi41OTcgMjAyLjYyMSIgc3Ryb2tlPSIjMjA3RDdBIiBzdHJva2Utd2lkdGg9IjEuNSIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIi8+CjxwYXRoIGQ9Ik0xNTAuNDYzIDE4NS45NjRDMTg1LjU3NyAyMDQuNjE4IDIyNy4yNjEgMjIxLjAxNCAyMjcuMjYxIDIyMS4wMTRDMjI3LjI2MSAyMjEuMDE0IDI3My4wMzUgMjAxLjYzIDI5NC42NTUgMTgyLjc0OCIgc3Ryb2tlPSIjMjA3RDdBIiBzdHJva2Utd2lkdGg9IjEuNSIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIi8+CjxwYXRoIGQ9Ik0xNDkuMjk5IDE2NC4xM0MxNDkuMjk5IDE2NC4xMyAxOTMuNzY3IDE4NS41MzkgMjIxLjA0MiAxOTYuNDMxQzIyMS4wNDIgMTk2LjQzMSAyNTkuOTI4IDE4My44MzcgMjgyLjg2IDE2MS43OTkiIHN0cm9rZT0iIzIwN0Q3QSIgc3Ryb2tlLXdpZHRoPSIxLjUiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIvPgo8cGF0aCBkPSJNMTQ1LjI2NCAxNDEuNDI0QzE4MS44MzggMTU4LjMzIDIxNC42NjEgMTcyLjg0MiAyMTQuNjYxIDE3Mi44NDJDMjE0LjY2MSAxNzIuODQyIDI1MS4yMTIgMTU4LjIxNyAyNjkuMDI2IDE0NC40MzIiIHN0cm9rZT0iIzIwN0Q3QSIgc3Ryb2tlLXdpZHRoPSIxLjUiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIvPgo8cGF0aCBkPSJNMTM4LjA2MyAxMTguOTAxQzE3My45NjkgMTM2LjUwNyAyMDguMTIgMTUxLjI4NCAyMDguMTIgMTUxLjI4NEMyMDguMTIgMTUxLjI4NCAyMzcuMzk4IDE0Mi42MDMgMjU0LjM4NCAxMjkuOTU0IiBzdHJva2U9IiMyMDdEN0EiIHN0cm9rZS13aWR0aD0iMS41IiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiLz4KPHBhdGggZD0iTTEzMC42NzkgOTcuMDM0NkMxNjEuOTcxIDExMS40NTMgMjAwLjc2MyAxMjguNDYgMjAwLjc2MyAxMjguNDZDMjAwLjc2MyAxMjguNDYgMjMxLjUxMyAxMTguNTI4IDI0MC41NDkgMTEyLjU4NyIgc3Ryb2tlPSIjMjA3RDdBIiBzdHJva2Utd2lkdGg9IjEuNSIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIi8+CjxwYXRoIGQ9Ik0xMjkuMzMgNzkuNTc2OEMxMjkuMzMgNzkuNTc2OCAxNTcuODk1IDkyLjQwNzIgMTkzLjY1OSAxMDcuNzgzQzIwNS45NzUgMTAzLjc5OSAyMTcuOTQ1IDk4LjgxMSAyMjkuNDQ4IDkyLjg2OTkiIHN0cm9rZT0iIzIwN0Q3QSIgc3Ryb2tlLXdpZHRoPSIxLjUiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIvPgo8cGF0aCBkPSJNMTMzLjUwOSA2NC42MjhDMTY3LjIwNSA3OS4xMzk1IDE4Ni4wNTggODYuOTY3OCAxODYuMDU4IDg2Ljk2NzhDMTg2LjA1OCA4Ni45Njc4IDIwNy4zNyA4MC44NjUyIDIyMC41NDMgNzIuNzI4IiBzdHJva2U9IiMyMDdEN0EiIHN0cm9rZS13aWR0aD0iMS41IiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiLz4KPHBhdGggZD0iTTEzOS4yNDYgNTEuNTQxQzEzOS4yNDYgNTEuNTQxIDE2MC4yOTEgNjAuMzMwNiAxNzcuOTg3IDY3LjA1OTJDMTc3Ljk4NyA2Ny4wNTkyIDE5Mi4wNzYgNjEuMzY5IDIwOC40OCA1Mi43NDEyIiBzdHJva2U9IiMyMDdEN0EiIHN0cm9rZS13aWR0aD0iMS41IiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiLz4KPHBhdGggZD0iTTE0NC41MTQgNDAuMTI1MkMxNDQuNTE0IDQwLjEyNTIgMTYwLjIyMiA0Ni40MzQ2IDE3MC44MzEgNTAuNTIxNUMxNzguOTQ0IDQ2LjI5MiAxODYuODA3IDQxLjU1NTEgMTk0LjM3NiAzNi4zMzc1IiBzdHJva2U9IiMyMDdEN0EiIHN0cm9rZS13aWR0aD0iMS41IiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiLz4KPHBhdGggZD0iTTE0OC4wOTcgMjcuMzEyNEMxNTQuNjI2IDI4Ljg1MTQgMTYyLjgzMiAzMS42NzExIDE2Mi44MzIgMzEuNjcxMUMxNjIuODMyIDMxLjY3MTEgMTY5LjY0OCAzMC45OTg4IDE4MC4xNTggMjQuMDU1MyIgc3Ryb2tlPSIjMjA3RDdBIiBzdHJva2Utd2lkdGg9IjEuNSIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIi8+CjxwYXRoIGQ9Ik0xNDkuMDcxIDE2LjQwMTVDMTUxLjQzMyAxNi42NTc3IDE1My43NzEgMTcuMTI0OCAxNTYuMDUzIDE3Ljc5NjdDMTU5LjYyOCAxNi44NTk5IDE2My4wODMgMTUuNTc3MyAxNjYuMzY1IDEzLjk2ODUiIHN0cm9rZT0iIzIwN0Q3QSIgc3Ryb2tlLXdpZHRoPSIxLjUiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIvPgo8L2c+CjxkZWZzPgo8Y2xpcFBhdGggaWQ9ImNsaXAwIj4KPHJlY3Qgd2lkdGg9IjM5MSIgaGVpZ2h0PSI2OTUiIGZpbGw9IndoaXRlIi8+CjwvY2xpcFBhdGg+CjwvZGVmcz4KPC9zdmc+Cg==" alt="Plant"/>
                                </li>
                                <li className="align-items-end book d-flex">
                                        <div className="book__block book__block--3 cursor-pointer" data-toggle="modal" data-target="#homie"><span>{prop.inequility.bookData[3].bookname}</span></div>
                                </li>
                                <li className="align-items-end book d-flex">
                                        <div className="book__block book__block--4 cursor-pointer" data-toggle="modal" data-target="#blackwomen"><span>{prop.inequility.bookData[4].bookname}</span></div>
                                </li>
                            </ul>
                        </div>
                    </section>
                </div>
                <div className="update update--left">
                    <div className="update__inner aos-init" data-aos={"fade-up"} data-aos-anchor-placement={"top-bottom"}>
                        {ReactHtmlParser(prop.inequility.inEquilityMessage)}

                    </div>

                </div>
            </section>
            <section id="Section-Education-Public-Awareness" className="grid grid--02-education-public-awareness">
                <div>
                    <h3>{prop.awareness.awarenessSectionTitle}</h3>
                    <h2 className="h1">{prop.awareness.awarenessSubTitle}</h2>
                </div>
                <div>
                    <div className="container-book">
                        <div className="book">
                            <div className="gap"></div>
                            <div className="pages">
                                <div className="page"></div>
                                <div className="page"></div>
                                <div className="page"></div>
                                <div className="page"></div>
                                <div className="page"></div>
                                <div className="page"></div>
                            </div>
                            <div className="flips">
                                <div className="flip flip1">
                                    <div className="flip flip2">
                                        <div className="flip flip3">
                                            <div className="flip flip4">
                                                <div className="flip flip5">
                                                    <div className="flip flip6">
                                                        <div className="flip flip7"></div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <blockquote className="quote">
                    <div className="quote__bubble aos-init" data-aos={"zoom-in"}>
                    </div>
                    {ReactHtmlParser(prop.awareness.awarenessDesc)}
                    <footer>
                    </footer>
                </blockquote>
                {/* <div className="update update--left">
                    <div className="update__inner aos-init" data-aos={"fade-up"} data-aos-anchor-placement={"top-bottom"}>
                        {ReactHtmlParser(prop.awareness.awarenessMessage)}
                    </div>
                </div> */}
            </section>
            <section id="Section-OurJourney" className="grid grid--03-our-journey">
                <h2>{prop.journeyOne.ourJourneySectionTitle}</h2>
                {prop.journeyOne.ourJourneyData.map((value2,key2)=>{return(
                <div key={key2} className="stat">
                    <header className="stat__header">
                        <div className="stat__bubble aos-init" data-aos={"zoom-in"}></div>
                        <h4 className="stat__heading">
                <span className="stat__stat"><span className="stat__number">{value2.ourJourneyIconText}</span></span> </h4>
                    </header>
                    <div className="stat__body">
                        <div className="stat__content">
                            {ReactHtmlParser(value2.ourJourneyDesc)}
                        </div>
                    </div>
                </div>
               ) })}
            </section>
            {/* <section id="Section-KeyFeaturesOfOurPlan" className="grid grid--03-key-features">
                <h2 className="h1">{prop.journeyOne.ourJourneySubTitle}</h2>
                <div>
                {ReactHtmlParser(prop.journeyOne.ourJourneyMessages)}
                </div>
            </section> */}

        </div>
    </div>
</section>

{/* modal start */}
<section>
    <div className="modal fade symbio-modal text-dark" id="bigfriendship1111" tabIndex="-1" aria-labelledby="bigfriendshipLabel" style={{display: "none"}} aria-hidden="true">
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="border-0 modal-header">
                <button type="button" className="badge border-0 p-1 text-secondary" data-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true" className="font-size-0pt8rem"><svg width="1.5em" height="1em" viewBox="0 0 16 16" className="bi bi-arrow-left pr-1" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                      <path fillRule="evenodd" d="M5.854 4.646a.5.5 0 0 1 0 .708L3.207 8l2.647 2.646a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 0 1 .708 0z"></path>
                      <path fillRule="evenodd" d="M2.5 8a.5.5 0 0 1 .5-.5h10.5a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"></path>
                    </svg>Back</span>
                </button>
              </div>
            <div className="modal-body overflow-auto">
                <h2 className="modal-title pb-4" id="bigfriendshipLabel">{prop.inequility.bookData[0].bookname}</h2>
                {ReactHtmlParser(prop.inequility.bookData[0].bookdesc)}
            </div>
          
          </div>
        </div>
      </div>
      <div className="modal fade symbio-modal text-dark" id="reallife1111" tabIndex="-1" aria-labelledby="reallifeLabel" style={{display:" none"}} aria-hidden="true">
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="border-0 modal-header">
                <button type="button" className="badge border-0 p-1 text-secondary" data-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true" className="font-size-0pt8rem"><svg width="1.5em" height="1em" viewBox="0 0 16 16" className="bi bi-arrow-left pr-1" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                      <path fillRule="evenodd" d="M5.854 4.646a.5.5 0 0 1 0 .708L3.207 8l2.647 2.646a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 0 1 .708 0z"></path>
                      <path fillRule="evenodd" d="M2.5 8a.5.5 0 0 1 .5-.5h10.5a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"></path>
                    </svg>Back</span>
                </button>
              </div>
            <div className="modal-body overflow-auto">
                <h2 className="modal-title pb-4" id="reallifeLabel">{prop.inequility.bookData[1].bookname}</h2>
                {ReactHtmlParser(prop.inequility.bookData[1].bookdesc)}
            </div>
            
          </div>
        </div>
      </div>
      <div className="modal fade symbio-modal text-dark" id="minorfeelings1111" tabIndex="-1" aria-labelledby="minorfeelingsLabel" style={{display: "none"}} aria-hidden="true">
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="border-0 modal-header">
                <button type="button" className="badge border-0 p-1 text-secondary" data-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true" className="font-size-0pt8rem"><svg width="1.5em" height="1em" viewBox="0 0 16 16" className="bi bi-arrow-left pr-1" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                      <path fillRule="evenodd" d="M5.854 4.646a.5.5 0 0 1 0 .708L3.207 8l2.647 2.646a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 0 1 .708 0z"></path>
                      <path fillRule="evenodd" d="M2.5 8a.5.5 0 0 1 .5-.5h10.5a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"></path>
                    </svg>Back</span>
                </button>
              </div>
            <div className="modal-body overflow-auto">
                <h2 className="modal-title pb-4" id="minorfeelingsLabel">{prop.inequility.bookData[2].bookname}</h2>
                {ReactHtmlParser(prop.inequility.bookData[2].bookdesc)}
            </div>
            
          </div>
        </div>
      </div>
      <div className="modal fade symbio-modal text-dark" id="homie1111" tabIndex="-1" role="dialog" aria-labelledby="homieLabel" aria-hidden="true">
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="border-0 modal-header">
                <button type="button" className="badge border-0 p-1 text-secondary" data-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true" className="font-size-0pt8rem"><svg width="1.5em" height="1em" viewBox="0 0 16 16" className="bi bi-arrow-left pr-1" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                      <path fillRule="evenodd" d="M5.854 4.646a.5.5 0 0 1 0 .708L3.207 8l2.647 2.646a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 0 1 .708 0z"></path>
                      <path fillRule="evenodd" d="M2.5 8a.5.5 0 0 1 .5-.5h10.5a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"></path>
                    </svg>Back</span>
                </button>
              </div>
            <div className="modal-body overflow-auto">
                <h2 className="modal-title pb-4" id="homieLabel">{prop.inequility.bookData[3].bookname}</h2>
                {ReactHtmlParser(prop.inequility.bookData[3].bookdesc)}
            </div>
            
          </div>
        </div>
      </div>
      <div className="modal fade symbio-modal text-dark" id="blackwomen1111" tabIndex="-1" role="dialog" aria-labelledby="blackwomenLabel" aria-hidden="true">
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="border-0 modal-header">
                <button type="button" className="badge border-0 p-1 text-secondary" data-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true" className="font-size-0pt8rem"><svg width="1.5em" height="1em" viewBox="0 0 16 16" className="bi bi-arrow-left pr-1" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                      <path fillRule="evenodd" d="M5.854 4.646a.5.5 0 0 1 0 .708L3.207 8l2.647 2.646a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 0 1 .708 0z"></path>
                      <path fillRule="evenodd" d="M2.5 8a.5.5 0 0 1 .5-.5h10.5a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"></path>
                    </svg>Back</span>
                </button>
              </div>
            <div className="modal-body overflow-auto">
                <h2 className="modal-title pb-4" id="blackwomenLabel">{prop.inequility.bookData[4].bookname}</h2>
                {ReactHtmlParser(prop.inequility.bookData[4].bookdesc)}
            </div>
           
          </div>
        </div>
      </div>
    </section>
{/* modal end */}
       </>
    )
}
