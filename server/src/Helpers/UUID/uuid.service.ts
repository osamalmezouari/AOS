import { Injectable } from '@nestjs/common';
import { v4 as uuidfunc } from 'uuid';

@Injectable()
export class UuidService {
  private readonly uuid: uuidfunc;
  Getuuid() {
    return this.uuid();
  }
}
