import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { TextsLabelsServiceBase } from "./base/textsLabels.service.base";

@Injectable()
export class TextsLabelsService extends TextsLabelsServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
