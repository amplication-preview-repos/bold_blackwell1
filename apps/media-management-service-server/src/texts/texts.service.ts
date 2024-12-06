import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { TextsServiceBase } from "./base/texts.service.base";

@Injectable()
export class TextsService extends TextsServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
