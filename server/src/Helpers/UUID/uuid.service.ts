import { Injectable } from '@nestjs/common';
import { v4 as uuidv4 } from 'uuid';
import * as fs from 'fs';
import * as path from 'path';

@Injectable()
export class UuidService {
  private readonly filePath = path.join(__dirname, '..', 'uuid.txt');
  private uuid: string;

  constructor() {
    this.uuid = this.getOrGenerateUuid();
  }

  private getOrGenerateUuid(): string {
    if (fs.existsSync(this.filePath)) {
      return fs.readFileSync(this.filePath, 'utf8');
    } else {
      const newUuid = uuidv4();
      fs.writeFileSync(this.filePath, newUuid, 'utf8');
      return newUuid;
    }
  }

  public Getuuid(): string {
    return this.uuid;
  }
}
