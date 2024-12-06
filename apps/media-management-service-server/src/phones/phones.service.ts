import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { PhonesServiceBase } from "./base/phones.service.base";

@Injectable()
export class PhonesService extends PhonesServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
