import { Injectable, NotFoundException } from '@nestjs/common';

import { Product, Features } from './product.model';

@Injectable()
export class ProductsService {
  private products: Product[] = [];

  insertProduct(
    title: string,
    subtitle: string,
    description: string,
    collection: string,
    price: number,
    quantity: number,
    fabrication: number,
    country: string,
  ) {
    const prodId = Math.random().toString();
    const newProduct = new Product(
      prodId,
      title,
      subtitle,
      description,
      collection,
      price,
      quantity,
      fabrication,
      country,
    );
    this.products.push(newProduct);
    return prodId;
  }

  getProducts() {
    return [...this.products];
  }

  getSingleProduct(productId: string) {
    const product = this.findProduct(productId)[0];
    return { ...product };
  }

  updateProduct(
    productId: string,
    title: string,
    subtitle: string,
    description: string,
    collection: string,
    price: number,
    quantity: number,
    fabrication: number,
    country: string,
  ) {
    const [product, index] = this.findProduct(productId);
    const updatedProduct = { ...product };
    if (title) {
      updatedProduct.title = title;
    }
    if (subtitle) {
      updatedProduct.subtitle = subtitle;
    }
    if (description) {
      updatedProduct.description = description;
    }
    if (collection) {
      updatedProduct.collection = collection;
    }
    if (price) {
      updatedProduct.price = price;
    }
    if (quantity) {
      updatedProduct.quantity = quantity;
    }
    if (fabrication) {
      updatedProduct.fabrication = fabrication;
    }
    if (country) {
      updatedProduct.country = country;
    }
    this.products[index] = updatedProduct;
  }

  private findProduct(id: string): [Product, number] {
    const productIndex = this.products.findIndex((prod) => prod.id === id);
    const product = this.products[productIndex];
    if (!product) {
      throw new NotFoundException('Could not find product');
    }
    return [product, productIndex];
  }

  deleteProduct(prodId: string) {
    const index = this.findProduct(prodId)[1];
    this.products.splice(index, 1);
  }
}
