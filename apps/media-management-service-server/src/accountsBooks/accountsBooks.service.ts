import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { AccountsBooksServiceBase } from "./base/accountsBooks.service.base";

@Injectable()
export class AccountsBooksService extends AccountsBooksServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
