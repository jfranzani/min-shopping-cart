import { TestBed } from '@angular/core/testing';
import { HttpTestingController, HttpClientTestingModule } from '@angular/common/http/testing';
import { ProductService } from './product.service';
import { HttpClient } from '@angular/common/http';
import { Product } from '../core/models/product';

describe('ProductService', () => {
  let service: ProductService;
  let httpMock: HttpTestingController;
  let httpClient: HttpClient;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule]
    });
    service = TestBed.inject(ProductService);
    httpMock = TestBed.inject(HttpTestingController)
    httpClient = TestBed.inject(HttpClient)
  });

  it('getAllProducts() should call http Get method for the given route', () => {

    //Arrange
    const products: Product[] = [{ title: 'TheCodeBuzz', id: 1, category: 'someCat', image: 'simeUrl', description: 'someDesc', price: 20 }]

    //Act
    service.getAllProducts().subscribe((prods) => {
      expect(prods).toEqual(products);
    });

    const req = httpMock.expectOne('https://fakestoreapi.com/products');
    //Assert
    expect(req.request.method).toBe('GET');
    req.flush(products);
    httpMock.verify();
  });
});
