import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { LabelsServiceBase } from "./base/labels.service.base";

@Injectable()
export class LabelsService extends LabelsServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
