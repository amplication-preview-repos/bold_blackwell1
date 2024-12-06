import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { TextsHashtagsServiceBase } from "./base/textsHashtags.service.base";

@Injectable()
export class TextsHashtagsService extends TextsHashtagsServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
