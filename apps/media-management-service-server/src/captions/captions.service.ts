import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { CaptionsServiceBase } from "./base/captions.service.base";

@Injectable()
export class CaptionsService extends CaptionsServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
