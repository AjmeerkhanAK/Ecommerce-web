
import { AppBar, Toolbar, Typography, Button, Badge } from "@mui/material";
import { ShoppingCart } from "@mui/icons-material";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

export default function Navbar() {
  const cartItems = useSelector((state) => state.cart.items);

  const cartCount = cartItems.reduce(
    (total, item) => total + item.quantity,
    0
  );

  return (
    <AppBar position="sticky">
      <Toolbar>
        <Typography
          variant="h6"
          component={Link}
          to="/"
          sx={{
            flexGrow: 1,
            color: "inherit",
            textDecoration: "none",
            fontWeight: "bold",
          }}
        >
          MiniShop
        </Typography>

        <Button color="inherit" component={Link} to="/">
          Home
        </Button>

        <Button
          color="inherit"
          component={Link}
          to="/cart"
          startIcon={
            <Badge badgeContent={cartCount} color="error">
              <ShoppingCart />
            </Badge>
          }
        >
          Cart
        </Button>

        <Button color="inherit" component={Link} to="/login">
          Login
        </Button>
      </Toolbar>
    </AppBar>
  );
}
