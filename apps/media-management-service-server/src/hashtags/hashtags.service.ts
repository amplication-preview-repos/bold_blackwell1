import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { HashtagsServiceBase } from "./base/hashtags.service.base";

@Injectable()
export class HashtagsService extends HashtagsServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
