import React,{useState} from 'react'
import {Helmet} from "react-helmet";

function GraphSection(prop) {
    // console.log(prop.data)
    const [barStatus, setBarStatus] = useState('active');
    const [overlayStatus, setOverlayStatus] = useState('');
    const [animation, setAnimation] = useState('');
    const [stats, setStats] = useState({});
    var barStyle={},overlayStyle={};

    document.createElement('stststst');

    function showOverlay(colIndex,isOpen) {
        if (!isOpen) {
            setOverlayStatus('active');
            setAnimation('d-none');
            setBarStatus('');
            overlayStyle={};
            barStyle={'transition': 'all 0.4s cubic-bezier(0.86, 0, 0.07, 1)'};
            updateInfo(colIndex);
        } else {
            setOverlayStatus('');
            setBarStatus('active');
            setAnimation('');
            barStyle={};
            overlayStyle={'transition': 'all 0.4s cubic-bezier(0.86, 0, 0.07, 1)'};
        }
    }

    var data = [];
    prop.data.graphData.map((value,key)=>{
        data.push({
            goals:value.graphLeftText,
            games:value.graphRightText,
            avg:value.graphPrice,
            symbioPrice:value.graphSymbioPrice,
            title:value.graphSectionTitle,
        })
    })
    // var data = [
    //     {
    //   //      year: '2007-2008',
    //         goals: 'goal 0',
    //         games: 'games 0',
    //         avg: 'avg 0'

    //     },
    //     {
    // //      year: '2007-2008',
    //         goals: 'goal 1',
    //         games: 'games 1',
    //         avg: 'avg 1'

    //     },
    //     {
    //         //      year: '2007-2008',
    //         goals: 'goal 2  ',
    //         games: 'games 2 ',
    //         avg: 'avg 2 '

    //     }
    // ];

    function updateInfo(index) {
        setStats({
            'average':data[index].avg,
            'symbioPrice':data[index].symbioPrice,
            'goals':data[index].goals,
            'games':data[index].games,
            'title':data[index].title,
        })
      //  vYear.text(data[index].year);
        // vAvg.text(data[index].avg);
        // vGoal.text(data[index].goals);
        // vGames.text(data[index].games);
    }
    

    return (
        <>
       <Helmet>
            <link rel="stylesheet" href="https://www.symbioenergy.co.uk/backend/index.php/api/home/homeRest"/>
      </Helmet>
        
        <section className="pt-5 mt-5">
            <h1 className="font-family-san-serif font-size-3pt5rem font-weight-bolder mb-4 text-center text-capitalize text-dark px-3">{prop.data.graphMainTitle}</h1>

            <main className="stats">
                {/* <header className="stats__header active">
                </header> */}
                <ul className="stats__list">
                {prop.data.graphData.map((value,key)=>{
                    if(value.graphActive=='true'){var symbioBar='symbio_bar';}else{var symbioBar='';}
                    return(
                    <li key={'graph'+key} className="stats__item">
                        <div onClick={() => showOverlay(key,false)} style={barStyle} className={`stats__item-bar ${barStatus} ${symbioBar} `}></div>
                    </li>    
                    ) 
                })}
                </ul>
                <div className={`${animation}`} style={{ 'position':'relative','textAlign':'center'}}>
                Click
                    <div className="clickEffect" ></div>
                    <img className='clickEffectImg' src="https://fdossena.com/html5cool/clickfx/cursor.png" />
                </div>
                <div className={`stats__overlay ${overlayStatus} `} style={overlayStyle}>
                <div className="stats__overlay-back" onClick={() => showOverlay(0,true)}>
                    <svg fill="white" xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 36 36"><path d="M30 16.5H11.74l8.38-8.38L18 6 6 18l12 12 2.12-2.12-8.38-8.38H30v-3z"></path></svg>
                    <p id="year">Back</p>
                </div>
                <div className="stats_overlay_cover align-items-center d-flex justify-content-around py-5">
                    <div className="text-box w-25">
                        <p id="goals">{stats.goals}</p>
                    </div>
                    <div className="stats__overlay-avg">
                        <p>{stats.title} Price</p>
            <p className="avg" id="avg">{stats.average}</p>
                        <p>Symbio Price</p>
                        <p className="avg" id="avg1">{stats.symbioPrice}</p>
                    </div>
                    <div className="text-box w-25">
                        <p id="games">{stats.games}</p>
                    </div>
                </div>
                </div>
            </main>


        </section>
        </>
    )
}

export default GraphSection
