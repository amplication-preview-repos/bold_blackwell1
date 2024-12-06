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
  Labels as PrismaLabels,
  SoundsLabels as PrismaSoundsLabels,
  TextsLabels as PrismaTextsLabels,
} from "@prisma/client";

export class LabelsServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count(args: Omit<Prisma.LabelsCountArgs, "select">): Promise<number> {
    return this.prisma.labels.count(args);
  }

  async labelsItems(args: Prisma.LabelsFindManyArgs): Promise<PrismaLabels[]> {
    return this.prisma.labels.findMany(args);
  }
  async labels(
    args: Prisma.LabelsFindUniqueArgs
  ): Promise<PrismaLabels | null> {
    return this.prisma.labels.findUnique(args);
  }
  async createLabels(args: Prisma.LabelsCreateArgs): Promise<PrismaLabels> {
    return this.prisma.labels.create(args);
  }
  async updateLabels(args: Prisma.LabelsUpdateArgs): Promise<PrismaLabels> {
    return this.prisma.labels.update(args);
  }
  async deleteLabels(args: Prisma.LabelsDeleteArgs): Promise<PrismaLabels> {
    return this.prisma.labels.delete(args);
  }

  async findSoundsLabelsItems(
    parentId: string,
    args: Prisma.SoundsLabelsFindManyArgs
  ): Promise<PrismaSoundsLabels[]> {
    return this.prisma.labels
      .findUniqueOrThrow({
        where: { id: parentId },
      })
      .soundsLabelsItems(args);
  }

  async findTextsLabelsItems(
    parentId: string,
    args: Prisma.TextsLabelsFindManyArgs
  ): Promise<PrismaTextsLabels[]> {
    return this.prisma.labels
      .findUniqueOrThrow({
        where: { id: parentId },
      })
      .textsLabelsItems(args);
  }
}
