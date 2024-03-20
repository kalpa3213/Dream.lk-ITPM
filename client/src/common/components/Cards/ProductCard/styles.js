import styled from "styled-components";

export const ProductItemStyled = styled.div`
  position: relative;
  overflow: hidden;
  border-radius: 12px;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2); /* Increased shadow intensity */
  transition: transform 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275); /* Cooler transition */

  &:hover {
    transform: translateY(-10px); /* Lift the card more on hover */
  }
  .product-image {
    width: 100%;
    height: 200px;
    object-fit: cover;
    border-top-left-radius: 12px;
    border-top-right-radius: 12px;
  }

  .product-info {
    padding: 20px;
    background-color: #fff;
    border-bottom-left-radius: 12px;
    border-bottom-right-radius: 12px;
  }

  .product-title {
    font-size: 1.2rem;
    font-weight: bold;
    color: #333;
    margin-bottom: 10px;
  }

  .product-price {
    font-size: 1rem;
    color: #777;
    margin-bottom: 10px;
  }

  .sold-out-overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.7);
    display: flex;
    align-items: center;
    justify-content: center;
    color: #fff;
    font-weight: bold;
    font-size: 1.5rem;
    opacity: 0;
    transition: opacity 0.3s ease-in-out;
  }

  &:hover .sold-out-overlay {
    opacity: 1;
  }
`;
