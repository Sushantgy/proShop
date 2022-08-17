import React, { Suspense, useEffect } from "react";
import { Col, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
// import Product from "../components/Product";
import { listProducts } from "../actions/productActions";
import Message from "../components/Message";
import Loader from "../components/Loader";
import ErrorFallback from "../components/ErrorBoundary";
import {ErrorBoundary} from 'react-error-boundary'
const Product = React.lazy(() => import("../components/Product"));

function HomeScreen() {
  const dispatch = useDispatch();
  const productList = useSelector((state) => state.productList);
  const { loading, error, products } = productList;
  useEffect(() => {
    dispatch(listProducts());
  }, [dispatch]);
  return (
    <>
      <h1>Latest Products</h1>
      {loading ? (
        <Loader />
      ) : error ? (
        <Message variant="danger">{error}</Message>
      ) : (
        <Row>
          {products.map((product) => (
            <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
              <ErrorBoundary FallbackComponent={ErrorFallback} onReset={()=>{}}>
                <Suspense fallback={<Loader />}>
                  <Product product={product} />
                </Suspense>
              </ErrorBoundary>
              {/* <Product product={product} /> */}
            </Col>
          ))}
        </Row>
      )}
    </>
  );
}
export default HomeScreen;
