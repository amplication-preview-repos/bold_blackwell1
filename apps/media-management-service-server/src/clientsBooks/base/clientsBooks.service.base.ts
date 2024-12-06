/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { PrismaService } from "../../prisma/prisma.service";

import {
  Prisma,
  ClientsBooks as PrismaClientsBooks,
  Books as PrismaBooks,
  Clients as PrismaClients,
} from "@prisma/client";

export class ClientsBooksServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count(
    args: Omit<Prisma.ClientsBooksCountArgs, "select">
  ): Promise<number> {
    return this.prisma.clientsBooks.count(args);
  }

  async clientsBooksItems(
    args: Prisma.ClientsBooksFindManyArgs
  ): Promise<PrismaClientsBooks[]> {
    return this.prisma.clientsBooks.findMany(args);
  }
  async clientsBooks(
    args: Prisma.ClientsBooksFindUniqueArgs
  ): Promise<PrismaClientsBooks | null> {
    return this.prisma.clientsBooks.findUnique(args);
  }
  async createClientsBooks(
    args: Prisma.ClientsBooksCreateArgs
  ): Promise<PrismaClientsBooks> {
    return this.prisma.clientsBooks.create(args);
  }
  async updateClientsBooks(
    args: Prisma.ClientsBooksUpdateArgs
  ): Promise<PrismaClientsBooks> {
    return this.prisma.clientsBooks.update(args);
  }
  async deleteClientsBooks(
    args: Prisma.ClientsBooksDeleteArgs
  ): Promise<PrismaClientsBooks> {
    return this.prisma.clientsBooks.delete(args);
  }

  async getBook(parentId: string): Promise<PrismaBooks | null> {
    return this.prisma.clientsBooks
      .findUnique({
        where: { id: parentId },
      })
      .book();
  }

  async getClient(parentId: string): Promise<PrismaClients | null> {
    return this.prisma.clientsBooks
      .findUnique({
        where: { id: parentId },
      })
      .client();
  }
}
