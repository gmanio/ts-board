import { EventEmitter, Injectable } from '@angular/core';

@Injectable()
export class DataService {
  public serviceData;
  public emitter: EventEmitter<any> = new EventEmitter();

  constructor() {
  }
}
