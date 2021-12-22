import { AppBar } from "@material-ui/core";
import { Link } from "react-router-dom";
import CartWidget from "./CartWidget";
import { Wrapper, Logo, MenuItem, Left, Center, Right } from './styledComponents';

const NavBar = () => {
    return (
        <AppBar position="relative" color="">
            <Wrapper>
                <Left>
                    <Link to='/' style={{textDecoration: "none", color: "black"}}><Logo>2CAMISETA</Logo></Link>
                </Left>
                <Center>
                    <Link to='/category/9' style={{textDecoration: "none", color: "black"}}><MenuItem>MUJERES</MenuItem></Link>
                    <Link to='/category/1' style={{textDecoration: "none", color: "black"}}><MenuItem>HOMBRES</MenuItem></Link>
                    <Link to='/category/5' style={{textDecoration: "none", color: "black"}}><MenuItem>NIÑOS</MenuItem></Link>                    
                </Center>
                <Right>
                    
                    <MenuItem><Link to='/cart' style={{textDecoration: "none", color: "black"}}> TU CARRITO <CartWidget /></Link></MenuItem>
                </Right>
            </Wrapper>
        </AppBar>
    );
}

export default NavBar;