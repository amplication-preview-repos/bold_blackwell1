import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { SoundsServiceBase } from "./base/sounds.service.base";

@Injectable()
export class SoundsService extends SoundsServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
