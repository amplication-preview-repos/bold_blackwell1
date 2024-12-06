import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { SoundsLabelsServiceBase } from "./base/soundsLabels.service.base";

@Injectable()
export class SoundsLabelsService extends SoundsLabelsServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
