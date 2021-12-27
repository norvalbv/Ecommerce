import './products.scss';
import React, {useState} from 'react';

// import ImageList from '@mui/material/ImageList';
// import ImageListItem from '@mui/material/ImageListItem';
import ItemAccordion from '../accordion';
import BreadcrumbsComponent from '../breadcrumbs';

export default function Products() {

    const [imgSRC, setImgSRC] = useState();
    const [desc, setDesc] = useState('');
    const [price, setPrice] = useState('');
    const [title, setTitle] = useState('');


    // async function itemData() {
    //     try {
    //         const data = await fetch("https://apidojo-forever21-v1.p.rapidapi.com/products/v2/list?category=women_main&pageSize=48&pageNumber=1&sortby=0&filterColor=BLACK&filterSize=XS%2FS", {
    //             "method": "GET",
    //             "headers": {
    //                 "x-rapidapi-host": "apidojo-forever21-v1.p.rapidapi.com",
    //                 "x-rapidapi-key": "dffcc5f24emsh89532c7a5575c02p168eddjsn47c9716293e9"
    //             }
    //         })
        
    //         const response = await data.json();

    //         console.log(response);

    //         setImgSRC(response.CatalogProducts[0].DefaultProductImage);
    //         setDesc(response.CatalogProducts[0].Description);
    //         setPrice(response.CatalogProducts[0].OriginalPrice);
    //         setTitle(response.CatalogProducts[0].DisplayName);


    //         console.log(imgSRC);
    //     } catch (err) {
    //         console.log(err);
    //     }
    // }


    

    // fetch("https://apidojo-forever21-v1.p.rapidapi.com/products/v2/list?category=women_main&pageSize=48&pageNumber=1&sortby=0&filterColor=BLACK&filterSize=XS%2FS", {
	// "method": "GET",
	// "headers": {
	// 	"x-rapidapi-host": "apidojo-forever21-v1.p.rapidapi.com",
	// 	"x-rapidapi-key": "dffcc5f24emsh89532c7a5575c02p168eddjsn47c9716293e9"
	// }
    // })
    // .then(response => {
    //     console.log(response);
    // })
    // .catch(err => {
    //     console.error(err);
    // });


    // const SECRET_KEY = '72dkqmvd4uyg4zmkfvdl0umv';

    // https://www.etsy.com/oauth/connect?
    // response_type=code
    // &redirect_uri=https://www.example.com/some/location
    // &scope=transactions_r%20transactions_w
    // &client_id=1aa2bb33c44d55eeeeee6fff&state=superstate
    // &code_challenge=DSWlW2Abh-cf8CeLL8-g3hQ2WQyYdKyiu83u_s7nRhI
    // &code_challenge_method=S256


    async function getData ()  {
        try {
            const data = await fetch('https://openapi.etsy.com/v3/application/openapi-ping', {
                'method': 'GET',
                'headers': {
                    'x-api-key': '72dkqmvd4uyg4zmkfvdl0umv'
                },
                'cors': 'no-cors'
            });
            const response = await data.json();
            console.log(response);
        } catch (err) {
            console.log(err);
        }
    }

    return (
        <div className='products'>
                    <button onClick={getData}>iasodnuasd</button>
            <BreadcrumbsComponent />
            <button onClick={getData}>Yes</button>
            <img src={imgSRC} alt='#' />;
            <div className="product-container">
                <div className="image-section">
                    {/* <ImageList sx={{ width: 500, height: 450 }} cols={1} rowHeight={164}>
                        {itemData.map(item => (
                            <ImageListItem key={item.img}>
                            <img
                                src={`${item.img}?w=164&h=164&fit=crop&auto=format`}
                                srcSet={`${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
                                alt={item.title}
                                loading="lazy"
                            />
                            </ImageListItem>
                        ))}
                    </ImageList> */}
                    <p>lasd</p>
                </div>
                <div className="info-section">
                    <h2>{title}</h2>
                    <p>{price}</p>
                    <div className="desc">
                        <h2>Product Description</h2>
                        <p>{desc}</p>
                    </div>
                    <ItemAccordion />
                </div>
            </div>
        </div>
    )
}
