import './products.scss';
import { Link } from 'react-router-dom';
import Typography from '@mui/material/Typography';
import Breadcrumbs from '@mui/material/Breadcrumbs';

export default function Products() {


    async function productList() {
        try {
            const data = await fetch("https://fashion4.p.rapidapi.com/v1/version", {
                "method": "GET",
                "headers": {
                    "x-rapidapi-host": "fashion4.p.rapidapi.com",
                    "x-rapidapi-key": "dffcc5f24emsh89532c7a5575c02p168eddjsn47c9716293e9",
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                }
            });
        
            const response = data.json();

            console.log(response);
        } catch (err) {
            console.log(err);
        }
    }

    return (
        <div className='products'>
            <Breadcrumbs aria-label="breadcrumb">
                {/* <Link underline="hover" color="inherit" href="">
                    MUI
                </Link> */}
                {/* <Link
                    underline="hover"
                    color="inherit"
                    href=""
                    >
                    Core
                </Link> */}
                <Typography color="text.primary">Breadcrumbs</Typography>
            </Breadcrumbs>
            <button onClick={productList}></button>
        </div>
    )
}
