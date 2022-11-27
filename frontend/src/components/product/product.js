import React from 'react';
import { Link } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Rating from '../rating/rating';

export default function product(props) {
  const { product } = props;
  return (
    <Card className="product">
      <Link to={`/product/${product.slug}`}>
        <img src={product.image} alt={product.name} />
      </Link>
      <Card.Body className="product-info">
        <Link to={`/product/${product.slug}`}>
          <Card.Title>{product.name}</Card.Title>
        </Link>
        <Rating
          rating={product.rating}
          numReviews={product.numReviews}
        ></Rating>
        <Card.Text>${product.price}</Card.Text>
        <Button>Add to cart</Button>
      </Card.Body>
    </Card>
  );
}
