
import {
  Card,
  CardMedia,
  CardContent,
  Typography,
  Button,
  Box,
} from "@mui/material";
import { AddShoppingCart } from "@mui/icons-material";
import { useDispatch } from "react-redux";
import { addToCart } from "../features/products/cart/cartSlice";

export default function ProductCard({ product }) {
  const dispatch = useDispatch();

  const handleAddToCart = () => {
  dispatch(
    addToCart({
      ...product,
      id: product._id,
    })
  );
};

  return (
    <Card
      sx={{
        height: "100%",
        display: "flex",
        flexDirection: "column",
        borderRadius: 3,
        transition: "0.2s",
        "&:hover": {
          transform: "translateY(-4px)",
          boxShadow: 5,
        },
      }}
    >
      <CardMedia
        component="img"
        height="210"
        image={product.image}
        alt={product.title}
        sx={{ objectFit: "cover" }}
      />

      <CardContent sx={{ flexGrow: 1 }}>
        <Typography variant="body2" color="text.secondary">
          {product.category}
        </Typography>

        <Typography variant="h6" sx={{ mt: 1 }}>
          {product.title}
        </Typography>

        <Typography
          variant="h6"
          color="primary"
          sx={{ my: 2, fontWeight: "bold" }}
        >
          ₹{product.price.toLocaleString("en-IN")}
        </Typography>

        <Box>
          <Button
            fullWidth
            variant="contained"
            startIcon={<AddShoppingCart />}
            onClick={handleAddToCart}
          >
            Add to Cart
          </Button>
        </Box>
      </CardContent>
    </Card>
  );
}
