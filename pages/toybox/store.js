// pages/toybox/test.js
import React, { useState, useEffect } from "react";
import Link from "next/link";
import Head from "next/head";
import Image from "next/image";
import Layout, { SiteTitle } from "../../components/layout";
import utilStyles from "../../styles/utils.module.css";
import { useImmer } from "use-immer";
import Slider from "react-slick";
import Products from "./product.json";
import MUIBadge from "@mui/material/Badge";
import { styled } from "@mui/material/styles";
import IconButton from "@mui/material/IconButton";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
// import ReactHtmlParser from 'react-html-parser';
import CarouselIMG,{ setIMGs } from '../../components/Carousel.js';
 
import {
  Container,
  Row,
  Col,
  Button,
  Card,
  CardImg,
  CardBlock,
  CardTitle,
  CardSubtitle,
  CardText,
  Badge,
  CardBody,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Table,
  Label,
  Input,
  Form,
  FormGroup,
  Alert,
} from "reactstrap";

function ProductItemCard({
  product,
  img,
  title,
  price,
  stock,
  desc,
  discount,
  addToCart,
  ProductDetailToggle,
}) {
  const [amount, setAmount] = useState(1);
  return (
    <Col xs="12" md="4">
      <Card
        color="light"
        style={{
          width: "18rem",
        }}
      >
        <img
          className="set_pointer"
          alt={title}
          src={img}
          onClick={() => ProductDetailToggle(product.id)}
        />
        <CardBody>
          <CardTitle   className="set_pointer" tag="h3" onClick={() => ProductDetailToggle(product.id)}>
            {title}
          </CardTitle>
          <CardText   className="set_pointer" onClick={() => ProductDetailToggle(product.id)}>
            {desc}
          </CardText>
          <Form>
            <FormGroup>
              <Badge color={discount ? "danger" : "success"}>
                {discount ? "特價:" : "售價:"}
                {price}
              </Badge>
              {` `}
              {stock === 0 ? (
                <Badge color="warning">售完</Badge>
              ) : (
                <>
                  <select
                    value={amount}
                    onChange={(e) => setAmount(e.target.value)}
                  >
                    {Array.from({ length: stock }, (_, i) => (
                      <>
                        <option value={i + 1}>{i + 1}</option>
                      </>
                    ))}
                  </select>
                  <Button
                    color="primary"
                    onClick={() => addToCart(product, amount)}
                  >
                    加入購物車
                  </Button>
                </>
              )}
            </FormGroup>
          </Form>
        </CardBody>
      </Card>
    </Col>
  );
}

function ProductCard({ AddToCart, ProductDetailToggle }) {
  return (
    <Container>
      <Row>
        {Products.map((product) => (
          <ProductItemCard
            key={product.id}
            product={product}
            img={product.img}
            title={product.title}
            price={product.price}
            stock={product.stock}
            desc={product.desc}
            discount={product.discount}
            addToCart={AddToCart}
            ProductDetailToggle={ProductDetailToggle}
          />
        ))}
      </Row>
    </Container>
  );
}

function ListBuyCart({
  modal,
  Toggle,
  Buycart,
  ChangeCart,
  DeleteCart,
  CleanCart,
  totalAmount,
  CheckoutCart,
}) {
  return (
    <Modal isOpen={modal} toggle={Toggle}>
      <ModalHeader toggle={Toggle}>購物車</ModalHeader>
      <ModalBody>
        <Table striped hover>
          <thead>
            <tr>
              <th>#</th>
              <th>品項</th>
              <th>單價</th>
              <th>數量</th>
              <th>價格</th>
            </tr>
          </thead>
          <tbody>
            {Buycart.map((item, i) => (
              <>
                <tr>
                  <th scope="row">{i + 1}</th>
                  <td>{item.title}</td>
                  <td>{item.price}</td>
                  <td>
                    {" "}
                    <select
                      value={item.amount}
                      onChange={(e) => ChangeCart(item, e.target.value)}
                    >
                      {Array.from({ length: item.stock }, (_, i) => (
                        <>
                          <option value={i + 1}>{i + 1}</option>
                        </>
                      ))}
                    </select>
                  </td>
                  <td>
                    {item.amount * item.price}{" "}
                    <Button onClick={() => DeleteCart(item.id)}>X</Button>
                  </td>
                </tr>
              </>
            ))}
          </tbody>
          <tfoot>
            {" "}
            <th></th>
            <th></th>
            <th></th>
            <th></th>
            <th>
              {" "}
              <Alert color="success" className="text-right">
                總價：
                {totalAmount}元
              </Alert>
            </th>
          </tfoot>
        </Table>
      </ModalBody>
      <ModalFooter>
        <Container>
          <Row>
            <Col xs="4">
              <Button color="warning" onClick={() => CleanCart()}>
                清空購物車
              </Button>
            </Col>
            <Col xs="4"></Col>
            <Col xs="4">
              <Button
                disabled={!Buycart.length}
                color={Buycart.length ? "primary" : ""}
                onClick={() => CheckoutCart(totalAmount)}
              >
                結帳
              </Button>
              <Button color="secondary" onClick={Toggle}>
                取消
              </Button>
            </Col>
          </Row>
        </Container>
      </ModalFooter>
    </Modal>
  );
}

function ProductDetail({
  modal,
  Toggle,
  Buycart,
  productId,
  AddToCart,
  ChangeCart,
  DeleteCart,
  CleanCart,
  totalAmount,
  CheckoutCart,
}) {
  const [amount, setAmount] = useState(1);
  const findProduct = Products.filter((item) => item.id === productId);
  let product;

  if (findProduct.length !== 0) {
    product = findProduct[0];
    setIMGs(product.id,'Products');
  }

  return (
    <Modal isOpen={modal} toggle={Toggle} size="xl">
      <ModalHeader toggle={Toggle}>{product.title}</ModalHeader>
      <ModalBody>
        <Container>
          <Row>
            <Col xs="6">
              {product.imgs?<CarouselIMG />:<img src={product.img} alt={product.title} width="100%" />}
            </Col>
            <Col xs="6">
              <h1>{product.title}</h1>
              <h3>{product.desc}</h3>
              <h1>
                {" "}
                <Badge
                  color={product.discount ? "danger" : "success"}
                  size="xl"
                >
                  {product.discount ? "特價:" : "售價:"}
                  {product.price}
                </Badge>
              </h1>
              <Form>
                <FormGroup>
                  {` `}
                  {product.stock === 0 ? (
                    <Badge color="warning">售完</Badge>
                  ) : (
                    <>
                      <select
                        value={amount}
                        onChange={(e) => setAmount(e.target.value)}
                      >
                        {Array.from({ length: product.stock }, (_, i) => (
                          <>
                            <option value={i + 1}>{i + 1}</option>
                          </>
                        ))}
                      </select>
                      <Button
                        color="primary"
                        onClick={() => {AddToCart(product, amount);Toggle();}}
                      >
                        加入購物車
                      </Button>
                    </>
                  )}
                </FormGroup>
              </Form>
            </Col>
          </Row>
          <div>
          {product.detail?product.detail:product.desc}
          </div>
        </Container>
      </ModalBody>
    </Modal>
  );
}



const StyledBadge = styled(MUIBadge)(({ theme }) => ({
  "& .MuiBadge-badge": {
    right: -3,
    top: 13,
    border: `2px solid ${theme.palette.background.paper}`,
    padding: "0 4px",
  },
}));

export default function Store() {
  const [showBuyCartBlock, setShowBuyCartBlock] = useState(false);
  const [showProductDetail, setShowProductDetail] = useState(false);
  const [Buycart, setBuycar] = useState([]);
  const [domLoaded, setDomLoaded] = useState(false);
  const [productId, setProductId] = useState("");

  useEffect(() => {
    setDomLoaded(true);
  }, []);

  let totalAmount = 0;

  Buycart.map((item) => {
    totalAmount += item.price * item.amount;
  });

  function ProductDetailToggle(pId) {
    setShowProductDetail(!showProductDetail);
    if (pId) setProductId(pId);
  }

  function BuyCartToggle() {
    setShowBuyCartBlock(!showBuyCartBlock);
  }

  function AddToCart(product, stock) {
    const cart = Buycart.filter((item) => item.id !== product.id);
    product["amount"] = stock;
    cart.push(product);
    setBuycar(cart);
  }

  function ChangeCart(product, stock) {
    const cart = Buycart.filter((item) => item.id !== product.id);
    product["amount"] = stock;
    cart.push(product);
    setBuycar(cart);
  }

  function DeleteCart(id) {
    const cart = Buycart.filter((item) => item.id !== id);
    setBuycar(cart);
  }

  function CleanCart() {
    setBuycar([]);
  }

  function CheckoutCart(totalPrice) {
    alert(`此訂單總共花費${totalPrice}元！`);
    BuyCartToggle();
    setBuycar([]);
  }

  return (
    <Layout>
      <Head>
        <title>{SiteTitle}</title>
      </Head>

      <main>
        <Button
          color={Buycart.length ? "primary" : "success"}
          onClick={BuyCartToggle}
        >
          購物車
          {domLoaded && (
            <IconButton aria-label="cart">
              <StyledBadge badgeContent={Buycart.length} color="secondary">
                <ShoppingCartIcon />
              </StyledBadge>
            </IconButton>
          )}
          {/* <Badge>{Buycart.length}</Badge> */}
        </Button>

        <ProductCard
          AddToCart={AddToCart}
          ProductDetailToggle={ProductDetailToggle}
        />

        {showProductDetail && (
          <ProductDetail
            modal={showProductDetail}
            Toggle={ProductDetailToggle}
            Buycart={Buycart}
            productId={productId}
            AddToCart={AddToCart}
            ChangeCart={ChangeCart}
            DeleteCart={DeleteCart}
            CleanCart={CleanCart}
            totalAmount={totalAmount}
            CheckoutCart={CheckoutCart}
          />
        )}

        <ListBuyCart
          modal={showBuyCartBlock}
          Toggle={BuyCartToggle}
          Buycart={Buycart}
          ChangeCart={ChangeCart}
          DeleteCart={DeleteCart}
          CleanCart={CleanCart}
          totalAmount={totalAmount}
          CheckoutCart={CheckoutCart}
        />
      </main>
    </Layout>
  );
}
