import { TestBed } from '@angular/core/testing';

import { DbConexionService } from './db-conexion.service';

describe('DbConexionService', () => {
  let service: DbConexionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DbConexionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
