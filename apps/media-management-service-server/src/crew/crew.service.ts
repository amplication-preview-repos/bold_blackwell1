import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { CrewServiceBase } from "./base/crew.service.base";

@Injectable()
export class CrewService extends CrewServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
