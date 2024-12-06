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
  TextsHashtags as PrismaTextsHashtags,
  Hashtags as PrismaHashtags,
  Texts as PrismaTexts,
} from "@prisma/client";

export class TextsHashtagsServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count(
    args: Omit<Prisma.TextsHashtagsCountArgs, "select">
  ): Promise<number> {
    return this.prisma.textsHashtags.count(args);
  }

  async textsHashtagsItems(
    args: Prisma.TextsHashtagsFindManyArgs
  ): Promise<PrismaTextsHashtags[]> {
    return this.prisma.textsHashtags.findMany(args);
  }
  async textsHashtags(
    args: Prisma.TextsHashtagsFindUniqueArgs
  ): Promise<PrismaTextsHashtags | null> {
    return this.prisma.textsHashtags.findUnique(args);
  }
  async createTextsHashtags(
    args: Prisma.TextsHashtagsCreateArgs
  ): Promise<PrismaTextsHashtags> {
    return this.prisma.textsHashtags.create(args);
  }
  async updateTextsHashtags(
    args: Prisma.TextsHashtagsUpdateArgs
  ): Promise<PrismaTextsHashtags> {
    return this.prisma.textsHashtags.update(args);
  }
  async deleteTextsHashtags(
    args: Prisma.TextsHashtagsDeleteArgs
  ): Promise<PrismaTextsHashtags> {
    return this.prisma.textsHashtags.delete(args);
  }

  async getHashtag(parentId: string): Promise<PrismaHashtags | null> {
    return this.prisma.textsHashtags
      .findUnique({
        where: { id: parentId },
      })
      .hashtag();
  }

  async getText(parentId: string): Promise<PrismaTexts | null> {
    return this.prisma.textsHashtags
      .findUnique({
        where: { id: parentId },
      })
      .text();
  }
}
