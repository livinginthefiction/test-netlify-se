import React from 'react';
import ReactHtmlParser from 'react-html-parser'

function HistoryYear(props){
    return(
        <>
        <div className="timeline-block">
            <div className="timeline-date pad pad-xl pad-top-none">
                <h2 className="white-text xxl">{props.year}</h2>
            </div>
            {props.data && props.data.map(ListMonth)}
        </div>
        </>

    )
}

function ListMonth(val)
{
    return (
        <div key={Math.random()+val} className="timeline-item-wrap timeline-item--right pad-bottom-xxs">
        <div className="timeline-item flex grey flip-navy rounded-small pad">
            {ReactHtmlParser(val)}
        </div>
    </div>
    )
}

export default HistoryYear