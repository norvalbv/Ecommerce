import './navbar.scss';
import { Link } from 'react-router-dom';
import SearchIcon from '@mui/icons-material/Search';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';

export default function NavBar() {

    return (
        <div className="navbar">
            <div className="left">
                <FormControl size="small">
                    <InputLabel id="demo-simple-select-label">LAN</InputLabel>
                    <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        label="LANG"
                        defaultValue='EN'
                    >
                        <MenuItem value='EN'>EN</MenuItem>
                        <MenuItem value='FR'>FR</MenuItem>
                        <MenuItem value='GER'>GER</MenuItem>
                        <MenuItem value='JP'>JP</MenuItem>
                    </Select>
                </FormControl>
                <div className="search">
                    <input placeholder="search" />
                    <SearchIcon fontSize='small'/>
                </div>
            </div>
            <div className="middle">
                <h1><Link to="/" id="logo">B'e-commerce.</Link></h1>
            </div>
            <div className="right">
                <a href="#">REGISTER</a>
                <a href="">LOGIN</a>
                <ShoppingCartIcon fontSize='small' className='shop-icon'/>
            </div>
        </div>
    )
}
