import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { BooksServiceBase } from "./base/books.service.base";

@Injectable()
export class BooksService extends BooksServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
