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
  Orders as PrismaOrders,
  VideoMetrics as PrismaVideoMetrics,
  Accounts as PrismaAccounts,
  Phones as PrismaPhones,
  Texts as PrismaTexts,
} from "@prisma/client";

export class OrdersServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count(args: Omit<Prisma.OrdersCountArgs, "select">): Promise<number> {
    return this.prisma.orders.count(args);
  }

  async ordersItems(args: Prisma.OrdersFindManyArgs): Promise<PrismaOrders[]> {
    return this.prisma.orders.findMany(args);
  }
  async orders(
    args: Prisma.OrdersFindUniqueArgs
  ): Promise<PrismaOrders | null> {
    return this.prisma.orders.findUnique(args);
  }
  async createOrders(args: Prisma.OrdersCreateArgs): Promise<PrismaOrders> {
    return this.prisma.orders.create(args);
  }
  async updateOrders(args: Prisma.OrdersUpdateArgs): Promise<PrismaOrders> {
    return this.prisma.orders.update(args);
  }
  async deleteOrders(args: Prisma.OrdersDeleteArgs): Promise<PrismaOrders> {
    return this.prisma.orders.delete(args);
  }

  async findVideoMetricsItems(
    parentId: string,
    args: Prisma.VideoMetricsFindManyArgs
  ): Promise<PrismaVideoMetrics[]> {
    return this.prisma.orders
      .findUniqueOrThrow({
        where: { id: parentId },
      })
      .videoMetricsItems(args);
  }

  async getAccount(parentId: string): Promise<PrismaAccounts | null> {
    return this.prisma.orders
      .findUnique({
        where: { id: parentId },
      })
      .account();
  }

  async getPhone(parentId: string): Promise<PrismaPhones | null> {
    return this.prisma.orders
      .findUnique({
        where: { id: parentId },
      })
      .phone();
  }

  async getText(parentId: string): Promise<PrismaTexts | null> {
    return this.prisma.orders
      .findUnique({
        where: { id: parentId },
      })
      .text();
  }
}