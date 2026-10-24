
import {
  Container,
  Typography,
  Button,
  IconButton,
  Box,
  Paper,
} from "@mui/material";
import { Delete } from "@mui/icons-material";
import { useDispatch, useSelector } from "react-redux";
import { removeFromCart } from "../features/products/cart/cartSlice";
import { increaseQuantity, decreaseQuantity } from "../features/products/cart/cartSlice";

export default function Cart() {
  const dispatch = useDispatch();
  const items = useSelector((state) => state.cart.items);

  const total = items.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return (
    <Container maxWidth="md" sx={{ py: 5 }}>
      <Typography variant="h4" fontWeight="bold" gutterBottom>
        Shopping Cart
      </Typography>

      {items.length === 0 ? (
        <Typography color="text.secondary">
          Your cart is empty. Start shopping!
        </Typography>
      ) : (
        <>
          {items.map((item) => (
            <Paper
              key={item.id}
              variant="outlined"
              sx={{
                p: 2,
                mb: 2,
                display: "flex",
                alignItems: "center",
                gap: 2,
              }}
            >
              <Box
                component="img"
                src={item.image}
                alt={item.title}
                sx={{
                  width: 85,
                  height: 85,
                  objectFit: "cover",
                  borderRadius: 2,
                }}
              />

              <Box sx={{ flexGrow: 1 }}>
                <Typography fontWeight="bold">
                  {item.title}
                </Typography>
                <Typography color="primary">
                  ₹{item.price.toLocaleString("en-IN")}
                </Typography>

                <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                  <Button
                    size="small"
                    onClick={() => dispatch(decreaseQuantity(item.id))}
                  >
                    −
                  </Button>

                  <Typography>{item.quantity}</Typography>

                  <Button
                    size="small"
                    onClick={() => dispatch(increaseQuantity(item.id))}
                  >
                    +
                  </Button>
                </Box>
              </Box>

              <IconButton
                color="error"
                aria-label={`Remove ${item.title}`}
                onClick={() => dispatch(removeFromCart(item.id))}
              >
                <Delete />
              </IconButton>
            </Paper>
          ))}

          <Paper variant="outlined" sx={{ p: 3, mt: 3 }}>
            <Typography variant="h5" fontWeight="bold">
              Total: ₹{total.toLocaleString("en-IN")}
            </Typography>

            <Button
              fullWidth
              variant="contained"
              size="large"
              sx={{ mt: 2 }}
              disabled={items.length === 0}
              onClick={() =>
                window.alert("Checkout will be implemented next!")
              }
            >
              Proceed to Checkout
            </Button>
          </Paper>
        </>
      )}
    </Container>
  );
}
