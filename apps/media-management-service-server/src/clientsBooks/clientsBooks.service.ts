import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { ClientsBooksServiceBase } from "./base/clientsBooks.service.base";

@Injectable()
export class ClientsBooksService extends ClientsBooksServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
