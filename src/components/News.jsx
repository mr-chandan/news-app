import React, { useState, useEffect } from 'react'
import Newsitem from './Newsitem.jsx'

export default function News() {

    const [article, setarticles] = useState([]);

    useEffect(() => {
        async function run() {
            let url = "https://newsapi.org/v2/top-headlines?country=in&apiKey=7db4862bfb1040679a3137f51055d973"
            let data = await fetch(url);
            let parseddata = await data.json();
            setarticles(parseddata.articles);
        }

        run();
    }, []);

    console.log(article);

    return (
        <div className='contaihner my-3'>
            <h2>Top news </h2>
            <div className='row'>

                {article.map((art,index )=> {
                    return <Newsitem key={index} url={art.urlToImage} title={art.title} auth={art.description} />
    
                })}


            </div>
        </div>
    )
}
